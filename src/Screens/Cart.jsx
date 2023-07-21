import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartData from '../Data/cart.json'
import CartItem from '../Components/CartItem'
import { FlatList } from 'react-native-web'



const Cart = () => { 
    const total = CartData.reduce((acc, item) => 
    acc += item.price * item.quantity, 0)


  return (
    <View style={styles.container}>

    <FlatList
    data={CartData}
    keyExtractor={cartItem => cartItem.id}
    renderItem={ ({item})=>{
        return(
            <CartItem cartItem={item}/>
        )
    } }
    />    

    <View style={styles.totalContainer}>
    <Pressable>
        <Text  style={styles.total}>
          Confirm
        </Text>
    </Pressable>
        <Text style={styles.total}>
            Total : {total}
        </Text>

    </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    totalContainer:{
        flexDirection: 'row',
        marginBottom: 100,
        justifyContent:'center',
        alignItems: 'center',
    }, 
    container: {
      justifyContent: 'space-between',
      flex: 1,
    },
    total: {
        fontSize: 24,
    }
})