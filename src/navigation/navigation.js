import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatContain from '../Screens/ChatScreen';
import ChatScreen from '../Screens/ChatsScreen'
import {Entypo} from '@expo/vector-icons'
const Stack = createNativeStackNavigator()

const NavigationScreens = ()=> {
    return(

        <Stack.Navigator initialRouteName='chats' screenOptions={{headerStyle:{backgroundColor:'whitesmoke'}}}>
            <Stack.Screen name="chats" component={ChatScreen} options={{headerTitle:'Chats',headerTitleAlign:'center',
            headerRight:()=> (
                    <Entypo
                    name='new-message' size={21}
                    style={{marginRight:0, color:'royalblue'}}
                    
                     />

            )
            
            }} />
            <Stack.Screen name='content' component={ChatContain} options={{headerTitleAlign:'center'}}  />
        </Stack.Navigator>
    )
}
export default NavigationScreens;