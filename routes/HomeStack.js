import { createStackNavigator } from "react-navigation-stack"
import Home from "../screens/Home"
import ReviewDetails from "../screens/ReviewDetails"
import About from "../screens/About"

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

export default HomeStack
