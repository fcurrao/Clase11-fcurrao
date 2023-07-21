import Header from '../Components/Header';
import Home from '../Screens/Home';
import ItemListCategory from '../Screens/ItemListCategory'; 
import ItemDetail from '../Screens/ItemDetail';
import Cart from '../Screens/Cart'
import { StyleSheet, Text, View } from 'react-native';
import React from 'react' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return <Header route={route} navigation={navigation} />;
                },
            })}
        >
            <Stack.Screen name="CartScreen" component={Cart} />

        </Stack.Navigator>
    );
};

export default CartStack;