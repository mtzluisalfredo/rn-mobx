import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Card extends React.Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  };

  static Margin = 10;

  render() {
    const { title, subtitle, buttonText, imageUrl, width } = this.props;
    return (
      <View style={[styles.container, { width: width - 2 * Card.Margin }]}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: width - 2 * Card.Margin, height: width - 10 * Card.Margin }}
        />
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="map-pin" size={11} color="gray" />
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => { }}>
              <Text style={{ fontSize: 12 }}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: Card.Margin,
    backgroundColor: 'white',
  },
  content: {
    minHeight: 75,
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: 'lightgray',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
    marginLeft: 2,
  },
  buttonContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgray',
  },
});