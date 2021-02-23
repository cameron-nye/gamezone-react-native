import React from "react"
import { Image, Text, View, StyleSheet } from "react-native"
import { globalStyles, images } from "../styles/Global"
import Card from "../shared/Card"

const ReviewDetails = ({ navigation }) => {
  const rating = navigation.getParam('rating')
	return (
		<View style={globalStyles.container}>
			<Card>
				<Text style={globalStyles.titleText}>{navigation.getParam("title")}</Text>
				<Text style={globalStyles.titleText}>{navigation.getParam("body")}</Text>
				<View style={styles.rating}>
					<Text>GameZone Rating: </Text>
					<Image source={images.ratings[rating]} />
				</View>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 2,
    borderTopColor: '#eee'
  }
})

export default ReviewDetails
