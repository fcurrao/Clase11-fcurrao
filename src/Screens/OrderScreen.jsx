import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderData from '../Data/orders.json'
import OrderStack from '../Navigation/OrderStack'
import OrderItem from '../Components/OrdenItem'

const OrderScreen = () => {
  return (
     <FlatList
        data={OrderData}
        keyExtractor={orderItem =>orderItem.id }
        renderItem={({item}) => {
            return(
                <OrderItem order={item}/>

            )
        }}

        
        />

 
  )
}

export default OrderScreen

const styles = StyleSheet.create({})