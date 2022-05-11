import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import EmojiPicker from 'rn-emoji-keyboard'
import { Ionicons } from '@expo/vector-icons';
import { collection, addDoc } from 'firebase/firestore';
import {database} from '../../firebase/config'

const Add = () => {
    const navigation = useNavigation()
    // state for items
    const [items, setItems] = useState({
        emoji: '🐧',
        name: '',
        feeling: '',
        isReacted: false,
        createAt : new Date(),
    })

    // state for keyboard
    const [keyboard, setKeyboard] = useState(false)
    // handle Emoji select
    const handleEmojiSelect = (emojiObj) => {
        setItems({
            ...items,
            emoji: emojiObj.emoji
        })
    }
    
    // handle create status
    const CreateStatus = async () => {
        const docRef = await addDoc(collection(database, 'status'), items);
        navigation.goBack()
    }



  return (
    <SafeAreaView style = {styles.container}>
      <Text 
        style = {{
          marginTop : 25, 
          letterSpacing :1.5,
          fontSize : 20,
          color : '#787A91',
          fontWeight: '600',
          }}>
            Hi! What are your feeling?</Text>
      <Text 
        onPress = {() => setKeyboard(true)}
        style={{ marginVertical: 15, letterSpacing: 1.5, fontSize: 100 }}>
        {items.emoji}
        </Text>
      <EmojiPicker
        onEmojiSelected={handleEmojiSelect}
        open={keyboard}
        onClose={() => setKeyboard(false)}
        />
      <TextInput
        style = {styles.input}
        placeholder = "Emoji Name"
        onChangeText = {(text) => setItems({...items, name: text})}
        value = {items.name}
        placeholderTextColor = "#ccc"
        autoCompleteType = "off"
        autoCorrect = {false}
        autoCapitalize = "none"
        autoFocus = {true}
      />
      {/* Prices Input */}
      <TextInput
        style = {styles.input}
        placeholder = "Feeling"
        onChangeText = {(text) => setItems({...items, feeling: text})}
        value = {items.feeling}
        placeholderTextColor = "#ccc"
        autoCompleteType = "off"
        autoCorrect = {false}
        autoCapitalize = "none"
      />
      {/* Button */}
      <TouchableOpacity 
        style ={styles.button}
        onPress = {CreateStatus}
        >
       <Ionicons name="create" size={24} color="#787A91" />
       <Text style = {styles.buttonText}>Create</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Add

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    color: '#787A91',
    width: '75%',
  },
  button: {
    width: '60%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#787A91',
    borderRadius: 20,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#787A91',
    fontWeight: '600',
    letterSpacing: 1.5,
    marginLeft: 10,

  }
})