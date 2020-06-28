import React,{Component} from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity,Image,StatusBar } from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends Component {
    state={
        email:"",
        Password:"",
        errorMessage:null
    }
    static navigationOptions={
      header:null
    }
     handleLogin=()=>{
       const{email,Password}=this.state;

       firebase.auth()
       .signInWithEmailAndPassword(email,Password)
         .then(this.props.navigation.navigate('Main'))
          .catch(error=>this.setState({errorMessage:error.message}));
       
    }
      render(){
      return (
               <View style={styles.container}>
                 <StatusBar borStyle="ligth-content"></StatusBar>
                          <Image style={{position:"relative",width:400,height:400,marginTop:-200
                        }} source={require('../../img/header.png')} />
                   
               
                 <Text style={styles.greeting}>
                     {`Hello again. \n Welcome Back`}
                  </Text>
                  <View style={styles.errorMessage}>
                        {this.state.errorMessage &&<Text style={styles.error}>{this.state.errorMessage}</Text>}
                 </View>

                    <View style={styles.form}>

                    <View>
                        <Text style={styles.inputTitle}>E-mail Address</Text>
                        <TextInput style={styles.Input}
                          value={this.state.email} autoCapitalize="none"
                          onChangeText={email=>this.setState({email})} ></TextInput>
                    </View>

                    <View style={{marginTop:32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.Input}
                         value={this.state.Password}
                        secureTextEntry autoCapitalize="none"
                        onChangeText={Password=>this.setState({Password})}
                        ></TextInput>
                    </View>
                    </View>
              
                  <TouchableOpacity style={styles.button} onPress={this.handleLogin} >
                         <Text style={{color:"#fff",fontWeight:"500"}}>Login</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={{alignSelf:"center", marginTop:32}}
                    onPress={()=>this.props.navigation.navigate('SingUp')}
                  >
                      <Text style={{color:"black",fontSize:14}}>
                             New to Social?<Text style={{fontWeight:"600",color:"dodgerblue"}}>Sing Up</Text>
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
    marginTop:-50,
      fontSize:17,
      fontWeight:"600",
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
    marginTop:-10,
      marginBottom:48,
      marginHorizontal:39
  }
  ,
  inputTitle:{
      color:"steelblue",
      fontSize:11,
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
  },
  Image:{
    height:80,
    width:70
  }
});