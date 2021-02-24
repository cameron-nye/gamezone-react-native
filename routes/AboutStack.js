import React from "react"
import { Image } from "react-native"
import { createStackNavigator } from "react-navigation-stack"
import About from "../screens/About"
import Header from "../shared/Header"

const screens = {
	About: {
		screen: About,
		navigationOptions: ({ navigation }) => {
			return {
				headerTitle: () => <Header navigation={navigation} title="About GameZone" />
			}
		}
	}
}

const AboutStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: "#212121",
		headerStyle: {
			backgroundColor: "aliceblue"
		},
		headerBackground: () => <Image source={require("../assets/dark-game-bg.jpg")} style={{ height: "100%" }} />
	}
})

export default AboutStack
