
import React,{Component} from "react";
import{


    StyleSheet,Text,View,TextInput,TouchableHighlight,Image

}from 'react-native'


export default class login extends Component{
    constructor(){
        super();
        this.state = {
            email: "",
            passwoard: ""
        }
    }
    render(){
        return(
            <View style ={styles.container}>
                
                <Image source={require('../assets/3236267.jpg')} style={styles.image}></Image>
              <TextInput style={styles.email} placeholder='Email' placeholderTextColor='black' maxLength={30}></TextInput>
              <TextInput style={styles.passd} placeholder='Password' placeholderTextColor='black' maxLength={30} secureTextEntry={true}></TextInput>
              <TouchableHighlight style={styles.login}>
                <Text style={styles.logintext}>Login</Text>
              </TouchableHighlight>
            </View>

        )
    }
}

const styles = StyleSheet.create({
container:{
    flex : 1,
    backgroundColor : 'white',
    alignItems :'center',
    justifyContent : 'center',
   
  },
  image:{
    width:400,
    height:400,
   
  },
  email:{
    width:"80%",
    height:55,
    borderWidth:2,
    borderColor:'black',
    marginTop:10,
    borderRadius:10

  },
  passd:{
    width:"80%",
    height:55,
    borderWidth:2,
    borderColor:'black',
    marginTop:10,
    borderRadius:10
  },
  login:{
    width:'40%',
    height:50,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'green',
    borderRadius:10,
    marginTop:20
  },
  logintext:{
    fontSize:15,
    fontWeight:'bold',
    color:'white'
  }

})
