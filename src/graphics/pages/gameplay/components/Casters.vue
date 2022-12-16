<template>
    <transition
        @enter="castersEnter"
        @leave="castersLeave"
        @before-enter="beforeCastersEnter"
    >
        <div
            v-if="castersVisible"
            class="casters-wrapper"
        >
            <div class="casters-header">
                Commentators
            </div>
            <div class="casters-content">
                <div
                    v-for="(caster, id) in casterStore.casters"
                    :key="id"
                    class="caster-item"
                >
                    <fitted-content :max-width="280">
                        <span class="caster-name">{{ caster.name }}</span>
                        <badge class="caster-pronouns">
                            {{ caster.pronouns }}
                        </badge>
                    </fitted-content>
                    <fitted-content
                        :max-width="280"
                        class="caster-twitter"
                    >
                        {{ caster.twitter }}
                    </fitted-content>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { NodeCGBrowser } from 'nodecg/browser';
import { defineComponent } from '@vue/runtime-core';
import FittedContent from '../../../components/FittedContent.vue';
import Badge from '../../../components/Badge.vue';
import { ref } from 'vue';
import gsap from 'gsap';
import { useCasterStore } from '../../../../shared/store/casterStore';
import { DASHBOARD_BUNDLE_NAME } from '../../../../shared/constants';

export default defineComponent({
    name: 'Casters',

    components: { FittedContent, Badge },

    setup() {
        const casterStore = useCasterStore();
        const castersVisible = ref(false);

        nodecg.listenFor('mainShowCasters', DASHBOARD_BUNDLE_NAME, () => {
            if (!castersVisible.value) {
                castersVisible.value = true;

                setTimeout(() => {
                    castersVisible.value = false;
                }, 15 * 1000);
            }
        });

        return {
            casterStore,
            castersVisible,

            castersEnter: (elem: HTMLElement, done: gsap.Callback) => {
                gsap.to(elem, { y: 0, opacity: 1, ease: 'power2.out', onComplete: done });
            },
            beforeCastersEnter: (elem: HTMLElement) => {
                gsap.set(elem, { y: 25, opacity: 0 });
            },
            castersLeave: (elem: HTMLElement, done: gsap.Callback) => {
                gsap.to(elem, { y: 25, opacity: 0, ease: 'power2.in', onComplete: done });
            }
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.casters-wrapper {
    position: absolute;
    bottom: 30px;
    right: 60px;
    width: 300px;
    overflow: hidden;

    > .casters-header {
        font-size: 28px;
        text-align: center;
        width: 100%;
        background-color: $text-background;
        padding: 4px 0;
        margin-bottom: 2px;
        border-radius: $default-border-radius;
    }

    > .casters-content {
        min-height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        > .caster-item {
            padding: 6px 10px 10px;
            margin-bottom: 2px;
            border-radius: $default-border-radius;

            .caster-name {
                @include text-shadow;
                font-size: 30px;
            }

            .caster-pronouns {
                @include text-shadow;
                font-size: 20px;
                transform: translateY(-3px);
            }

            .caster-twitter {
                @include text-shadow;
                font-size: 22px;
                font-weight: 500;
                margin-top: -8px;
            }

            &:nth-child(odd) {
                @include gradient-bg(70deg);
            }

            &:nth-child(even) {
                @include gradient-bg(250deg);
            }
        }
    }
}
</style>
