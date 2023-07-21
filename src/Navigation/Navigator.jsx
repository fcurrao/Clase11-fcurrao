
// import { StatusBar } from 'expo-status-bar';
import Header from '../Components/Header';
import Home from '../Screens/Home';
import ItemListCategory from '../Screens/ItemListCategory';
// import { useState } from 'react';
import ItemDetail from '../Screens/ItemDetail';
import ShopStack from './ShopStack';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import CartStack from './CartStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import OrderScreen from '../Screens/OrderScreen';
import OrderStack from './OrderStack';

const Tab = createBottomTabNavigator()

const Navigator = () => {

    // const [productSelected, setProductSelected] = useState("")
    // const [categorySelected, setCategorySelected] = useState("")

    return (
        <SafeAreaView style={styles.container}>
             <Text>BONSAIS ORLANDO</Text> 
            <NavigationContainer>
                <Tab.Navigator 
                screenOptions={{ 
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle:  styles.tabBar
                    }} 
                   
                >
                    <Tab.Screen
                    name='Shop'
                    component={ShopStack}
                    options={{tabBarIcon: ({focused}) => {
                        return (
                            <View>
                             <Entypo name="shop" size={30} color={focused ? "black" : "gray"} />
                            </View>
                        )
                    }}}
                    />  
                    <Tab.Screen
                    name='Cart'
                    component={CartStack}
                    options={{tabBarIcon: ({focused}) => {
                        return (
                            <View>
                            <AntDesign name="shoppingcart" size={30} color={focused ? "black" : "gray"} />
                             </View>
                        )
                    }}}
                    />   
                    <Tab.Screen
                    name='Orders'
                    component={OrderStack}
                    options={{tabBarIcon: ({focused}) => {
                        return (
                            <View>
                          <FontAwesome name="list-ol" size={24} color={focused ? "black" : "gray"} />
                             </View>
                        )
                    }}}
                    />   
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHight : 0
    },
    tabBar: {
        backgroundColor: 'pink',
        shadowColor: 'black',
        elevation: 3,
        position: 'absolute',
        bottom: 20,
        left: 10,
        right: 10,
        borderRadius: 15,
        height: 60,
    }

})