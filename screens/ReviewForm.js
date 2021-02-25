import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { globalStyles } from "../styles/Global"
import { Formik } from "formik"
import { TextInput } from "react-native-gesture-handler"
import * as yup from "yup"

const reviewSchema = yup.object({
	title: yup.string().required().min(4),
	body: yup.string().required().min(8),
	rating: yup
		.string()
		.required()
		.test("isNum1-5", "Rating must be a number (1-5)", val => parseInt(val) < 6 && parseInt(val) > 0)
})

const ReviewForm = ({ addReview }) => {
	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{
					title: "",
					body: "",
					rating: ""
				}}
				onSubmit={(values, actions) => {
					addReview(values)
					actions.resetForm()
				}}
				validationSchema={reviewSchema}
			>
				{props => (
					<View>
						<TextInput
							style={globalStyles.input}
							placeholder="Title"
							onChangeText={props.handleChange("title")}
							value={props.values.title}
							onBlur={props.handleBlur("title")}
						/>
						<Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
						<TextInput
							style={globalStyles.input}
							placeholder="Description"
							onChangeText={props.handleChange("body")}
							value={props.values.body}
							onBlur={props.handleBlur("body")}
							multiline
						/>
						<Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
						<TextInput
							style={globalStyles.input}
							placeholder="Rating (1-5)"
							onChangeText={props.handleChange("rating")}
							value={props.values.rating}
							keyboardType="numeric"
							onBlur={props.handleBlur("rating")}
						/>
						<Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
						<Button title="Submit" color="limegreen" onPress={props.handleSubmit} />
					</View>
				)}
			</Formik>
		</View>
	)
}

export default ReviewForm

const styles = StyleSheet.create({})
