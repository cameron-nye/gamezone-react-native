import React from "react"
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

const Header = ({ navigation, title }) => {
	return (
		<View style={styles.header}>
			<MaterialIcons name="menu" size={28} style={styles.icon} onPress={() => navigation.openDrawer()} color='limegreen'/>
			<View style={styles.headerTitle}>
				<Image source={require("../assets/heart_logo.png")} style={styles.headerImage} />
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 20,
		color: "limegreen",
		letterSpacing: 1
	},
	icon: {
		position: "absolute",
		left: 0
	},
	headerTitle: {
		flexDirection: "row",
		alignItems: "center"
	},
	headerImage: {
		height: 26,
		width: 26,
    marginRight: 6
	}
})
