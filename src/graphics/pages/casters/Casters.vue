<template>
    <div class="caster-container">
        <large-caster-display
            v-for="(caster, id) in casterStore.casters"
            :key="`caster_${id}`"
            :caster="caster"
            class="caster-display"
        />
    </div>
</template>

<script lang="ts">
import gsap from 'gsap';
import { defineComponent, onMounted } from 'vue';
import { useCasterStore } from '../../../shared/store/casterStore';
import LargeCasterDisplay from './components/LargeCasterDisplay.vue';
import { bindEntranceToTimelineGenerator } from '../../helpers/obsSourceHelper';

export default defineComponent({
    name: 'Casters',

    components: { LargeCasterDisplay },

    setup() {
        const casterStore = useCasterStore();

        onMounted(() => {
            bindEntranceToTimelineGenerator(() => {
                const revealTl = gsap.timeline({
                    delay: 0.75
                });
                revealTl
                    .fromTo(
                        '.caster-display',
                        { opacity: 0, y: -35 },
                        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1, delay: 0.5 });

                return revealTl;
            });
        });

        return {
            casterStore
        };
    }
});
</script>

<style lang="scss" scoped>
.caster-container {
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    align-items: center;
    justify-content: center;

    > .caster-display:not(:last-child) {
        margin-right: 50px;
    }
}
</style>
