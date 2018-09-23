// @flow

import Provider from './utils/MobxRnnProvider';
import Stores from './stores';
import Constants from './global/Constants';
import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import TabBar from './global/TabBar';
import Images from './global/Constants/Images';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  'ios-person': [30, '#bbb'],
  'ios-person--big': [50, '#bbb'],

  'ios-person--active': [30, '#fff'],
  'ios-person--active--big': [50, '#fff'],
  'ios-person--active--very-big': [100, '#fff'],

  'ios-people': [30, '#bbb'],
  'ios-people--active': [30, '#fff'],

  'ios-keypad': [30, '#bbb'],
  'ios-keypad--active': [30, '#fff'],

  'ios-chatbubbles': [30, '#bbb'],
  'ios-chatbubbles--active': [30, '#fff'],

  // Use other Icon provider, see the logic at L39
  facebook: [30, '#bbb', FontAwesome],
  'facebook--active': [30, '#fff', FontAwesome],

  'home-map-marker': [30, '#bbb', MaterialCommunityIcons],
  'home-map-marker--active': [30, '#fff', MaterialCommunityIcons]
};

const defaultIconProvider = Ionicons;

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1]
      );
    })
  ).then(sources => {
    Object.keys(icons).forEach(
      (iconName, idx) => (iconsMap[iconName] = sources[idx])
    );

    // Call resolve (and we are done)
    resolve(true);
  });
});

import { registerScreens } from './screens';
registerScreens(Stores, Provider);

const startTabBasedApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'app.FirstTabScreen',
        title: '',
        label: 'Inicio',
        icon: iconsMap['home-map-marker'],
        selectedIcon: iconsMap['home-map-marker--active']
      },
      {
        screen: 'app.SecondTabScreen',
        title: '',
        label: 'Perfil',
        icon: iconsMap['ios-person'],
        selectedIcon: iconsMap['ios-person--active']
      }
    ],
    ...Platform.select({
      ios: {
        tabsStyle: TabBar.Main
      },
      android: {
        appStyle: TabBar.Main
      }
    }),
    drawer: {
      left: {
        screen: Constants.Screens.DRAWER.screen
      },
      disableOpenGesture: false
    }
  });
};

iconsLoaded.then(() => {
  startTabBasedApp();
});
