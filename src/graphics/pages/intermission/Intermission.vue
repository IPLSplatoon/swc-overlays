<template>
    <div class="intermission-wrapper">
        <div class="intermission-main-content">
            <img
                class="tournament-logo"
                :src="require('img/logo-transparent.png')"
            >
            <div class="intermission-slides">
                <transition
                    mode="out-in"
                    @leave="slideLeave"
                    @enter="slideEnter"
                    @before-enter="beforeSlideEnter"
                >
                    <component :is="activeBreakSlide" />
                </transition>
            </div>
        </div>
        <div class="intermission-main-content-broadcasters">
            <img
                class="ipl-streamed-logo"
                :src="require('img/ipl-streamed-logo.png')"
            >
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IntermissionMain from './components/IntermissionMain.vue';
import IntermissionNextUp from './components/IntermissionNextUp.vue';
import { computed } from 'vue';
import gsap from 'gsap';
import { useSlides } from '../../helpers/useSlides';
import OpacitySwapTransition from '../../components/OpacitySwapTransition.vue';
import { useNextRoundStore } from '../../../shared/store/nextRoundStore';

export default defineComponent({
    name: 'Intermission',

    components: { OpacitySwapTransition, IntermissionMain, IntermissionNextUp },

    setup() {
        const nextRoundStore = useNextRoundStore();

        const slides = useSlides([
            { component: 'IntermissionMain' },
            { component: 'IntermissionNextUp', enabled: computed(() => nextRoundStore.nextRound.showOnStream) }
        ]);

        return {
            activeBreakSlide: slides.activeComponent,
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

.intermission-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.intermission-main-content {
    border-radius: $default-border-radius;
    z-index: 100;
    padding: 15px 25px;
    margin-bottom: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > .tournament-logo {
        width: 800px;
    }

    > .intermission-slides {
        height: 350px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        &:before {
            content: '';
            width: 1000px;
            height: 400px;
            position: absolute;
            top: 25px;
            background-color: black;
            z-index: -1;
            border-radius: 50%;
            filter: blur(75px);
            opacity: 0.9;
        }
    }
}

.intermission-main-content-broadcasters {
    position: absolute;
    bottom: 15px;
    image-rendering: -webkit-optimize-contrast;
    filter:
        drop-shadow(0 0 20px black)
        drop-shadow(0 0 10px black);

    > .ipl-streamed-logo {
        height: 60px;
    }
}
</style>
