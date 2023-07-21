import { Pressable, Image, StyleSheet, Button, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../Data/products.json'

import { useSelector } from 'react-redux'

const ItemDetail = ( { navigation,route}) => {
  
  
  const {productId: idSelected} = route.params

  const  productSelected2 = useSelector(state=> state.shopReducer.value.productSelected )


  ////////////// ACA TENGO QUE TRAER EL PRODUCTSELECTED! DE REDUX (SHOPSLICE! )
  
  console.log ( "---------", productSelected2 )
  const [product, setProduct] = useState(null);
  const [orientation, setOrientation] = useState("portrait");
  const { width, height } = useWindowDimensions();

  useEffect(() => {
      if (width > height) setOrientation("landscape");
      else setOrientation("portrait");
  }, [width, height]);

  useEffect(() => {
      //Encontrar el producto por su id
      const productSelected = allProducts.find(
          (product) => product.id === idSelected
          );
      setProduct(productSelected);
  }, [idSelected]);

  return (
    <View>
      <Button onPress={() => navigation.goBack()} title=' GO BACK'
      /> 
      
     
      { product ? <>  <View
      style = {orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape}
      >
      <Image 
      source={{uri: product.images[0] }}
      style={styles.image}
      resizeMode='cover'
      />
      <View style={styles.textContainer}>
      <Text> {product.title}</Text>
      <Text> {product.description}</Text>
      <Text> $ {product.price}</Text>
      <Button  title="Agregar al carrito "> </Button>
      <Text>ItemDetail</Text> </View>
      </View>
      </>:<Text> NO HAY PRODUCTO</Text>}
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  mainContainer:
  {
    flexDirection: 'column',
    justifyContent: ' center',
    alignItems: 'flex-start',
    padding: 10.
  },
  mainContainerLandscape:
  {
    flexDirection: 'row',
    justifyContent: ' center',
    alignItems: 'flex-start',
    padding: 10.
  },
  textContainer: {
    flexDirection: 'column'
  },
  image: {
    minWidth: 200,
    width: '90%',
    height: 250,
  }
})