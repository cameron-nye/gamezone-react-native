import { createStackNavigator } from "react-navigation-stack"
import About from "../screens/About"

const screens = {
	About: {
		screen: About,
		navigationOptions: {
			title: "GameZone",
		}
	}
}

const AboutStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
    headerTintColor: '#212121',
		headerStyle: {
			backgroundColor: "aliceblue"
		}
	}
})

export default AboutStack
