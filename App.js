import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

function App(){
    const [items, setItems] = useState([
        {
            id: '1',
            text: "HP Charge"
        },
        {
            id: '2',
            text: "USB Mouse"
        },
        {
            id: '3',
            text: "16GB DDR4 RAM"
        },
        {
            id: '4',
            text: "11.6-inch Screen"
        },
    ])

    const deleteItem = (id)=>{
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id)
        });
    }

    const addItem = (text)=>{
        if(!text){
            Alert.alert("Error", "Type in some text...")
        }else{
            setItems(prevItems => {
                return [{id: `${items.length + 1}`, text}, ...prevItems]
            })
        }
    }

    return(
        <View style={styles.container}>
            <Header title="Tronix List" />
            <AddItem addItem={addItem} />

            <FlatList data={items} renderItem={({item})=> <ListItem item={item} deleteItem={deleteItem} />}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
})

export default App;