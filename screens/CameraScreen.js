import React, { useState, useEffect, useRef } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"
import { Camera } from "expo-camera"
import { globalStyles } from "../styles/Global"
import { TouchableOpacity } from "react-native-gesture-handler"

const CameraScreen = () => {
	const [ openCamera, setOpenCamera ] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [capturedImg, setCapturedImg] = useState(null)
  const cameraRef = useRef(null)

	const startCamera = async () => {
		const { status } = await Camera.requestPermissionsAsync()
		if (status === "granted") {
			setOpenCamera(true)
		} else {
			Alert.alert("Camera Access Denied")
		}
	}

	const takePicture = async () => {
		if (!cameraRef) return
		const photo = await Camera.takePictureAsync()
    console.log(photo)
    setShowPreview(true)
    setCapturedImg(photo)
	}



	return (
		<View style={{ ...globalStyles.container, justifyContent: "center" }}>
			{openCamera ? (
				<Camera style={styles.camera} ref={cameraRef}>
					<View
						style={{
							position: "absolute",
							bottom: 0,
							flexDirection: "row",
							flex: 1,
							width: "100%",
							padding: 20,
							justifyContent: "space-between"
						}}
					>
						<View
							style={{
								alignSelf: "center",
								flex: 1,
								alignItems: "center"
							}}
						>
							<TouchableOpacity
								onPress={takePicture}
								style={{
									width: 70,
									height: 70,
									bottom: 0,
									borderRadius: 50,
									backgroundColor: "#fff"
								}}
							/>
						</View>
					</View>
				</Camera>
			) : 
      showPreview && capturedImg ?
      <CameraPreview photo={capturedImg}/>
      :
      (
				<Text>Please enable camera</Text>
			)}
			<TouchableOpacity style={styles.cameraBtn} onPress={startCamera}>
				<Text style={styles.btnText}>Open Camera</Text>
			</TouchableOpacity>
		</View>
	)
}

export default CameraScreen

const styles = StyleSheet.create({
	camera: {
		flex: 1,
		width: "100%",
		marginBottom: 24
	},
	cameraBtn: {
		borderWidth: 2,
		borderRadius: 10,
		borderColor: "gray",
		paddingHorizontal: 24,
		paddingVertical: 16,
		width: 200,
		alignSelf: "center"
	},
	btnText: {
		textAlign: "center",
		color: "gray"
	}
})
