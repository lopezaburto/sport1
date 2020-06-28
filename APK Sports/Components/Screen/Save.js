import React,{Component} from 'react';
import { StyleSheet,View,Text ,FlatList} from 'react-native';
import EventsScreen from './Events';
import { ScrollView } from 'react-native-gesture-handler';
const lista=[
  {
    id:1,
    name:"Torneo de Boxeo",
    img:require("../../img/dep1.jpg"),
   texto:'Inicia a las 6:00PM'
  },
  {
    id:2,
    name:"Boxeo Super Mosca",
    img:require("../../img/dep2.jpg"),
    texto:'Inicia a las 7:00PM'
  },
  {
    id:3,
    name:"Partido Amistoso",
    texto:'Inicia a las 7:00PM',
    img:require("../../img/dep5.jpg"),
   
  }
  ,
  {
    id:4,
    name:"Partido sub 21",
    img:require("../../img/sp3.jpg"),
    texto:'Inicia a las 7:00PM'
  }
  ,
  {
    id:5,
    name:"Pomares",
    img:require("../../img/dep4.jpg"),
    texto:'Inicia a las 7:00PM'
  }
  ,
  {
    id:6,
    name:"Sub 21",
    img:require("../../img/dep3.jpg"),
    texto:'Inicia a las 7:00PM'
  },
  {
    id:6,
    name:"Copa Americana",
    img:require("../../img/sp1.jpg"),
    texto:'Inicia a las 7:00PM'
  }
];



export default class SaveScreen extends Component {
  static navigationOptions = {
    title: 'Evento',
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
      <View style={{margin:5}}>
     <EventsScreen
                    name={lista.name}
                    imageuri={lista.img}
                    texto={lista.texto}
                  />
      </View>
    );
  }
      render(){
      return (
               <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"#fff"}} >
              <FlatList 
                  
                  data={lista}
                  numColumns={2}
                  renderItem={({item})=>this.renderPost(item)}
                  keyExtractor={item=>item.id}
                  showsVerticalScrollIndicator={false}
                 />
               </ScrollView>
        );
      }
      
}

/*

I'm using a FlatList to show a list of items in two columns

<FlatList style={{margin:5}}
     data={this.state.items}
     numColumns={2}
     keyExtractor={(item, index) => item.id }
     renderItem={(item) => <Card image={item.item.gallery_image_url} text={item.item.name}/> }
/>*/

const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor:'#fff',
   alignItems:"center",
   justifyContent:'center'
  }
  
});
