import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { database } from '../../firebase/config';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';

export default function Product({
    id,
    emoji,
    name,
    feeling,
    isReacted,
}) {

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

    return(
        <View>
            <View style={styles.productContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginLeft: 10,
                        marginBottom: 10,
                        
                        }}>
                        <Text style={styles.emoji}>{emoji}</ Text>
                        <Text style={{
                            fontSize: 14,
                            marginHorizontal : 5,
                            fontWeight: 'bold',
                            letterSpacing : 1.1,
                        }}> đang </Text>
                        <Text style={styles.name}>{name}</ Text>
                    </View>
                    <AntDesign onPress={onDelete} name="delete" size={24} color="black" />
                </View>
               
                <Text style={styles.price}>{feeling}</ Text>
                {isReacted ? (
                    <TouchableOpacity 
                    style={[styles.button, {backgroundColor: '#FEECE9'}]}>
                    <Text style={styles.buttonText}>Reacted</ Text>
                </TouchableOpacity>
                )
                : (
                    <TouchableOpacity 
                    onPress={onEdit}
                    style={styles.button}>
                    <Text style={styles.buttonText}>React</ Text>
                </ TouchableOpacity>
                )}    
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    productContainer: {
        padding: 18,
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        elevation: 5,
    },
    emoji: {
        fontSize: 80,
    },
    name: {
        fontSize: 18,
        fontWeight: '500',
        color: '#8D8DAA',
    },
    price: {
        fontSize: 20,
        fontWeight: '600',
        color: '#8D8DAA',
        marginHorizontal:10
    },
    button: {
        backgroundColor: '#0FA5E9',
        padding: 10,
        marginVertical: 6,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
   },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        letterSpacing : 1.5,
    },
});