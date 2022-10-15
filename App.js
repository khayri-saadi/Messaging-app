import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatList from './src/Components/ChatList/ChatList';
import ChatScreen from './src/Screens/ChatsScreen';
import ChatContain from './src/Screens/ChatScreen';
import {NavigationContainer} from '@react-navigation/native'
import NavigationScreens from './src/navigation/navigation';
import TopTabNavigator from './src/navigation/MainTabnavigator';
export default function App() {
  return (
    <NavigationContainer>
  
      <TopTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
