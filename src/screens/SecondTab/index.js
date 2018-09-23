// @flow

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import {
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Button
} from 'native-base';
import { inject, observer } from 'mobx-react/native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NavButtons from '../../global/NavButtons';
import NavBar from '../../global/NavBar';
import Constants from '../../global/Constants';
import CounterView from '../components/Counter';

@inject('Counter')
@observer
export default class SecondTab extends Component {
  static navigatorButtons = NavButtons.WithSideMenu;
  // static navigatorStyle   = NavBar.Default;
  static navigatorStyle = {
    navBarTransparent: true,
    topBarElevationShadowEnabled: false
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      value: false
    };

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

  onValueChange = value => {
    console.log('TCL: value', value);
    this.setState({
      value: !value
    });
  };

  render() {
    const { Counter } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <Text
            style={{
              marginVertical: 10,
              marginLeft: 14.5,
              color: '#504e49',
              fontSize: 26,
              fontWeight: 'bold'
            }}
          >
            Perfil
          </Text>
        </View>
        <View style={styles.viewCard}>
          <Image
            style={styles.imgCard}
            source={require('./../../../img/29564260.jpeg')}
          />
          <View style={styles.viewText}>
            <Text style={styles.title}>Luis Alfredo</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <IconFontAwesome5 name="map-pin" size={11} color="gray" />
              <Text style={styles.titleTwo}>Zapopan, Jalisco</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <IconFontAwesome5 name="check-circle" size={10} color="green" />
              <Text style={{ fontSize: 11, color: 'green', marginLeft: 1 }}>
                Usuario confiable
              </Text>
            </View>
          </View>
        </View>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#FF9501' }}>
              <Icon active name="ios-notifications" />
            </Button>
          </Left>
          <Body>
            <Text>Notificaciones</Text>
          </Body>
          <Right>
            <Switch
              onValueChange={value => this.onValueChange(!value)}
              value={this.state.value}
            />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#007AFF' }}>
              <Icon
                type="MaterialCommunityIcons"
                active
                name="credit-card-multiple"
              />
            </Button>
          </Left>
          <Body>
            <Text>Métodos de pago</Text>
          </Body>
          <Right>
            <Text>Activos</Text>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#007AFF' }}>
              <Icon type="MaterialCommunityIcons" active name="sale" />
            </Button>
          </Left>
          <Body>
            <Text>Promociones</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#007AFF' }}>
              <Icon
                type="MaterialCommunityIcons"
                active
                name="home-currency-usd"
              />
            </Button>
          </Left>
          <Body>
            <Text>Mis Inverciones</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#007AFF' }}>
              <Icon
                type="MaterialCommunityIcons"
                active
                name="chart-areaspline"
              />
            </Button>
          </Left>
          <Body>
            <Text>Estados de cuenta</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#007AFF' }}>
              <Icon type="FontAwesome" active name="legal" />
            </Button>
          </Left>
          <Body>
            <Text>Contrato</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#007AFF' }}>
              <Icon type="FontAwesome" active name="paperclip" />
            </Button>
          </Left>
          <Body>
            <Text>Términos y Condiciones</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  viewCard: {
    width: '100%',
    height: 120,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingLeft: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  imgCard: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 15
  },
  viewText: {
    marginHorizontal: 4,
    flex: 1
  },
  title: {
    color: '#4b4a53',
    fontWeight: 'bold',
    fontSize: 20
  },
  titleTwo: {
    color: '#5d5d6b',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 5
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
