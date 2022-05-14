import { View, Text } from 'react-native'
import React from 'react'

const Titulo = () => {
  return (
    <View>
      <Text>Titulo</Text>
    </View>
  )
}

export default Titulo

import React, { Component } from 'react'

export default class Titulo extends Component {
  render() {
    return (
      <div>Titulo</div>
    )
  }
}
