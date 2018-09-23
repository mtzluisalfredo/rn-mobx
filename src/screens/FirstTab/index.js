// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from 'react-native';
import { inject, observer } from 'mobx-react/native';
import NavButtons from '../../global/NavButtons';
import NavBar from '../../global/NavBar';
import Constants from '../../global/Constants';
import CounterView from '../components/Counter';
import { Card, Thumbnail } from 'native-base';
import Swipeable from './../components/Swipeable';

@inject('App', 'Account', 'Counter')
@observer
export default class FirstTab extends Component {
  static navigatorButtons = NavButtons.WithSideMenu;
  // static navigatorStyle = NavBar.Default;
  static navigatorStyle = {
    navBarTransparent: true,
    topBarElevationShadowEnabled: false
  };

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
    const Cards = [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
        title: 'Java Developer',
        subtitle: 'New York City',
        buttonText: 'Detalles'
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1501850305723-0bf18f354fea?w=500',
        title: 'React Native Developer',
        subtitle: 'San Francisco',
        buttonText: 'Detalles'
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?w=500',
        title: 'Node.js Developer',
        subtitle: 'New York City',
        buttonText: 'Detalles'
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1505238680356-667803448bb6?w=500',
        title: 'Python Developer',
        subtitle: 'Los Angeles',
        buttonText: 'Detalles'
      }
    ];

    return (
      <ScrollView style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <Text
            style={{
              marginVertical: 10,
              marginLeft: 17,
              color: '#504e49',
              fontSize: 26,
              fontWeight: 'bold'
            }}
          >
            Opciones de renta
          </Text>
          <View style={{ flex: 3 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
                paddingStart: 10,
                paddingEnd: 5
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(elem => {
                return (
                  <View style={{ alignItems: 'center' }}>
                    <Image

                      style={{
                        marginHorizontal: 5,
                        width: 100,
                        height: 70,
                        borderRadius: 5,
                      }}
                      source={require('./../../../img/homeone.jpg')}
                    />
                    {/* <Thumbnail
                      style={{
                        marginHorizontal: 5,
                        borderColor: 'pink',
                        borderWidth: 2,
                        width: 70,
                        height: 70,
                        borderRadius: 35
                      }}
                      source={require('./../../../img/homeone.jpg')}
                    /> */}
                    <Text style={{ fontSize: 11 }}>Luis Alfredo</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <Swipeable sizeImg={100} cards={Cards} />
          {/* {[1, 2, 3, 4].map(elem => {
            return (
              <View style={styles.viewCard}>
                <Image
                  style={styles.imgCard}
                  source={require('./../../../img/homeone.jpg')}
                />
                <View style={styles.viewText}>
                  <Text style={styles.title}>Departamento - 2 Recamaras</Text>
                  <Text style={styles.subtitle}>
                    110 m² | 2 recámaras | 2 baños
                </Text>
                  <Text style={{ color: '#7a7981', fontSize: 11 }}>
                    Publicado hace 9 horas
                </Text>
                </View>
                <View style={styles.viewPrice}>
                  <Text style={styles.price}>4,5 K</Text>
                  <Text style={{ fontSize: 11, color: '#65b4b7' }}>mensual</Text>
                </View>
              </View>
            );
          })} */}
        </View>
        {/* <View style={styles.viewCard}>
          <Image
            style={styles.imgCard}
            source={require('./../../../img/homeone.jpg')}
          />
          <View style={styles.viewText}>
            <Text style={styles.title}>Departamento - 2 Recamaras</Text>
            <Text style={styles.subtitle}>110 m² | 2 recámaras | 2 baños</Text>
            <Text style={{ color: '#7a7981', fontSize: 11 }}>
              Publicado hace 9 horas
            </Text>
          </View>
          <View style={styles.viewPrice}>
            <Text style={styles.price}>4,5 K</Text>
            <Text style={{ fontSize: 11, color: '#65b4b7' }}>mensual</Text>
          </View>
        </View> */}
        {/* <Image
          source={require('./../../../img/homeone.jpg')}
        /> */}
        {/* <CounterView
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
        </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  viewCard: {
    width: '100%',
    height: 80,
    backgroundColor: '#ffffff',
    paddingVertical: 5,
    paddingLeft: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#ddddde',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 0.5
  },
  imgCard: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 5
  },
  viewText: {
    marginHorizontal: 4,
    flex: 1
  },
  title: {
    color: '#4b4a53',
    fontWeight: 'bold',
    fontSize: 13
  },
  subtitle: {
    color: '#a5a4ae',
    fontSize: 12
  },
  viewPrice: {
    flex: 0.3,
    height: 60,
    backgroundColor: '#e1f1f1',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    alignItems: 'flex-end',
    paddingRight: 10,
    justifyContent: 'center'
  },
  price: {
    color: '#3f8c90',
    fontWeight: 'bold',
    fontSize: 16
  }
});
