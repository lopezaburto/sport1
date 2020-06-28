import React,{Component} from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity,ScrollView,StatusBar,Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Icon} from 'native-base'
import * as firebase from 'firebase';


export default class SingUpScreen extends Component {
    state={
        name:"",
        email:"",
        Password:"",
        errorMessage:null
    }
    static navigationOptions={
        header:null
      }
    handleSingup=()=>{
      firebase
      .auth()
       .createUserWithEmailAndPassword(this.state.email,this.state.Password)
       .then(this.props.navigation.navigate('Main'))
          .catch(error=>this.setState({errorMessage:error.message}))
        
    }
   
      render(){
      return (
            
               <View style={styles.container}>
               <StatusBar borStyle="ligth-content"></StatusBar>
               <Image style={{position:"relative",width:400,height:400,marginTop:-220
                        }} source={require('../../img/header.png')} />  
                          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()} >
                    <Ionicons
                    style={{marginTop:-135,paddingLeft: 20}}
                    name="md-arrow-back"
                    size={30}
                    >

                    </Ionicons>
                  </TouchableOpacity>
                  <Text style={styles.greeting}>
                     {`Hello. \n Sign Up to get started.`}
                  </Text>

            <View style={styles.errorMessage}>
                        {this.state.errorMessage &&<Text style={styles.error}>{this.state.errorMessage}</Text>}
                 </View>

                    <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Full Name</Text>
                        <TextInput style={styles.Input}
                          onChangeText={name=>this.setState({name})} 
                          value={this.state.name} autoCapitalize="none"></TextInput>
                    </View>

                    <View style={{marginTop:32}}>
                        <Text style={styles.inputTitle}>E-mail Address</Text>
                        <TextInput style={styles.Input}
                          onChangeText={email=>this.setState({email})} 
                          value={this.state.email} autoCapitalize="none"></TextInput>
                    </View>

                    <View style={{marginTop:32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.Input}
                         onChangeText={Password=>this.setState({Password})}
                         value={this.state.Password}
                        secureTextEntry autoCapitalize="none"></TextInput>
                    </View>
                    </View>
              
                  <TouchableOpacity style={styles.button} onPress={this.handleSingup} >
                         <Text style={{color:"#fff",fontWeight:"500"}}>Sing Up</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={{alignSelf:"center", marginTop:12}}
                  onPress={()=>this.props.navigation.goBack()}
                  >
                      <Text style={{color:"black",fontSize:1}}>
                             New to Social?<Text style={{fontWeight:"600",color:"dodgerblue"}}>Login</Text>
                      </Text>
                  </TouchableOpacity>
               </View>

              
        );
      }
      
}




const styles = StyleSheet.create({
    container: {
        flex:1
     
      }
      ,
      greeting:{
        marginTop:-80,
          marginBottom:-15,
          fontSize:16,
          fontWeight:"500",
          textAlign:"center"
      }
      ,
      errorMessage:{
          height:72,
          justifyContent:"center",
          alignContent:"center",
          marginHorizontal:33
      }
      ,
      error:{
       color:"#E9446A",
       fontSize:13,
       fontWeight:"600",
       textAlign:"center"
      }
      ,
      form:{
          marginTop:-30,
          marginBottom:48,
          marginHorizontal:39
      }
      ,
      inputTitle:{
          color:"steelblue",
          fontSize:10,
          textTransform:"uppercase"
      },
      Input:{
          borderBottomColor:"#8A8F9E",
          borderBottomWidth:StyleSheet.hairlineWidth,
          height:40,
          fontSize:16,
          color:"gray"
      },
      button:{
          marginHorizontal:30,
         // backgroundColor:"#E9446A",
         backgroundColor:"deepskyblue",
          borderRadius:4,
          height:52,
          alignItems:"center",
          justifyContent:"center"
      }
});
