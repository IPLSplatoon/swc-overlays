<template>
    <div class="lower-third-casters">
        <opacity-swap-transition>
            <fitted-content
                :key="key"
                :max-width="1200"
            >
                <font-awesome-icon
                    icon="microphone"
                    class="icon"
                />
                <span
                    v-for="(caster, id, index) in casters"
                    :key="id"
                >
                    <span class="caster-name">{{ caster.name }}</span>
                    <badge class="caster-pronouns">
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
import { defineComponent } from '@vue/runtime-core';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import FittedContent from '../../../components/FittedContent.vue';
import { computed } from 'vue';
import Badge from '../../../components/Badge.vue';
import { COLORS } from '../../../styles/colors';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons/faMicrophone';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useCasterStore } from '../../../../shared/store/casterStore';

library.add(faMicrophone);

export default defineComponent({
    name: 'LowerThirdCasters',

    components: { Badge, FittedContent, OpacitySwapTransition, FontAwesomeIcon },

    setup() {
        const casterStore = useCasterStore();

        return {
            key: computed(() =>
                Object.values(casterStore.casters)
                    .map(caster => `${caster.name}_${caster.pronouns}`)
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
    font-weight: 500;

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
