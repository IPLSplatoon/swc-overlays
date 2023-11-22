<template>
    <div
        class="team-roster"
        :class="[`position-${position}`, `team-${team}`]"
    >
        <div class="team-roster-content">
            <div class="team-name-wrapper">
                <fitted-content
                    v-if="!$helpers.isBlank(teamData?.romanizedName)"
                    :max-width="450"
                    class="team-name secondary-name"
                    align="center"
                >
                    <span>{{ $helpers.addDots(teamData?.romanizedName) }}</span>
                </fitted-content>
                <fitted-content
                    :max-width="450"
                    class="team-name"
                    align="center"
                >
                    <span>{{ $helpers.addDots(teamData?.name) }}</span>
                </fitted-content>
            </div>
            <div class="players">
                <div
                    v-for="player in players"
                    :key="player.name"
                >
                    <fitted-content
                        v-if="!$helpers.isBlank(player.romanizedName)"
                        :max-width="450"
                        class="team-player secondary-name"
                        align="center"
                    >
                        {{ $helpers.addDots(player.romanizedName) }}
                    </fitted-content>
                    <fitted-content
                        :max-width="450"
                        class="team-player"
                        :align="position === '1' ? 'left' : 'right'"
                    >
                        {{ $helpers.addDots(player.name) }}
                    </fitted-content>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed, PropType } from 'vue';
import FittedContent from '../../../components/FittedContent.vue';
import { useActiveRoundStore } from '../../../../shared/store/activeRoundStore';

export default defineComponent({
    name: 'TeamRoster',

    components: { FittedContent },

    props: {
        team: {
            type: String as PropType<'A' | 'B'>,
            required: true
        },
        position: {
            type: String as PropType<'1' | '2'>,
            required: true
        }
    },

    setup(props) {
        const activeRoundStore = useActiveRoundStore();
        const teamData = computed(() => props.team === 'A'
            ? activeRoundStore.activeRound.teamA
            : activeRoundStore.activeRound.teamB);

        return {
            teamData,
            players: computed(() => teamData.value?.players.slice(0, 5))
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.team-roster {
    width: 500px;
    height: 475px;
    margin: 0 45px;

    &.position-1 {
        .players {
            align-items: flex-start;
        }
    }

    &.position-2 {
        .players {
            align-items: flex-end;
        }
    }

    &.team-A {
        .team-name-wrapper {
            @include gradient-bg(70deg);
        }
    }

    &.team-B {
        .team-name-wrapper {
            @include gradient-bg(250deg);
        }
    }

    .team-roster-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .team-name-wrapper {
            @include container-shadow(8px);

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-bottom: 12px;
            height: 120px;
            border-radius: $default-border-radius;
        }

        .team-name {
            @include text-shadow;
            font-size: 50px;

            &.secondary-name {
                font-size: 25px;
                margin-bottom: -10px;
                margin-top: 6px;
            }
        }

        .players {
            @include container-border;

            width: calc(100% - 50px);
            padding: 5px 24px 12px;
            display: flex;
            flex-direction: column;
            border-radius: $default-border-radius;
            background-color: $text-background-alpha;
            min-height: 320px;
            overflow: hidden;
        }

        .team-player {
            font-size: 40px;
            height: 55px;

            &.secondary-name {
                font-size: 22px;
                height: 30px;
                margin-bottom: -5px;
            }
        }
    }
}
</style>
