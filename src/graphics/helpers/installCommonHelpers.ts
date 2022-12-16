import { App } from 'vue';
import { addDots, isBlank } from '../../shared/helpers/stringHelper';
import { COLORS } from '../styles/colors';
import { formatDuration } from './timerHelper';

export function installCommonHelpers(app: App): void {
    console.log('test');

    if (!window.obsstudio) {
        document.getElementById('app').style.backgroundColor = '#333';
    }

    app.config.globalProperties.$helpers = {
        addDots,
        isBlank,
        formatDuration,
        colors: COLORS
    };
}
