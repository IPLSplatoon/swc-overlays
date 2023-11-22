<template>
    <div class="lower-third-casters">
        <opacity-swap-transition>
            <fitted-content
                :key="key"
                :max-width="1200"
            >
                <font-awesome-icon
                    :icon="['fab', 'twitter']"
                    class="icon"
                />
                <span
                    v-for="(caster, id, index) in casters"
                    :key="id"
                >
                    <span class="caster-name">{{ caster.twitter }}</span>
                    <badge
                        class="caster-pronouns"
                        :color="index % 2 === 0 ? COLORS.accent1 : COLORS.accent2"
                    >
                        {{ caster.pronouns }}
                    </badge>
                    <span
                        v-if="index !== casterCount - 1"
                    >
                        {{ index === casterCount - 2 ? ' & ' : ', ' }}
                    </span>
                </span>
            </fitted-content>
        </opacity-swap-transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import FittedContent from '../../../components/FittedContent.vue';
import { computed } from 'vue';
import Badge from '../../../components/Badge.vue';
import { COLORS } from '../../../styles/colors';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useCasterStore } from '../../../../shared/store/casterStore';

library.add(faTwitter);

export default defineComponent({
    name: 'LowerThirdCasterTwitters',

    components: { Badge, FittedContent, OpacitySwapTransition, FontAwesomeIcon },

    setup() {
        const casterStore = useCasterStore();

        return {
            key: computed(() =>
                Object.values(casterStore.casters)
                    .map(caster => `${caster.twitter}_${caster.pronouns}`)
                    .join('_')),
            casterCount: computed(() => Object.keys(casterStore.casters).length),
            casters: computed(() => casterStore.casters),
            COLORS
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.lower-third-casters {
    .caster-pronouns {
        font-size: 20px;
        transform: translateY(-4px);
    }

    .icon {
        font-size: 40px;
        margin-right: 12px;
        color: $accent;
    }
}
</style>
