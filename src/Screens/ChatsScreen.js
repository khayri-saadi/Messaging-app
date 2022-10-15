import {View,Text,FlatList} from 'react-native'
import chats  from '../../assets/data/chats.json'
import ChatList from '../Components/ChatList/ChatList'

const ChatScreen = ({navigation})=> {
    return(
            <FlatList
            data={chats}
            renderItem={({item})=> <ChatList chat={item} />
            }
            //style={{backgroundColor:'red'}}
                /> 
    )
}

export default ChatScreen