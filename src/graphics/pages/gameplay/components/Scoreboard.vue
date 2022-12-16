<template>
    <transition
        @enter="scoreboardEnter"
        @leave="scoreboardLeave"
        @before-enter="beforeScoreboardEnter"
    >
        <div
            v-if="scoreboardStore.scoreboardData.isVisible"
            class="scoreboard-wrapper"
        >
            <div class="scoreboard-teams">
                <div class="scoreboard-team-layout">
                    <div class="team-display team-alpha">
                        <opacity-swap-transition>
                            <fitted-content
                                :key="teamAName"
                                :max-width="290"
                                class="team-name"
                                align="right"
                            >
                                <div class="team-name-container">
                                    <div
                                        v-if="!$helpers.isBlank(teamA?.romanizedName)"
                                        class="secondary-name"
                                    >
                                        {{ teamA?.romanizedName }}
                                    </div>
                                    <div class="team-name-text">{{ teamAName }}</div>
                                </div>
                            </fitted-content>
                        </opacity-swap-transition>
                        <div class="score-color-wrapper">
                            <div class="team-score font-numeric">
                                {{ teamA?.score }}
                            </div>
                            <div
                                class="team-color"
                                :style="{ backgroundColor: teamA?.color }"
                            />
                        </div>
                    </div>
                    <div class="separator" />
                    <div class="team-display team-bravo">
                        <opacity-swap-transition>
                            <fitted-content
                                :key="teamBName"
                                :max-width="290"
                                class="team-name"
                                align="right"
                            >
                                <div class="team-name-container">
                                    <div
                                        v-if="!$helpers.isBlank(teamB?.romanizedName)"
                                        class="secondary-name"
                                    >
                                        {{ teamB?.romanizedName }}
                                    </div>
                                    <div class="team-name-text">{{ teamBName }}</div>
                                </div>
                            </fitted-content>
                        </opacity-swap-transition>
                        <div class="score-color-wrapper">
                            <div class="team-score font-numeric">
                                {{ teamB?.score }}
                            </div>
                            <div
                                class="team-color"
                                :style="{ backgroundColor: teamB?.color }"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="scoreboard-extra">
                <opacity-swap-transition>
                    <fitted-content
                        :key="scoreboardStore.scoreboardData.flavorText"
                        :max-width="370"
                        class="flavor-text"
                        align="center"
                    >
                        {{ scoreboardStore.scoreboardData.flavorText }}
                    </fitted-content>
                </opacity-swap-transition>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import FittedContent from '../../../components/FittedContent.vue';
import { computed } from 'vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import { addDots } from '../../../../shared/helpers/stringHelper';
import gsap from 'gsap';
import { useActiveRoundStore } from '../../../../shared/store/activeRoundStore';
import { useScoreboardStore } from '../../../../shared/store/scoreboardStore';

export default defineComponent({
    name: 'Scoreboard',

    components: { OpacitySwapTransition, FittedContent },

    setup() {
        const activeRoundStore = useActiveRoundStore();
        const teamA = computed(() => activeRoundStore.activeRound.teamA);
        const teamB = computed(() => activeRoundStore.activeRound.teamB);

        const scoreboardStore = useScoreboardStore();

        return {
            teamA,
            teamB,
            teamAName: computed(() => addDots(teamA.value.name)),
            teamBName: computed(() => addDots(teamB.value.name)),
            scoreboardStore,
            scoreboardEnter: (elem: HTMLElement, done: gsap.Callback) => {
                gsap.to(elem, { y: 0, opacity: 1, ease: 'power2.out', onComplete: done });
            },
            beforeScoreboardEnter: (elem: HTMLElement) => {
                gsap.set(elem, { y: -25, opacity: 0 });
            },
            scoreboardLeave: (elem: HTMLElement, done: gsap.Callback) => {
                gsap.to(elem, { y: -25, opacity: 0, ease: 'power2.in', onComplete: done });
            }
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.scoreboard-wrapper {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 390px;
    height: 170px;

    > .scoreboard-teams {
        position: relative;
        max-width: 100%;
        height: 127px;
        margin: 0;
        overflow: hidden;

        > .scoreboard-team-layout {
            display: grid;
            grid-template-rows: 1fr 2px 1fr;
            height: 100%;
            align-items: center;
            position: relative;
            z-index: 2;

            > .team-display {
                display: flex;
                align-items: center;
                height: 100%;
                overflow: hidden;
                border-radius: 4px;

                .score-color-wrapper {
                    display: flex;
                    height: 100%;
                    flex-grow: 1;
                    filter: drop-shadow(0 0 10px #000);

                    > .team-score {
                        text-align: center;
                        font-size: 36px;
                        line-height: 56px;
                        flex-grow: 1;
                        border-radius: 4px 0 0 4px;
                        height: 100%;
                    }

                    > .team-color {
                        width: 12px;
                        height: 100%;
                        border-radius: 0 4px 4px 0;
                        transition: background-color 500ms;
                        position: relative;

                        &:after {
                            content: '';
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            left: 0;
                            top: 0;
                            border-radius: 0 4px 4px 0;
                            background-color: rgba(0, 0, 0, 0.25);
                            mix-blend-mode: overlay;
                            clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
                        }
                    }
                }

                > .team-name {
                    @include text-shadow;
                    width: 290px;
                    margin: 4px 16px 0;
                }

                .team-name-container {
                    text-align: center;
                }

                .team-name-text {
                    font-size: 30px;
                }

                .secondary-name {
                    font-size: 15px;
                    margin-bottom: -8px;
                }

                &.team-alpha {
                    background: linear-gradient(
                        70deg,
                        #805628 0%,
                        #6B451A 10%,
                        #55391A 15%,
                        #C1742C 15%,
                        #CF9762 100%);

                    .team-score {
                        background: linear-gradient(175deg, #2E261C 0%, #2E261C 50%, #1E170C 50%, #1E170C 100%);
                    }
                }

                &.team-bravo {
                    background: linear-gradient(
                        110deg,
                        #3B476C 0%,
                        #2F3956 10%,
                        #232A40 15%,
                        #5643B9 15%,
                        #6F60BF 100%);

                    .team-score {
                        background: linear-gradient(175deg, #23252B 0%, #23252B 50%, #14141B 50%, #14141B 100%);
                    }
                }
            }
        }
    }

    > .scoreboard-extra {
        margin-top: 2px;
        height: 38px;
        border-radius: 4px;
        background-color: #1A1816;

        > .flavor-text {
            font-size: 24px;
            margin-left: 10px;
        }
    }
}
</style>
