import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Add from '../screens/Add';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

//  create function for stackNavigator() 
 function Navigator(){
    return(
        <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name="Home" component={Home} options={{
                title: 'New Feed',
            }} />
            <Stack.Screen name="Add" component={Add} options ={{ 
                presentation: 'modal',
                title : 'Create Status'
        }}/>
        </Stack.Navigator>
    )
 }

 export default function Navigations() {
    return (
        <NavigationContainer>
            <Navigator/>
        </NavigationContainer>
    );
 }
