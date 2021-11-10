import React,{Component} from "react";
import{


    StyleSheet,Text,View,TextInput,TouchableHighlight,Image,ImageBackground,

}from 'react-native'


export default class Register extends Component{
    constructor(){
        super();
        this.state = {
            Name:"",
            email: "",
            Mobile_number:"",
            passwoard: ""
        }
    }
    render(){
        return(
            <View style ={styles.container}>
              <ImageBackground source={require('../assets/whitebg.jpg')} style={styles.backgroundImage}>
                
              <Image source={require('../assets/profile.png')} style={styles.image}></Image>
              <TextInput style={styles.name} placeholder='Name' placeholderTextColor='black' ></TextInput>  
              <TextInput style={styles.email} placeholder='Email' placeholderTextColor='black' maxLength={30}></TextInput>
             
             <View style={styles.row}>            
              <TextInput style={styles.ccode} placeholder='c-code' placeholderTextColor='black' maxLength={3}  keyboardType="numeric"></TextInput>
              <TextInput style={styles.number} placeholder='Mobile number' placeholderTextColor='black' keyboardType="numeric" ></TextInput>
             </View>
           
              <TouchableHighlight style={styles.register}>
                <Text style={styles.registertext}>Register</Text>
              </TouchableHighlight>
              </ImageBackground>

                


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
backgroundImage:{
  height:'100%',
  width:'100%',
  alignItems: 'center',
  justifyContent: 'center'
   
  },
  image:{
    width:150,
    height:150,
   marginTop:'20%'
   
   
  },
  name:{
    width:"80%",
    height:55,
    borderWidth:2,
    borderColor:'black',
    marginTop:30,
    borderRadius:10

  },
  email:{
    width:"80%",
    height:55,
    borderWidth:2,
    borderColor:'black',
    marginTop:10,
    borderRadius:10

  },
  ccode:{
      borderColor:'black',
      borderRadius: 10,
      width:"20%",
      height: 55,
      borderWidth:2,
      paddingLeft: 9,
      marginTop: 10,
     justifyContent:'space-between',
     flex:0.4
      
    
  },
  number:{
    width:"60%",
    height:55,
    borderWidth:2,
    borderColor:'black',
    marginTop:10,
    borderRadius:10,
    
  },
  row:{
   flex:1,
   flexDirection:'row'
  },

  register:{
    width:'40%',
    height:50,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'green',
    borderRadius:10,
    marginBottom:'50%'
    
  },
  registertext:{
    fontSize:15,
    fontWeight:'bold',
    color:'white',
    
  }

})