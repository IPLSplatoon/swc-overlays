<template>
    <div class="intermission-next-up">
        <div class="title">Next up</div>
        <opacity-swap-transition>
            <fitted-content
                :key="`${teamA?.name}_${teamB?.name}`"
                :max-width="900"
                class="next-team-names"
            >
                <div class="team-name-content-wrapper">
                    <div class="team-name-container">
                        <div
                            v-if="!$helpers.isBlank(teamA?.romanizedName)"
                            class="secondary-name"
                        >
                            {{ teamA?.romanizedName }}
                        </div>
                        <div class="team-name">{{ teamA?.name }}</div>
                    </div>
                    <span class="versus">vs</span>
                    <div class="team-name-container">
                        <div
                            v-if="!$helpers.isBlank(teamB?.romanizedName)"
                            class="secondary-name"
                        >
                            {{ teamB?.romanizedName }}
                        </div>
                        <div class="team-name">{{ teamB?.name }}</div>
                    </div>
                </div>
            </fitted-content>
        </opacity-swap-transition>
        <span class="round-type">{{ roundType }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import FittedContent from '../../../components/FittedContent.vue';
import { computed } from 'vue';
import { useNextRoundStore } from '../../../../shared/store/nextRoundStore';

export default defineComponent({
    name: 'IntermissionNextUp',

    components: {
        OpacitySwapTransition,
        FittedContent
    },

    setup() {
        const nextRoundStore = useNextRoundStore();

        return {
            teamA: computed(() => nextRoundStore.nextRound.teamA),
            teamB: computed(() => nextRoundStore.nextRound.teamB),
            roundType: computed(() => {
                const gameCount = nextRoundStore.nextRound.games.length;
                return nextRoundStore.nextRound.round.type === 'PLAY_ALL'
                    ? `Play all ${gameCount}`
                    : `Best of ${gameCount}`;
            })
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.intermission-next-up {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: -10px;

    .title {
        font-size: 56px;
    }

    .next-team-names {
        margin: 5px 0;
        font-size: 40px;
        font-weight: 400;

        .team-name-content-wrapper {
            display: flex;
            align-items: center;
            height: 86px;
        }

        .team-name-container {
            text-align: center;
        }

        .team-name {
            font-size: 42px;
        }

        .secondary-name {
            font-size: 24px;
            margin-bottom: -10px;
        }

        .versus {
            margin: 0 15px;
            color: $accent;
            font-weight: 700;
        }
    }

    .round-type {
        font-size: 28px;
        font-style: italic;
    }
}
</style>
