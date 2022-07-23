import { useState } from 'react'
import { Text,SafeAreaView,View,FlatList } from 'react-native'
import { COLORS, NFTData } from '../constants'
import {HomeHeader,NFTCards,FocusedStatusBar} from '../components'

function Home(props) {


    return (
        <SafeAreaView style={{flex:1}}>
            <FocusedStatusBar background={COLORS.primary } />
             <View style={{ flex: 1 }}>
              <View style={{ zIndex: 0 }}>
                 <FlatList
                    data={NFTData}
                    renderItem={({ item }) => <Text>{item.name}</Text> }
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HomeHeader  />}
                    />
              </View>
            </View>
      </SafeAreaView>
   
  )
}

export default Home