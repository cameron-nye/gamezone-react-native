import React from "react"
import { Image } from "react-native"
import { createStackNavigator } from "react-navigation-stack"
import CameraScreen from "../screens/CameraScreen"
import Header from "../shared/Header"

const screens = {
	About: {
		screen: CameraScreen,
		navigationOptions: ({ navigation }) => {
			return {
				headerTitle: () => <Header navigation={navigation} title="GameZone Camera" />
			}
		}
	}
}

const CameraStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: "#212121",
		headerStyle: {
			backgroundColor: "aliceblue"
		},
		headerBackground: () => <Image source={require("../assets/dark-game-bg.jpg")} style={{ height: "100%" }} />
	}
})

export default CameraStack
