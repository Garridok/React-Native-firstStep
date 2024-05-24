import React from 'react'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar.jsx'
import { Redirect, Route, Routes } from 'react-router-native'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<Text> Working on it! </Text>} />
      </Routes>

    </View>
  )
}

export default Main