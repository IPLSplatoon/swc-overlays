<template>
    <div class="intermission-main">
        <img
            class="loading-spinner"
            :src="require('img/loading-spinner.png')"
        >
        <opacity-swap-transition>
            <fitted-content
                :key="mainFlavorText"
                :max-width="950"
                class="flavor-text"
            >
                {{ mainFlavorText }}
            </fitted-content>
        </opacity-swap-transition>
        <intermission-main-info-row
            :value="nowPlaying"
            :visible="musicShown"
            icon="music"
        />
        <intermission-main-info-row
            :visible="nextRoundTimeVisible"
            icon="clock"
        >
            <span v-if="nextRoundStartDiffNow > 1">
                Resuming in <span class="minutes">~{{ nextRoundStartDiffNow }}</span> minutes...
            </span>
            <span v-else-if="nextRoundStartDiffNow === 1">
                Resuming in <span class="minutes">~{{ nextRoundStartDiffNow }}</span> minute...
            </span>
            <span v-else>
                The stream will resume soon!
            </span>
        </intermission-main-info-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import FittedContent from '../../../components/FittedContent.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { computed, ref, watch } from 'vue';
import IntermissionMainInfoRow from './IntermissionMainInfoRow.vue';
import { setNextStageTimer } from '../../../helpers/timerHelper';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import { getSongNameAsString } from '../../../helpers/musicHelper';
import { useMusicStore } from '../../../../shared/store/musicStore';
import { useBreakScreenStore } from '../../../../shared/store/breakScreenStore';

library.add(faMusic, faClock);

export default defineComponent({
    name: 'IntermissionMain',

    components: { OpacitySwapTransition, IntermissionMainInfoRow, FittedContent },

    setup() {
        const musicStore = useMusicStore();
        const breakScreenStore = useBreakScreenStore();
        const nextRoundStartDiffNow = ref(0);

        watch(() => breakScreenStore.nextRoundStartTime.startTime, startTime => {
            setNextStageTimer(startTime, (newValue) => nextRoundStartDiffNow.value = newValue);
        }, { immediate: true });

        return {
            nowPlaying: computed(() => getSongNameAsString(musicStore.nowPlaying)),
            musicShown: computed(() => musicStore.musicShown),
            nextRoundStartDiffNow,
            nextRoundTimeVisible: computed(() => breakScreenStore.nextRoundStartTime.isVisible),
            mainFlavorText: computed(() => breakScreenStore.mainFlavorText)
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

@keyframes loading-spinner {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.intermission-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .flavor-text {
        font-size: 64px;
        height: 90px;
        margin-bottom: 10px;
        margin-top: -10px;
    }

    span.minutes {
        font-size: 42px;
    }

    .loading-spinner {
        animation: 2000ms loading-spinner linear infinite;
    }
}
</style>
