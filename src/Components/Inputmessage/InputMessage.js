import { useState } from 'react'
import {Text,View,StyleSheet, TextInput} from 'react-native'

import {AntDesign,MaterialIcons} from '@expo/vector-icons'

const InputMessage = ()=> {

    const [NewMessage,setNewMessage] = useState('')

   const onSend = ()=> {
    console.warn('newmessage:',NewMessage)
    setNewMessage('')

   }
    return(
        <View style={styles.container}>
            <AntDesign name='plus' size={25} color='royalblue' style={styles.plus} />
            <TextInput value={NewMessage}  onChangeText={setNewMessage} style={styles.input} placeholder='enter your message' />
            <MaterialIcons style={styles.button} name='send' size={25} color='white' onPress={onSend}  />
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'whitesmoke',
        padding:5,
        paddingHorizontal:10,
        alignItems:'center'

    },
    input:{
    flex:1,
    backgroundColor:'white',
    padding:5,
    paddingHorizontal:10,
    borderRadius:50,
    borderColor:'lightgrey',
    borderWidth: StyleSheet.hairlineWidth,
    fontSize:14

    },
    button:{
        backgroundColor:'royalblue',
        padding:6,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        overflow:'hidden',
        marginLeft:3


    },
    plus:{
        padding:7,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:-10
        
    }
})
export default InputMessage