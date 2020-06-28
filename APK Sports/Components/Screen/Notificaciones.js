import React,{Component} from 'react';
import { StyleSheet,View,Text,SafeAreaView,FlatList,Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements'

const lista=[
  {
    id:1,
    name:"Melissa Gomez",
  
    timestamp:"Hay un Evento Nuevo",
    avatar:require("../../img/avatar.jpg"),
   
  },
  {
    id:2,
    name:"Melissa Gomez",
   
    timestamp:"Hoy Inicia el Partido de Soccer",
    avatar:require("../../img/avatar.jpg"),
 
  },
  {
    id:3,
    name:"Melissa Gomez",
    
    timestamp:"Hay un Evento Nuevo",
    avatar:require("../../img/avatar.jpg"),
   
  }
  ,
  {
    id:4,
    name:"Melissa Gomez",
    timestamp:"Hay un Evento Nuevo",
    avatar:require("../../img/avatar.jpg"),
  
  }
  ,
  {
    id:5,
    name:"Melissa Gomez",
   
    timestamp:"Hay un Evento Nuevo",
    avatar:require("../../img/avatar.jpg"),
   
  }
  ,
  {
    id:6,
    name:"Melissa Gomez",
    timestamp:"Hay un Evento Nuevo",
    avatar:require("../../img/avatar.jpg"),
    
  },
  {
    id:6,
    name:"Melissa Gomez",
   
    timestamp:"Hay un Evento Nuevo",
    avatar:require("../../img/avatar.jpg"),
   
  }
];


export default class NotificacionesScreen extends Component {
  static navigationOptions = {
    title: 'Notificaciones',
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: 'steelblue',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  renderPost=lista=>{
    return(
      <View style={styles.feedItem}>
        <Image source={lista.avatar}  style={styles.avatar}/>
        <View style={{flex:1}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
         <View>
         <Text style={styles.name}>{lista.name}</Text>
         
         <Text style={styles.timestamp}>{lista.timestamp}</Text>
        
         </View>
          <Ionicons name="ios-star-outline" size={20} color="#873788B" />
      
         </View>
      
        </View>
        
      </View>
    );
  }
      render(){
      return (
               <View style={styles.container}>
                 <FlatList 
                  style={styles.feed}
                  data={lista}
                  renderItem={({item})=>this.renderPost(item)}
                  keyExtractor={item=>item.id}
                  showsVerticalScrollIndicator={false}
                 />
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
    backgroundColor:"#fff",
    borderRadius:5,
   padding:8,
    flexDirection:"row",
    marginVertical:8
  },
  avatar:{
    width:42,height:42,
    borderRadius:19,
    marginRight:16
  },
  name:{
    fontSize:15,
    fontWeight:"500",
    color:"steelblue"
  },
timestamp:{ 
  fontSize:15,
  color:"#C4C6CE",
  marginTop:5
},

})
