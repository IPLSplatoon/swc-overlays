<template>
    <div class="lower-third-active-round">
        <opacity-swap-transition>
            <fitted-content
                :key="`${teamA?.name}_${teamB?.name}`"
                :max-width="1300"
            >
                <div class="team-name-content-wrapper">
                    <div class="team-name-container">
                        <div
                            v-if="!$helpers.isBlank(teamA?.romanizedName)"
                            class="secondary-name"
                        >
                            {{ $helpers.addDots(teamA?.romanizedName) }}
                        </div>
                        <div class="team-name">{{ $helpers.addDots(teamA?.name) }}</div>
                    </div>
                    <span class="scores font-numeric">{{ teamA?.score }} - {{ teamB?.score }}</span>
                    <div class="team-name-container">
                        <div
                            v-if="!$helpers.isBlank(teamB?.romanizedName)"
                            class="secondary-name"
                        >
                            {{ $helpers.addDots(teamB?.romanizedName) }}
                        </div>
                        <div class="team-name">{{ $helpers.addDots(teamB?.name) }}</div>
                    </div>
                </div>
            </fitted-content>
        </opacity-swap-transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import FittedContent from '../../../components/FittedContent.vue';
import { computed } from 'vue';
import { useActiveRoundStore } from '../../../../shared/store/activeRoundStore';

export default defineComponent({
    name: 'LowerThirdActiveRound',

    components: { FittedContent, OpacitySwapTransition },

    setup() {
        const activeRoundStore = useActiveRoundStore();
        const teamA = computed(() => activeRoundStore.activeRound.teamA);
        const teamB = computed(() => activeRoundStore.activeRound.teamB);

        return {
            teamA,
            teamB
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.lower-third-active-round {
    .team-name-content-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .team-name {
        font-size: 40px;
        font-weight: 500;
    }

    .team-name-container {
        text-align: center;
    }

    .secondary-name {
        font-size: 22px;
        margin-bottom: -10px;
    }

    .scores {
        margin: 0 12px;
        color: $accent;
        font-size: 42px;
    }
}
</style>
