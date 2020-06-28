import React,{Component} from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';



export default class PerfilScreen extends Component {
  static navigationOptions = {
    title: 'Perfil',
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: 'steelblue',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
      render(){
      return (
               <View style={{backgroundColor:"#fff"}}>
                      <Image style={{position:"relative",width:400,height:400,marginTop:-220
                        }} source={require('../../img/header.png')} />
        <View style={styles.feedItem}>
                <Image source={require('../../img/avatar.jpg')}  style={styles.avatar}/>
                <View style={{flex:1}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <View>
                <Text style={styles.name}>Melissa Gomez</Text>
                
               
                </View>
                  
              
                </View>
              
                </View>
                
            </View>
            <View style={{backgroundColor:"#fff",margin:10}}>
            <Text style={styles.tamp}>Ciudad de San Marcos 
                </Text>
                <Text style={styles.tamp}>Esta Cuenta inicio el 20 de Marzo
                </Text>
                <Text style={styles.tamp}>Edad 23
                </Text>
            </View>
            <View style={{backgroundColor:"#fff",margin:10}}>
            <Text style={styles.tamp}>Deportes Favoritos 
                </Text>
                <Text style={styles.tamp}>Soccer
                </Text>
                <Text style={styles.tamp}>Tennis
                </Text>
                <Text style={styles.tamp}>Baesball
                </Text>
            </View>
       
               </View>
        );
      }
      
}
const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor:'#fff',
  
  },
  feed:{
  marginHorizontal:10,

  }
  ,
  feedItem:{
    //backgroundColor:"#fff",
    borderRadius:5,
   padding:8,
    flexDirection:"row",
    marginTop:-90,
  
  },
  avatar:{
    width:150,height:150,
    borderRadius:100,
    marginRight:16,
    marginTop:-20
  },
  name:{
    fontSize:25,
    marginTop:50,
    fontWeight:"600",
    color:"steelblue"
  },
timestamp:{ 
  fontSize:15,
  color:"#fff",
  marginTop:5
},
tamp:{ 
  fontSize:18,
  color:"blackgray",
  marginTop:5,
  fontWeight:'400'
},
})
