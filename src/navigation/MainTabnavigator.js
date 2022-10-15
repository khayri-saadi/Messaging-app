import {Text,View} from 'react-native'
//import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NavigationScreens from './navigation';
import CameraScreen from '../Screens/CameraScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import AppelScreen from '../Screens/AppelScreen';
import StatusScreen from '../Screens/StatusScreen';
import {MaterialIcons,Feather,FontAwesome,Ionicons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

//const Tab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator()

const TopTabNavigator = ()=> {
    return(
      <Tab.Navigator initialRouteName='chats'>
            <Tab.Screen name="status" component={StatusScreen}
            options={{
                tabBarIcon:({color,size})=> (
                    <Ionicons  name='logo-whatsapp' size={25} />
                    
                )
            }}
             />
            <Tab.Screen name="Calls" component={AppelScreen}   options={{
                tabBarIcon:({color,size})=> (
                    <Ionicons  name='call-outline' size={25} />
                    
                )
            }} />
            <Tab.Screen name="Camera" component={CameraScreen}
              options={{
                tabBarIcon:({color,size})=> (
                    <Ionicons  name='camera-outline' size={25} />
                    
                )
            }} />
            <Tab.Screen name="chats" component={NavigationScreens} 
              options={{
                tabBarIcon:({color,size})=> (
                    <Ionicons  name='ios-chatbubbles-sharp' size={25} />
                    
                ),
                headerShown:false,
            }} />
            <Tab.Screen name="settings" component={SettingsScreen}
              options={{
                tabBarIcon:({color,size})=> (
                    <Ionicons  name='settings-outline' size={25} />
                    
                )
            }} />

    </Tab.Navigator>


    )
}

export default TopTabNavigator