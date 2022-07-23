import { useState } from 'react'
import { Text,SafeAreaView,View,FlatList } from 'react-native'
import { COLORS, NFTData } from '../constants'
import {HomeHeader,NFTCards,FocuseStatusBar} from '../components'

function Home() {


    return (
        <SafeAreaView style={{flex:1}}>
            <FocuseStatusBar background={COLORS.primary } />
            {/* <NFTCards />
            <HomeHeader/> */}
      </SafeAreaView>
   
  )
}

export default Home