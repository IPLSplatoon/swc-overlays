<template>
    <div class="large-caster-display">
        <div class="head">
            <image-loader
                :src="caster.imageUrl"
                class="caster-image"
            />
        </div>
        <div class="details">
            <fitted-content
                :max-width="365"
                align="center"
            >
                <opacity-swap-transition>
                    <div :key="`${caster.name}_${caster.pronouns}`">
                        <span class="name">{{ caster.name }}</span>
                        <badge class="pronouns">{{ caster.pronouns }}</badge>
                    </div>
                </opacity-swap-transition>
            </fitted-content>
            <fitted-content
                :max-width="365"
                align="center"
                class="twitter"
            >
                <opacity-swap-transition>
                    <span :key="`${caster.twitter}`">
                        {{ caster.twitter }}
                    </span>
                </opacity-swap-transition>
            </fitted-content>
        </div>
    </div>
</template>

<script lang="ts">
import { Caster } from 'schemas';
import { defineComponent, PropType } from 'vue';
import ImageLoader from '../../../components/ImageLoader.vue';
import FittedContent from '../../../components/FittedContent.vue';
import Badge from '../../../components/Badge.vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';

export default defineComponent({
    name: 'LargeCasterDisplay',
    components: { OpacitySwapTransition, Badge, FittedContent, ImageLoader },

    props: {
        caster: {
            type: Object as PropType<Caster>,
            required: true
        }
    }
});
</script>

<style lang="scss" scoped>
@import '../../../styles/constants';

.large-caster-display {
    width: 400px;

    > .head {
        @include gradient-bg(135deg);
        @include container-shadow(8px);

        width: 400px;
        height: 400px;
        border-radius: $default-border-radius;
        display: flex;
        align-items: center;
        justify-content: center;

        > .caster-image {
            @include text-shadow;

            width: 250px;
            height: 250px;
            border-radius: 9999px;
            overflow: hidden;
            background-color: rgba(0, 0, 0, 0.25);
        }
    }

    > .details {
        @include container-border;

        margin-top: 16px;
        padding: 8px 16px;
        background-color: $text-background-alpha;
        border-radius: $default-border-radius;

        .name {
            font-size: 40px;
            line-height: 50px;
        }

        .pronouns {
            font-size: 15px;
            transform: translateY(-6px);
        }

        .twitter {
            font-size: 20px;
        }
    }
}
</style>
