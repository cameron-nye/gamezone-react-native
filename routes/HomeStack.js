import { createStackNavigator } from "react-navigation-stack";
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import About from '../screens/About'
import { createAppContainer } from "react-navigation";

const screens = {
  Home: {
    screen: Home
  },
  ReviewDetails: {
    screen: ReviewDetails
  },
  About: {
    screen: About
  }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)