import { StyleSheet, Text, View , Button ,FlatList, Pressable} from 'react-native'
import React from 'react'
//Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

import ProductItem from '../components/ProductItem'
import Seperator from '../components/Seperator'

// Data
import { PRODUCTS_LIST } from '../Data/constants'


type HomeProp = NativeStackScreenProps<RootStackParamList,'Home'>;

const Home = ({navigation}:HomeProp) => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={PRODUCTS_LIST}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Seperator}
      renderItem={({item}) => (
        <Pressable 
        onPress={() => {  
          navigation.navigate('Details',{
            product:item
          })
        }}>
          <ProductItem product={item}/>
        </Pressable>
      )}
      />
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor:'red'
    },
    smallText: {
        color: "#000000"
    }
})