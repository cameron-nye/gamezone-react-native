import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </ImageBackground>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20
  }
})
