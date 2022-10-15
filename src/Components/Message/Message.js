import {Text,View, StyleSheet} from 'react-native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend (relativeTime)

const Message = ({message})=> {


    const Mymessage = ()=> {
        return message.user.id === 'u1'
    }
    return(
        <View style={[styles.container,{alignSelf : Mymessage() ? 'flex-end' : 'flex-start', backgroundColor: Mymessage() ? '#dcf8c5' : 'white'}]}>
            <Text>{message.text}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    time:{
        color:'grey',
        alignSelf:'flex-end'
    },
    container:{
        backgroundColor:'#fff',
        margin:5,
        padding:10,
        borderRadius:15,
        maxwidth:'80%',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:1
        },
        shadowOpacity:0.18,
        shadowRadius:1.0,
        
    }
})

export default Message