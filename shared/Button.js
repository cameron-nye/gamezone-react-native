import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

const Button = ({ text, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	button: {
		borderRadius: 3,
		paddingVertical: 14,
		paddingHorizontal: 10,
		backgroundColor: "#55acfc",
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'gray',
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3
	},
	buttonText: {
		color: "#fff",
		fontWeight: "bold",
		textTransform: "uppercase",
		fontSize: 16,
		textAlign: "center"
	}
})
