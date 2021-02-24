import React, { useState } from "react"
import { StyleSheet, Modal, Text, View } from "react-native"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { MaterialIcons } from "@expo/vector-icons"
import { globalStyles } from "../styles/Global"
import Card from "../shared/Card"
import ReviewForm from "./ReviewForm"

const Home = ({ navigation }) => {
	const [ modalOpen, setModalOpen ] = useState(false)
	const [ reviews, setReviews ] = useState([
		{ title: "League of Legends", rating: 4.5, body: "lorem ipsum", key: "4" },
		{ title: "Destiny", rating: 5, body: "lorem ipsum", key: "2" },
		{ title: 'The Last of Us', rating: 5, body: "lorem ipsum", key: "3" }
	])
	const { navigate } = navigation

	return (
		<View style={globalStyles.container}>
			<Modal visible={modalOpen} animationType="slide" style={styles.modalToggle}>
				<View style={styles.modalContent}>
					<MaterialIcons name="close" size={24} onPress={() => setModalOpen(false)} style={{...styles.modalToggle, ...styles.modalClose}} />
					<ReviewForm/>
				</View>
			</Modal>
			<MaterialIcons name="add" size={24} onPress={() => setModalOpen(true)} style={styles.modalToggle} />
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigate("ReviewDetails", item)}>
						<Card>
							<Text style={globalStyles.titleText}>{item.title}</Text>
						</Card>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	modalContent: {
    flex: 1,
  },
	modalToggle: {
		marginBottom: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "gray",
		padding: 10,
		paddingHorizontal: 20,
		alignSelf: "center"
	},
  modalClose: {
    marginTop: 10,
  }
})

export default Home
