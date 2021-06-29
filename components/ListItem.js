import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const ListItem = ({item, deleteItem}) =>{
    return(
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>
                    {item.text}
                </Text>

                <View style={styles.delItem}>
                <Ionicons name="trash" size={19} onPress={()=>deleteItem(item.id)} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },

    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    listItemText: {
        fontSize: 15
    },

    delItem: {
        backgroundColor: 'red',
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    }
})

export default ListItem;