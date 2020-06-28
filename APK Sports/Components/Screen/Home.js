import React,{Component} from 'react';
import { StyleSheet,View,Text,SafeAreaView,FlatList,Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements'

const lista=[
  {
    id:1,
    name:"Melissa Gomez",
    text:"Partido entre la seleccion nacional",
    timestamp:15694587,
    avatar:require("../../img/avatar.jpg"),
    image:require("../../img/sp1.jpg")
  },
  {
    id:2,
    name:"Melissa Gomez",
    text:"Participacion de Juego amistoso entre Nicaragua y Suiza",
    timestamp:15694587,
    avatar:require("../../img/avatar.jpg"),
    image:require("../../img/sp3.jpg")
  },
  {
    id:3,
    name:"Melissa Gomez",
    text:"Ciclismo",
    timestamp:15694587,
    avatar:require("../../img/avatar.jpg"),
    image:require("../../img/image2.jpg")
  }
  ,
  {
    id:4,
    name:"Melissa Gomez",
    text:"Pelea por el cinturon Super Mosca",
    timestamp:15694587,
    avatar:require("../../img/avatar.jpg"),
    image:require("../../img/dep2.jpg")
  }
  ,
  {
    id:5,
    name:"Melissa Gomez",
    text:"Boxeo",
    timestamp:15694587,
    avatar:require("../../img/avatar.jpg"),
    image:require("../../img/dep1.jpg")
  }
  ,
  {
    id:6,
    name:"Melissa Gomez",
    text:"Partido sub 21",
    timestamp:15694587,
    avatar:require("../../img/avatar.jpg"),
    image:require("../../img/dep3.jpg")
  },
  {
    id:6,
    name:"Melissa Gomez",
    text:"Pomares",
    timestamp:15694587,
    avatar:require("../../img/avatar.jpg"),
    image:require("../../img/dep4.jpg")
  }
];


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
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
          <Ionicons name="ios-more" size={24} color="#873788B" />
      
         </View>
            <Text style={styles.post}>
               {lista.text}
        </Text>
        <Image resizeMode="cover" style={styles.postImage} source={lista.image}  />
        <View style={{flexDirection:'row'}}>
               <Ionicons name="ios-heart-empty" size={28} color="#737888"/>
               <Ionicons style={{marginHorizontal:6}} name="logo-instagram" size={28} color="#737888"/>
              

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
   backgroundColor:'lightcyan ',
  
  },
  feed:{
  marginHorizontal:15,

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
    width:38,height:38,
    borderRadius:19,
    marginRight:16
  },
  name:{
    fontSize:15,
    fontWeight:"500",
    color:"#452D65"
  },
timestamp:{ 
  fontSize:15,
  color:"#C4C6CE",
  marginTop:5
},
post:{
  marginTop:16,
  fontSize:14,
  color:"#838899"
},
postImage:{
    width:undefined,
    height:150,
    borderRadius:6,
    marginVertical:15
}
})
