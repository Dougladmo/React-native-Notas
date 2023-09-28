import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

export default function Title() { 
  return (
    <View>
        <Text style={styles.title} >Calculo de média</Text>
    </View>
  )
    }

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
    }
})
