import { View, Image,Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import React from 'react'

const NFTCards = ({ data }) => {
  
  const navigation =useNavigation()
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark,
    }}>
      <Text>
        NFT CARD
     </Text>
    </View>
  )
}

export default NFTCards