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
import { defineComponent } from 'vue';
import { useCasterStore } from '../../../shared/store/casterStore';
import LargeCasterDisplay from './components/LargeCasterDisplay.vue';

export default defineComponent({
    name: 'Casters',
    components: { LargeCasterDisplay },

    setup() {
        const casterStore = useCasterStore();

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
