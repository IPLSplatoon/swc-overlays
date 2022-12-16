import { NodeCGBrowser } from 'nodecg/browser';
import { ActiveRound, SwapColorsInternally } from 'schemas';
import { defineStore } from 'pinia';
import { DASHBOARD_BUNDLE_NAME } from '../constants';
import { createReplicantStoreInitializer } from './storeHelper';

const activeRound = nodecg.Replicant<ActiveRound>('activeRound', DASHBOARD_BUNDLE_NAME);
const swapColorsInternally = nodecg.Replicant<SwapColorsInternally>('swapColorsInternally', DASHBOARD_BUNDLE_NAME);

interface ActiveRoundStore {
    activeRound: ActiveRound;
    swapColorsInternally: SwapColorsInternally;
}

export const useActiveRoundStore = defineStore('activeRound', {
    state: (): ActiveRoundStore => ({
        activeRound: null,
        swapColorsInternally: null
    })
});

export const initActiveRoundStore = createReplicantStoreInitializer(
    [activeRound, swapColorsInternally],
    useActiveRoundStore);
