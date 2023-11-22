<template>
    <transition
        mode="out-in"
        @enter="stageWrapperEnter"
        @before-enter="beforeStageEnter"
        @leave="stageLeave"
    >
        <div
            :key="matchId"
            class="stage-display-wrapper"
        >
            <transition
                v-for="(game, index) in games"
                :key="`game_${index}`"
                mode="out-in"
                @enter="stageEnter"
                @leave="stageLeave"
                @before-enter="beforeStageEnter"
            >
                <div
                    :key="`${index}_${game.mode}_${game.stage}`"
                    class="stage"
                    :data-stage="game.stage"
                    :class="{
                        darkened: shouldDarkenImage(game.winner),
                        'darken-text': game.winner === 'none',
                        [`game-count-${games.length}`]: true
                    }"
                >
                    <div class="stage-content">
                        <div
                            class="stage-image"
                            :style="{ backgroundImage: `url('${getStageImagePath(game.stage)}')` }"
                        />
                        <div class="stage-data">
                            <div class="stage-mode-anchor">
                                <div class="stage-mode">
                                    <span class="stage-data-text">{{ game.mode }}</span>
                                </div>
                            </div>
                            <div class="stage-name">
                                <span class="stage-name-text">{{ game.stage }}</span>
                            </div>
                        </div>
                        <opacity-swap-transition>
                            <div
                                v-if="game.winner !== 'none'"
                                :key="winnerNames[index].name"
                                class="stage-winner"
                            >
                                <div class="stage-winner-name">{{ winnerNames[index].name }}</div>
                                <div
                                    v-if="!$helpers.isBlank(winnerNames[index].romanizedName)"
                                    class="secondary-name"
                                >
                                    {{ winnerNames[index].romanizedName }}
                                </div>
                            </div>
                        </opacity-swap-transition>
                        <div class="covers-content stage-background" />
                        <div class="covers-content darkened-background" />
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed, onMounted } from 'vue';
import OpacitySwapTransition from '../../components/OpacitySwapTransition.vue';
import gsap from 'gsap';
import { loadAndCheckIfImageExists } from '../../helpers/imageHelper';
import { addDots } from '../../../shared/helpers/stringHelper';
import { bindEntranceToTimelineGenerator } from '../../helpers/obsSourceHelper';
import { useActiveRoundStore } from '../../../shared/store/activeRoundStore';
import { useAssetPathStore } from '../../../shared/store/assetPathStore';

const STAGE_SHOW_HIDE_ANIMATION_DURATION = 0.35;

export default defineComponent({
    name: 'StageDisplay',

    components: { OpacitySwapTransition },

    setup() {
        const activeRoundStore = useActiveRoundStore();
        const assetPathStore = useAssetPathStore();
        const games = computed(() => activeRoundStore.activeRound.games);

        onMounted(() => {
            bindEntranceToTimelineGenerator(() => {
                const revealTl = gsap.timeline({ delay: 0.9 });

                revealTl
                    .fromTo(
                        '.stage', {
                            y: -35,
                            opacity: 0
                        }, {
                            duration: STAGE_SHOW_HIDE_ANIMATION_DURATION,
                            y: 0,
                            opacity: 1,
                            ease: 'power2.out',
                            stagger: 0.08,
                            delay: 0.1
                        });

                return revealTl;
            });
        });

        function stageEnter(elem: HTMLElement, done: gsap.Callback) {
            const elems = elem.classList.contains('stage') ? elem : elem.querySelectorAll('.stage');

            gsap.to(elems, {
                duration: STAGE_SHOW_HIDE_ANIMATION_DURATION,
                opacity: 1,
                y: 0,
                ease: 'power2.out',
                onComplete: done,
                stagger: 0.08
            });
        }

        return {
            games,
            shouldDarkenImage: (winner: string) => (winner !== 'none' || activeRoundStore.activeRound.match.isCompleted),
            winnerNames: computed(() => games.value?.map(game => {
                switch (game.winner) {
                    case 'alpha':
                        return {
                            name: addDots(activeRoundStore.activeRound.teamA.name),
                            romanizedName: addDots(activeRoundStore.activeRound.teamA.romanizedName as string | undefined)
                        };
                    case 'bravo':
                        return {
                            name: addDots(activeRoundStore.activeRound.teamB.name),
                            romanizedName: addDots(activeRoundStore.activeRound.teamB.romanizedName as string | undefined)
                        };
                    default:
                        return { name: undefined, romanizedName: undefined };
                }
            })),
            matchId: computed(() => activeRoundStore.activeRound.match.id),
            getStageImagePath: assetPathStore.getStageImagePath,

            async stageEnter(elem: HTMLElement, done: gsap.Callback) {
                await loadAndCheckIfImageExists(assetPathStore.getStageImagePath(elem.dataset.stage));
                stageEnter(elem, done);
            },
            stageWrapperEnter(elem: HTMLElement, done: gsap.Callback) {
                stageEnter(elem, done);
            },
            beforeStageEnter(elem: HTMLElement) {
                gsap.set(elem.classList.contains('stage') ? elem : elem.querySelectorAll('.stage'), { y: -35, opacity: 0 });
            },
            stageLeave(elem: HTMLElement, done: gsap.Callback) {
                const elems = elem.classList.contains('stage') ? elem : elem.querySelectorAll('.stage');

                gsap.to(elems, {
                    duration: STAGE_SHOW_HIDE_ANIMATION_DURATION,
                    opacity: 0,
                    y: 35,
                    ease: 'power2.in',
                    stagger: 0.08,
                    onComplete: done
                });
            }
        };
    }
});
</script>

<style lang="scss">
@import '../../styles/constants';

.stage-display-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 20px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .stage {
        height: 650px;

        &.game-count-7 {
            width: 225px;

            .stage-name {
                font-size: 32px !important;
            }
        }

        &.game-count-5 {
            width: 300px;
        }

        &.game-count-3 {
            width: 325px;
        }

        &:not(:last-child) {
            margin-right: 35px;
        }

        &.darkened {
            .darkened-background {
                background-color: rgba(34, 34, 34, 0.5) !important;
            }

            .stage-content {
                filter: drop-shadow(-2px 2px 4px $drop-shadow-color), grayscale(0.5);
            }

            &.darken-text {
                .stage-data {
                    color: #AAA !important;
                }
            }
        }

        .stage-content {
            @include container-shadow(8px);

            width: 100%;
            height: 100%;
            border-radius: $default-border-radius;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            color: white;
            overflow: hidden;
            transform: skew(0, 3deg);

            .stage-winner {
                position: absolute;
                width: calc(100% - 24px);
                top: 0;
                left: 0;
                z-index: 2;
                margin: 8px 12px;
                overflow-wrap: anywhere;
                max-height: 340px;
                overflow: hidden;
                filter: drop-shadow(0 0 4px rgba(34, 34, 34, 0.75));

                @supports not (overflow-wrap: anywhere) {
                    word-break: break-all;
                }

                .stage-winner-name {
                    font-size: 28px;
                    line-height: 36px;
                }

                .secondary-name {
                    font-size: 20px;
                    line-height: 28px;
                    opacity: 90%;
                }
            }

            .stage-data {
                width: 100%;
                z-index: 2;
                transition: color 500ms;

                .stage-name-text {
                    @include text-shadow;
                }

                .stage-name {
                    @include gradient-bg(70deg);

                    font-size: 36px;
                    line-height: 43px;
                    padding: 12px 8px 12px;
                }

                .stage-mode-anchor {
                    position: relative;
                }

                .stage-mode {
                    font-size: 26px;
                    line-height: 32px;
                    background-color: $text-background-alpha-50;
                    backdrop-filter: blur(5px);
                    padding: 4px 12px;
                    width: calc(100% - 24px);
                    position: absolute;
                    bottom: 0;
                }
            }

            .covers-content {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: $default-border-radius;
            }

            .stage-background {
                background: linear-gradient(to top, rgba(34, 34, 34, 0.9) 0%, rgba(34, 34, 34, 0) 75%);
            }

            .darkened-background {
                background-color: rgba(34, 34, 34, 0);
                transition: background-color 500ms;
            }

            .stage-image {
                z-index: -1;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                opacity: 99%;
                width: 100%;
                height: 100%;
                transform-origin: center;
                transform: scale(105%) skew(0, -3deg);
            }
        }
    }
}
</style>
