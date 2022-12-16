<template>
    <div class="lower-third-music">
        <opacity-swap-transition>
            <fitted-content
                :key="nowPlaying"
                :max-width="1200"
            >
                <div>
                    <font-awesome-icon
                        icon="music"
                        class="icon"
                    />
                    {{ nowPlaying }}
                </div>
            </fitted-content>
        </opacity-swap-transition>
    </div>
</template>

<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { defineComponent } from '@vue/runtime-core';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import { computed } from 'vue';
import { getSongNameAsString } from '../../../helpers/musicHelper';
import FittedContent from '../../../components/FittedContent.vue';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useMusicStore } from '../../../../shared/store/musicStore';

library.add(faMusic);

export default defineComponent({
    name: 'LowerThirdMusic',

    components: { FittedContent, OpacitySwapTransition, FontAwesomeIcon },

    setup() {
        const musicStore = useMusicStore();

        return {
            nowPlaying: computed(() => getSongNameAsString(musicStore.nowPlaying)),
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.lower-third-music {
    font-weight: 500;
    display: flex;
    align-items: center;

    .icon {
        font-size: 40px;
        margin-right: 8px;
        color: $accent;
    }
}
</style>
