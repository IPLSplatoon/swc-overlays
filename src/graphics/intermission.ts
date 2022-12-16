import './styles/graphics-common.scss';

import { createApp } from 'vue';
import Intermission from './pages/intermission/Intermission.vue';
import { installCommonHelpers } from './helpers/installCommonHelpers';
import { createPinia } from 'pinia';
import { initBreakScreenStore } from '../shared/store/breakScreenStore';
import { initMusicStore } from '../shared/store/musicStore';
import { initNextRoundStore } from '../shared/store/nextRoundStore';

(async () => {
    const app = createApp(Intermission);
    installCommonHelpers(app);
    app.use(createPinia());
    await initBreakScreenStore();
    await initMusicStore();
    await initNextRoundStore();
    app.mount('#app');
})();
