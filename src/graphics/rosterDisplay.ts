import './styles/graphics-common.scss';

import { createApp } from 'vue';
import RosterDisplay from './pages/rosterDisplay/RosterDisplay.vue';
import { installCommonHelpers } from './helpers/installCommonHelpers';
import { createPinia } from 'pinia';
import { initActiveRoundStore } from '../shared/store/activeRoundStore';

(async () => {
    const app = createApp(RosterDisplay);
    installCommonHelpers(app);
    app.use(createPinia());
    await initActiveRoundStore();
    app.mount('#app');
})();
