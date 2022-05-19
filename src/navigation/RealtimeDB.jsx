import { View, Text, SafeAreaView, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import {db} from '../../firebase/config'
import { ref, onValue } from "firebase/database";

const RealtimeDB = () => {
    // state for storing data
    const [status, setStatus] = useState([]) 
    // useEffect for get data from realtime database
    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            setStatus([]);
            const data = snapshot.val()
            if (data !== null) {
                Object.values(data).map(item => {
                    setStatus((oldArr) => [...oldArr, item])
                }
                )
            }
        }
        )
    }, [])

  return (
    <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        {/* Giving data from database */}
        {/* map data */}
        {status.map((item, index) => (
            <View key={index}>
                {/* if have data then show data or show null */}
                <Text>LUX : {item.lux? item.lux : ''  }</Text>
                <Text>SOID HUMIDITY : {item.humidity? item.humidity : ''  }</Text>
                <Text>TEMP : {item.t? item.t : ''}</Text>
                <Text>HUMIDITY : {item.h? item.h :''}</Text>
            </View>
        ))}
    </SafeAreaView>
  )
}
export default RealtimeDB