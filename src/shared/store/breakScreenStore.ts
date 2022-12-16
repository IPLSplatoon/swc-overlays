import { NodeCGBrowser } from 'nodecg/browser';
import { ActiveBreakScene, MainFlavorText, NextRoundStartTime } from 'schemas';
import { defineStore } from 'pinia';
import { DASHBOARD_BUNDLE_NAME } from '../constants';
import { createReplicantStoreInitializer } from './storeHelper';

const mainFlavorText = nodecg.Replicant<MainFlavorText>('mainFlavorText', DASHBOARD_BUNDLE_NAME);
const nextRoundStartTime = nodecg.Replicant<NextRoundStartTime>('nextRoundStartTime', DASHBOARD_BUNDLE_NAME);
const activeBreakScene = nodecg.Replicant<ActiveBreakScene>('activeBreakScene', DASHBOARD_BUNDLE_NAME);

export const breakScreenReps = [ mainFlavorText, nextRoundStartTime, activeBreakScene ];

interface BreakScreenStore {
    mainFlavorText: MainFlavorText;
    nextRoundStartTime: NextRoundStartTime;
    activeBreakScene: ActiveBreakScene;
}

export const useBreakScreenStore = defineStore('breakScreen', {
    state: () => ({
        mainFlavorText: null,
        nextRoundStartTime: { startTime: null, isVisible: null },
        activeBreakScene: null
    } as BreakScreenStore)
});

export const initBreakScreenStore = createReplicantStoreInitializer(
    [mainFlavorText, nextRoundStartTime, activeBreakScene],
    useBreakScreenStore);
