import './styles/graphics-common.scss';

import { createApp } from 'vue';
import StageDisplay from './pages/stageDisplay/StageDisplay.vue';
import { installCommonHelpers } from './helpers/installCommonHelpers';
import { createPinia } from 'pinia';
import { initActiveRoundStore } from '../shared/store/activeRoundStore';

(async () => {
    const app = createApp(StageDisplay);
    installCommonHelpers(app);
    app.use(createPinia());
    await initActiveRoundStore();
    app.mount('#app');
})();
