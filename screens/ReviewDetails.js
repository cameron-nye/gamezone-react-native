import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/Global'


const ReviewDetails = ({navigation}) => {
  const {goBack} = navigation
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details</Text>
      <Button title='Back' onPress={() => goBack()}/>
    </View>
  )
}

export default ReviewDetails
