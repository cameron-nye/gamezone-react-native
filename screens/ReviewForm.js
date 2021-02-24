import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { globalStyles } from "../styles/Global"
import { Formik } from "formik"
import { TextInput } from "react-native-gesture-handler"

const ReviewForm = () => {
	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{
					title: "",
					body: "",
					rating: ""
				}}
				onSubmit={values => {
					console.log(values)
				}}
			>
				{props => (
					<View>
						<TextInput
							style={globalStyles.input}
							placeholder="Title"
							onChange={props.handleChange("title")}
							value={props.values.title}
						/>
						<TextInput
							style={globalStyles.input}
							placeholder="Description"
							onChange={props.handleChange("body")}
							value={props.values.body}
							multiline
						/>
						<TextInput
							style={globalStyles.input}
							placeholder="Rating (1-5)"
							onChange={props.handleChange("rating")}
							value={props.values.rating}
							keyboardType="numeric"
						/>
						<Button title="Submit" color="limegreen" onPress={props.handleSubmit} />
					</View>
				)}
			</Formik>
		</View>
	)
}

export default ReviewForm

const styles = StyleSheet.create({})
