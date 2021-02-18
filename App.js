import React from "react"
import { StyleSheet } from "react-native"
import { useFonts} from "expo-font"
import AppLoading from "expo-app-loading"
import Home from "./screens/Home"

const App = () => {
	let [ fontsLoaded ] = useFonts({
    "montserrat-regular": require('./assets/fonts/MontserratAlternates-Regular.ttf'),
    'montserrat-bold': require('./assets/fonts/MontserratAlternates-Bold.ttf')
	})

	return !fontsLoaded ? <AppLoading /> : <Home />
}

export default App

const styles = StyleSheet.create({})
