import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const AddItem = ({ addItem }) =>{
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);
    return(
        <View style={styles.header}>
            <TextInput placeholder="Add item..." style={styles.textInput} onChangeText={onChange} />
            <TouchableOpacity style={styles.btn} onPress={()=> addItem(text)}>
                <Text style={styles.btnText}>
                    <Ionicons name="add-circle-outline" size={15}/>Add Item</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        padding: 6,
        fontSize: 15,
    },

    btn: {
        backgroundColor: "#c2bad8",
        padding: 7,
        margin: 4
    },

    btnText: {
        color: "red",
        fontSize: 15,
        textAlign: "center"
    }
})

export default AddItem;