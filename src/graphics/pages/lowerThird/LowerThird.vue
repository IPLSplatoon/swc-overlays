<template>
    <div class="lower-third-wrapper">
        <div class="lower-third-content">
            <div class="lower-third-slides">
                <div class="slide-content">
                    <transition
                        mode="out-in"
                        @leave="slideLeave"
                        @enter="slideEnter"
                        @before-enter="beforeSlideEnter"
                    >
                        <component :is="activeSlide" />
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { NodeCGBrowser } from 'nodecg/browser';
import { defineComponent } from '@vue/runtime-core';
import { useSlides } from '../../helpers/useSlides';
import { DASHBOARD_BUNDLE_NAME } from '../../../shared/constants';
import { computed } from 'vue';
import gsap from 'gsap';
import LowerThirdMusic from './components/LowerThirdMusic.vue';
import LowerThirdNextRound from './components/LowerThirdNextRound.vue';
import LowerThirdActiveRound from './components/LowerThirdActiveRound.vue';
import LowerThirdCasters from './components/LowerThirdCasters.vue';
import LowerThirdCasterTwitters from './components/LowerThirdCasterTwitters.vue';
import LowerThirdPredictions from './components/LowerThirdPredictions.vue';
import { useNextRoundStore } from '../../../shared/store/nextRoundStore';
import { useMusicStore } from '../../../shared/store/musicStore';
import { usePredictionDataStore } from '../../../shared/store/predictionDataStore';

export default defineComponent({
    name: 'LowerThird',

    components: {
        LowerThirdMusic,
        LowerThirdNextRound,
        LowerThirdActiveRound,
        LowerThirdCasters,
        LowerThirdCasterTwitters,
        LowerThirdPredictions
    },

    setup() {
        const nextRoundStore = useNextRoundStore();
        const musicStore = useMusicStore();
        const predictionDataStore = usePredictionDataStore();
        const enableLowerThirdPredictions = computed(() => {
            const currentPrediction = predictionDataStore.predictionStore.currentPrediction;
            return predictionDataStore.predictionStore.status?.predictionsEnabled
                && (currentPrediction?.status === 'ACTIVE' || currentPrediction?.status === 'LOCKED');
        });
        const showNextRound = computed(() => nextRoundStore.nextRound.showOnStream);

        const slides = useSlides([
            { component: 'LowerThirdMusic', enabled: computed(() => musicStore.musicShown), duration: 15 },
            { component: 'LowerThirdNextRound', enabled: showNextRound },
            { component: 'LowerThirdActiveRound', enabled: computed(() => !showNextRound.value) },
            { component: 'LowerThirdCasters', duration: 20 },
            { component: 'LowerThirdCasterTwitters', duration: 20 },
            { component: 'LowerThirdPredictions', enabled: enableLowerThirdPredictions }
        ]);

        nodecg.listenFor('showPredictionData', DASHBOARD_BUNDLE_NAME, () => {
            slides.forceSetSlide('LowerThirdPredictions');
        });

        return {
            activeSlide: slides.activeComponent,
            slideLeave(elem: HTMLElement, done: gsap.Callback) {
                gsap.to(elem, { y: 15, opacity: 0, ease: 'power2.in', duration: 0.5, onComplete: done });
            },
            beforeSlideEnter(elem: HTMLElement) {
                gsap.set(elem, { y: -15, opacity: 0 });
            },
            slideEnter(elem: HTMLElement, done: gsap.Callback) {
                gsap.to(elem, { y: 0, opacity: 1, ease: 'power2.out', duration: 0.5, onComplete: done });
            }
        };
    }
});
</script>

<style lang="scss">
@import '../../styles/constants';

body {
    background-color: #222222;
}

.lower-third-wrapper {
    width: calc(100% - 400px);
    margin: 0 200px;
    height: 150px;
    position: absolute;
    bottom: 75px;
    left: 0;

    > .lower-third-content {
        width: 100%;
        height: 100px;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        border-radius: $default-border-radius;

        > .separator {
            width: 2px;
            height: 80%;
            background-color: $accent;
        }

        > .lower-third-slides {
            @include container-border;

            position: relative;
            font-size: 36px;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 16px;
            height: 100%;
            background-color: $text-background-alpha;
            border-radius: $default-border-radius;
        }
    }
}
</style>
