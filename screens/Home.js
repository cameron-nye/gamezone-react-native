import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {globalStyles} from '../styles/Global'

const Home = ({navigation}) => {
  const {navigate} = navigation
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button title='Review Details' onPress={() => navigate('ReviewDetails')}/>
    </View>
  )
}

export default Home
