import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigations from './src/navigation/Navigations';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import RealtimeDB from './src/navigation/RealtimeDB';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
    <View style={styles.container} >
      <StatusBar style="auto" />
      <Navigations/>
      {/* <RealtimeDB/> */}
    </View>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
