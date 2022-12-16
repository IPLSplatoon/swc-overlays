import './styles/graphics-common.scss';

import { createApp } from 'vue';
import LowerThird from './pages/lowerThird/LowerThird.vue';
import { installCommonHelpers } from './helpers/installCommonHelpers';
import { createPinia } from 'pinia';
import { initActiveRoundStore } from '../shared/store/activeRoundStore';
import { initCasterStore } from '../shared/store/casterStore';
import { initMusicStore } from '../shared/store/musicStore';
import { initPredictionDataStore } from '../shared/store/predictionDataStore';
import { initNextRoundStore } from '../shared/store/nextRoundStore';

(async () => {
    const app = createApp(LowerThird);
    installCommonHelpers(app);
    app.use(createPinia());
    await initActiveRoundStore();
    await initCasterStore();
    await initMusicStore();
    await initPredictionDataStore();
    await initNextRoundStore();
    app.mount('#app');
})();
