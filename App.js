import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createStore, applyMiddleware } from "redux"; 
import { Provider } from "react-redux"
import thunk from "redux-thunk";
import rootReducer from './stores/rootReducer';


import Tabs from "./navigation/tabs";

async function componentDidMount() {
    await Font.loadAsync({
       Roboto: require('native-base/Fonts/Roboto.ttf'),
       Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
       ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

const Stack = createStackNavigator();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const App = () => {
    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'MainLayout'}
            >
                <Stack.Screen
                    name="MainLayout"
                    component={Tabs}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}

export default App;