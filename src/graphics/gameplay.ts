import './styles/graphics-common.scss';

import { createApp } from 'vue';
import Gameplay from './pages/gameplay/Gameplay.vue';
import { installCommonHelpers } from './helpers/installCommonHelpers';
import { createPinia } from 'pinia';
import { initCasterStore } from '../shared/store/casterStore';
import { initActiveRoundStore } from '../shared/store/activeRoundStore';
import { initScoreboardStore } from '../shared/store/scoreboardStore';

(async () => {
    const app = createApp(Gameplay);
    installCommonHelpers(app);
    app.use(createPinia());
    await initCasterStore();
    await initActiveRoundStore();
    await initScoreboardStore();
    app.mount('#app');
})();
