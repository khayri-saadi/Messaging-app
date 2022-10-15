import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native'
import dayjs from 'dayjs'
import {useNavigation} from '@react-navigation/native'
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

const ChatList = ({chat})=> {
    const navigation = useNavigation()
  
    return(
    <TouchableOpacity onPress={()=> {
        navigation.navigate('content',{name:chat.user.name})
    }} style={styles.container}>
        <Image source={{uri: chat.user.image}}
            style={styles.image}
        />
        <View style={styles.content}>
         <View style={styles.row}>
            <Text style={styles.name} numberOfLines={1}>{chat.user.name}</Text>
            <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
        </View>
    </TouchableOpacity>)
}
const styles = StyleSheet.create({
    image:{
        width:60,
        height:60,
        borderRadius:30,
        marginRight:10    },
    container:{
        flexDirection:'row',
        marginVertical:10,
        marginVertical:5,
        height:70,
        margin:5
    },
    content:{
        flex:1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor:'grey'

    },
    row:{
        flexDirection:'row',
        marginBottom:5

    },
    name:{
        flex:1,
        fontWeight:'bold'

    },
    subTitle:{
        color:'#666'

    }

})
export default ChatList;