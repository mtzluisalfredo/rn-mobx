// @flow

import Constants      from '../Constants';

const openLoginModalIn = (navigator: { showModal: Function }, withCancelButton: boolean = true,) => {
  navigator.showModal({
    ...Constants.Screens.LOGIN_SCREEN,
    passProps: { withCancelButton },
    overrideBackPress: true, // [Android] if you want to prevent closing a modal by pressing back button in Android
  });
}

export default {
  openLoginModalIn
}
