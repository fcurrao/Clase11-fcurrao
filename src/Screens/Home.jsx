import { FlatList, StyleSheet, Text, Platform, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import categories from '../Data/categories.json'
import CategoryItem from '../Components/CategoryItem'
import Counter from '../Components/Counter'

const Home = ({
    // setCategorySelected
    navigation, route
}) => {
  
  const {width, height} = useWindowDimensions()
  console.log(  "tu dimencion es :  altura: ", height, "Ancho: " , width)
  console.log ( "tu plataforma es:",  Platform.OS )
  return (
    <View style={styles.container}>
        <Counter/>
        <FlatList
            data = {categories}
            keyExtractor={category => category}
            renderItem={({item}) => <CategoryItem item={item}  navigation={navigation} />}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightPink,
        alignItems: 'center',
        flex:1,
    }
})