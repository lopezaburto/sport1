import React,{Component} from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';
import {Button} from 'native-base'

export default class EventsScreen extends Component {

      render(){
      return (
        <View style={{height:220,width:150,marginLeft:15,borderWidth:1,borderColor:'steelblue'}}>
        <View style={{flex:2}}>
            <Image source={this.props.imageuri}
            style={{flex:1,width:null,height:null,resizeMode:'cover'}}
            />
        </View>
        <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
            <Text style={{fontWeight:'600',fontSize:17}}>{this.props.name}</Text>
            <Text style={{fontSize:12,color:'gray'}}>{this.props.texto}</Text>
      </View>
      </View>   
        );
      }
      
}




const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor:'#fff',
   alignItems:"center",
   justifyContent:'center'
  }
  
});
