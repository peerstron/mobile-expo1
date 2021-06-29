import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({title}) =>{
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        padding: 15,
        backgroundColor: 'red',
        justifyContent: 'center'
    },

    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Header;