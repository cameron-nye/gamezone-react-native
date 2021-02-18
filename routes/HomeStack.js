import { createStackNavigator } from "react-navigation-stack"
import Home from "../screens/Home"
import ReviewDetails from "../screens/ReviewDetails"
import About from "../screens/About"
import { createAppContainer } from "react-navigation"

const screens = {
	Home: {
		screen: Home,
		navigationOptions: {
			title: "GameZone",
		}
	},
	ReviewDetails: {
		screen: ReviewDetails,
		navigationOptions: {
			title: "Review Details"
		}
	},
	About: {
		screen: About
	}
}

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
    headerTintColor: '#212121',
		headerStyle: {
			backgroundColor: "aliceblue"
		}
	}
})

export default createAppContainer(HomeStack)
