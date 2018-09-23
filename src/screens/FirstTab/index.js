// @flow

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavButtons from '../../global/NavButtons';
import NavBar from '../../global/NavBar';
import Constants from '../../global/Constants';
import CounterView from '../components/Counter';
import { Card } from 'native-base';
@inject('App', 'Account', 'Counter')
@observer
export default class FirstTab extends Component {
  static navigatorButtons = NavButtons.WithSideMenu;
  static navigatorStyle = NavBar.Default;

  constructor(props: {}) {
    super(props);
    console.log('TCL: Card', Card);

    const { App, navigator } = this.props;
    App.rootNavigator = navigator;

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event: {}) => {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
  };

  render() {
    const { Account, Counter } = this.props;
    const myIcon = <Icon name="rocket" size={30} color="#900" />;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>First Tab Counter</Text>
        {myIcon}
        <CounterView
          count={Counter.count}
          onPlus={() => Counter.onPlus()}
          onMinus={() => Counter.onMinus()}
        />

        <Button
          title={`Push new screen`}
          onPress={() => {
            this.props.navigator.push({
              screen: Constants.Screens.PUSHED_SCREEN.screen,
              title: 'Pushed Screen'
            });
          }}
        />

        <View style={{ marginTop: 20 }}>
          {Account.authorized ? (
            <View>
              <Text>{`Logged in as ${Account.current.username}`}</Text>
              <Button
                title={`Log out`}
                onPress={() =>
                  Account.logout().then(() =>
                    Constants.Global.openLoginModalIn(this.props.navigator)
                  )
                }
              />
            </View>
          ) : (
              <Button
                title={`Log in`}
                onPress={() =>
                  Constants.Global.openLoginModalIn(this.props.navigator)
                }
              />
            )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
