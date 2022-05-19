import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { database } from '../../firebase/config'
import { collection, onSnapshot, orderBy, query, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Product from '../components/Product';



const Home = () => {
  const navigation = useNavigation()
  const [status, setStatus] = useState([])
  // useLayoutEffect for add button
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Add')}
        >
          <MaterialIcons
            name="addchart"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      )
    })
  }, [navigation])

  // useEffect for get data from firebase
  useEffect(() => {
    const collectionRef = collection(database, 'status')
    const queryRef = query(collectionRef, orderBy('createAt', 'desc'))
    const unsubscribe = onSnapshot(queryRef, querySnapshot => {
      setStatus(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          emoji: doc.data().emoji,
          name: doc.data().name,
          feeling: doc.data().feeling,
          isReacted: doc.data().isReacted,
          createdAt: doc.data().createdAt,
        })
        )
      );
    });
    return unsubscribe;
  }, [])

  const onDelete = () => {
    const docRef = doc(database, 'status', id);
    deleteDoc(docRef);
  }

  const onEdit = () => {
    const docRef = doc(database, 'status', id);
    updateDoc(docRef, {
      isReacted: true,
    });
  }

  // render flatlist items 
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          width: '85%',
          height: 'auto',
          backgroundColor: '#fff',
          marginVertical: 15,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          paddingVertical: 10,
          borderColor: '#ddd',
          marginLeft: '7.5%',
          elevation: 5,
        }}>
        <View style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          {/* emoji, emoji name */}
          <View style={{
            flexDirection: 'row',
            marginBottom: 5,
            alignItems: 'center',
          }}>
            <Text style={{
              fontSize: 20,
            }}>{item.emoji}</Text>
            <Text style={{
              fontSize: 12,
              color: '#8D8DAA',
              marginHorizontal: 5,
            }}> đang </Text>
            <Text> {item.name}</Text>
          </View>
          {/* feeling  */}
          <Text style={{
            fontSize: 16,
            textAlign: 'left',
            color: '#8D8DAA',
          }}> {item.feeling}</Text>
          {/* button reacted */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onEdit}
            >
              {item.isReacted ? <AntDesign name="heart" size={24} color="black" /> : <AntDesign name="hearto" size={18} color="#8d8daa" />}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onDelete}
            >
              <AntDesign name="delete" size={18} color="#8d8daa" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      {/* FlatList to show productas */}
      <FlatList
        data={status}
        keyExtractor={(item) => item.id}
        Vertical={true}
        // renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (<Product {...item} />)}

      />
    </SafeAreaView>
  )
}

export default Home

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
