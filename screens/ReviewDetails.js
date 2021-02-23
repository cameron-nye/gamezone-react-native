import React from "react"
import { Text, View } from "react-native"
import { globalStyles } from "../styles/Global"
import Card from "../shared/Card"

const ReviewDetails = ({ navigation }) => {
	return (
		<View style={globalStyles.container}>
			<Card>
				<Text style={globalStyles.titleText}>{navigation.getParam("title")}</Text>
				<Text style={globalStyles.titleText}>{navigation.getParam("body")}</Text>
				<Text style={globalStyles.titleText}>{navigation.getParam("rating")}</Text>
			</Card>
		</View>
	)
}

export default ReviewDetails
