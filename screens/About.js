import React from "react"
import { ImageBackground, StyleSheet, Text, View } from "react-native"
import Card from "../shared/Card"
import { globalStyles } from "../styles/Global"

const About = () => {
	return (
		<View style={globalStyles.container} style={{ height: "100%", width: "100%" }}>
			<Card>
				<Text style={globalStyles.titleText}>About</Text>
			</Card>
		</View>
	)
}

export default About
