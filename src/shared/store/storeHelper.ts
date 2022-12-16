import { NodeCGBrowser } from 'nodecg/browser';
import { ReplicantBrowser } from 'nodecg/browser';
import type * as Pinia from 'pinia';
import cloneDeep from 'lodash/cloneDeep';

export function createReplicantStoreInitializer(
    reps: ReplicantBrowser<unknown>[],
    store: Pinia.StoreDefinition<string, unknown, unknown, unknown>
): () => Promise<void> {
    return async () => {
        const storeInstance = store();
        reps.forEach(rep => {
            rep.on('change', newValue => {
                storeInstance.$patch((state: Record<string, unknown>) => {
                    state[rep.name] = cloneDeep(newValue);
                });
            });
        });
        await NodeCG.waitForReplicants(...Object.values(reps));
    };
}
