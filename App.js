import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigations from './src/navigation/Navigations';

export default function App() {
  return (
    <View style={styles.container} >
      <StatusBar style="auto" />
      <Navigations/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
