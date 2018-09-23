// @flow

import Images from './Images';
console.log('TCL: Images', Images);

export default {
  LOGIN_SCREEN: {
    screen : 'app.LoginScreen',
    title  : 'Login',
  },
  PUSHED_SCREEN: {
    screen : 'app.PushedScreen',
    title  : 'Pushed Screen',
  },
  DRAWER: {
    screen : 'app.DrawerScreen',
  },

  FIRST_TAB: {
    screen       : 'app.FirstTabScreen',
    title        : '',
    label        : 'First Tab',
    icon         : Images.TAB_1,
    selectedIcon : Images.TAB_1_selected,
  },
  SECOND_TAB: {
    screen       : 'app.SecondTabScreen',
    title        : 'Second Tab',
    label        : 'Second Tab',
    icon         : Images.TAB_1,
    selectedIcon : Images.TAB_1_selected,
  },
}
