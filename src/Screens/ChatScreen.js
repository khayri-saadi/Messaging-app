import {Text,View,ImageBackground , StyleSheet,FlatList} from 'react-native'
import image from '../../assets/images/BG.png'
import messages from '../../assets/data/messages.json'
import Message from '../Components/Message/Message'
import InputMessage from '../Components/Inputmessage/InputMessage'
import {useNavigation , useRoute} from '@react-navigation/native'
const ChatContain = ()=> {
    const route = useRoute()
    const navigation = useNavigation()
        navigation.setOptions({title:route.params.name})
    return(
        <ImageBackground source={image} style={styles.bg}>
                <FlatList 
            data={messages}
            renderItem={({item})=> <Message message={item}/>}
            style={styles.list}
            inverted
        />
        <InputMessage/>
        </ImageBackground>  
       
    )
}
const styles = StyleSheet.create({
    bg:{
        flex:1
    },
    list:{padding:10}
})
export default ChatContain