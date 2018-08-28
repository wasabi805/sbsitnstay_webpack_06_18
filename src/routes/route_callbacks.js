import store from '../store';

import {setBannerState} from '.././actions/banner-actions'

export function setAppInitState () {

    store.dispatch(
        setBannerState()
    );

}