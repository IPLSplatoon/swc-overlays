import { AssetPaths } from 'schemas';
import { defineStore } from 'pinia';
import { DASHBOARD_BUNDLE_NAME } from '../constants';
import { createReplicantStoreInitializer } from './storeHelper';
import ImgUnknown from 'img/stages/unknown-stage.png';

const assetPaths = nodecg.Replicant<AssetPaths>('assetPaths', DASHBOARD_BUNDLE_NAME);

interface AssetPathStore {
    assetPaths: AssetPaths;
}

export const useAssetPathStore = defineStore('assetPaths', {
    state: (): AssetPathStore => ({
        assetPaths: null
    }),
    getters: {
        getStageImagePath: state =>
            (stageName: string) => state.assetPaths.stageImages[stageName] ?? ImgUnknown
    }
});

export const initAssetPathStore = createReplicantStoreInitializer([assetPaths], useAssetPathStore);
