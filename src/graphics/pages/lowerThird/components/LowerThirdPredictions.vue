<template>
    <div class="lower-third-predictions">
        <div class="team-names">
            <fitted-content
                :max-width="500"
                class="team-name"
            >
                {{ addDots(firstOutcome?.title) }}
            </fitted-content>
            <fitted-content
                :max-width="500"
                align="right"
                class="team-name"
            >
                {{ addDots(secondOutcome?.title) }}
            </fitted-content>
        </div>
        <div class="vote-percentage">
            <div class="percentage first-outcome">{{ firstOutcomePercentageTweened }}%</div>
            <div class="percentage second-outcome">{{ secondOutcomePercentageTweened }}%</div>
            <div
                class="percentage-display first-outcome-percentage"
                :style="{ width: `${firstOutcomePercentage}%` }"
            />
            <div
                class="percentage-display second-outcome-percentage"
                :style="{ width: `${secondOutcomePercentage}%` }"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import FittedContent from '../../../components/FittedContent.vue';
import { computed } from 'vue';
import { addDots } from '../../../../shared/helpers/stringHelper';
import { useTweenedNumber } from '../../../helpers/useTweenedNumber';
import { usePredictionDataStore } from '../../../../shared/store/predictionDataStore';

export default defineComponent({
    name: 'LowerThirdPredictions',

    components: { FittedContent },

    setup() {
        const predictionStore = usePredictionDataStore();
        const firstOutcome = computed(() => predictionStore.predictionStore.currentPrediction?.outcomes[0]);
        const secondOutcome = computed(() => predictionStore.predictionStore.currentPrediction?.outcomes[1]);
        const totalPointsUsed = computed(() => (firstOutcome.value?.pointsUsed ?? 0) + (secondOutcome.value?.pointsUsed ?? 0));
        const firstOutcomePercentage = computed(() => {
            const pointsUsed = firstOutcome.value?.pointsUsed;
            if (pointsUsed === 0 || !pointsUsed) {
                return 0;
            }
            return Math.round((pointsUsed / totalPointsUsed.value) * 100);
        });
        const secondOutcomePercentage = computed(() => {
            const pointsUsed = secondOutcome.value?.pointsUsed;
            if (pointsUsed === 0 || !pointsUsed) {
                return 0;
            }
            return Math.round((pointsUsed / totalPointsUsed.value) * 100);
        });
        const firstOutcomePercentageTweened = useTweenedNumber(firstOutcomePercentage);
        const secondOutcomePercentageTweened = useTweenedNumber(secondOutcomePercentage);

        return {
            addDots,
            firstOutcome,
            secondOutcome,
            firstOutcomePercentage,
            secondOutcomePercentage,
            firstOutcomePercentageTweened,
            secondOutcomePercentageTweened
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.lower-third-predictions {
    width: 1100px;

    .team-names {
        display: flex;
        justify-content: space-between;
        font-weight: 500;

        .team-name {
            font-size: 24px;
        }
    }

    .vote-percentage {
        height: 50px;
        width: calc(100% - 16px);
        border-radius: $default-border-radius;
        background-color: rgba(34, 34, 34, 0.5);
        border: 2px solid rgba(34, 34, 34, 0.5);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 0 8px;
        overflow: hidden;

        .percentage {
            @include text-shadow;

            position: relative;
            z-index: 2;
            color: white;
            font-size: 28px;
        }

        .percentage-display {
            position: absolute;
            top: 0;
            height: 100%;
            transition: width 250ms ease;

            &.first-outcome-percentage {
                left: 0;
                background: linear-gradient(70deg, #0F3579 0%, #14459D 100%);
            }

            &.second-outcome-percentage {
                right: 0;
                background: linear-gradient(70deg, #D90C19 0%, #F21927 100%);
            }
        }
    }
}
</style>
