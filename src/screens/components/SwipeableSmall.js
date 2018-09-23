import React from 'react';
import { View, StyleSheet, Platform, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import Interactable from 'react-native-interactable';

import Card from './Card';

export default class SwipeableSmall extends React.Component {
  static propTypes = {
    cards: PropTypes.array.isRequired
  };

  static HorizontalMargin = 10;
  static VerticalMargin = 10;
  static BoundaryPadding = 30;
  static BoundaryBounce = 0;
  static ContainerToCardWidthRatio = 3.25;

  state = {
    cardWidth: 0,
    swipeableWidth: 0,
    snapPoints: [],
    swipeableBoundary: 0
  };

  onLayout = e => {
    const containerWidth = e.nativeEvent.layout.width;
    console.log('TCL: SwipeableSmall -> containerWidth', containerWidth);
    const { cards } = this.props;

    // calculate the width of a card
    const cardWidth = containerWidth / SwipeableSmall.ContainerToCardWidthRatio;
    this.setState({ cardWidth });

    // calculate total swipeable width
    const swipeableWidth = cardWidth * cards.length;
    console.log('TCL: SwipeableSmall -> swipeableWidth', swipeableWidth);
    this.setState({ swipeableWidth });

    // calculate incrementation amount for snap points
    const incrementAmountForOuterCards =
      cardWidth -
      (containerWidth - cardWidth) / 2 +
      SwipeableSmall.HorizontalMargin;
    const incrementAmountForInnerCards = cardWidth;

    // calculate snap points
    let x = 0;
    let snapPoints = cards.map((card, index) => {
      const snapPointForCard = { x };
      if (index === 0 || index === cards.length - 2) {
        x -= incrementAmountForOuterCards;
      } else {
        x -= incrementAmountForInnerCards;
      }
      return snapPointForCard;
    });
    this.setState({ snapPoints });

    // calculate the swiping boundary
    const swipeableBoundary =
      snapPoints[cards.length - 1].x - SwipeableSmall.BoundaryPadding;
    this.setState({ swipeableBoundary });
  };

  render() {
    const { cards } = this.props;
    let cardsToRender;

    if (this.state.cardWidth > 0) {
      cardsToRender = cards.map((card, index) => (
        <View key={index} style={{ alignItems: 'center' }}>
          <Image
            key={index}
            style={{
              marginHorizontal: 5,
              width: 100,
              height: 70,
              borderRadius: 5
            }}
            source={require('./../../../img/homeone.jpg')}
          />
          <Text style={{ fontSize: 11 }}>Luis Alfredo</Text>
        </View>
      ));
    }

    return (
      <View onLayout={this.onLayout}>
        <Interactable.View
          snapPoints={this.state.snapPoints}
          // does not work on Android
          boundaries={
            Platform.OS === 'ios'
              ? {
                  left: this.state.swipeableBoundary,
                  right: SwipeableSmall.BoundaryPadding,
                  bounce: SwipeableSmall.BoundaryBounce
                }
              : { bounce: SwipeableSmall.BoundaryBounce }
          }
          horizontalOnly={true}
          animatedNativeDriver={true}
          style={[
            styles.interactableContainer,
            { width: this.state.swipeableWidth }
          ]}
        >
          {cardsToRender}
        </Interactable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  interactableContainer: {
    flexDirection: 'row',
    marginHorizontal: SwipeableSmall.HorizontalMargin,
    marginVertical: SwipeableSmall.VerticalMargin
  }
});
