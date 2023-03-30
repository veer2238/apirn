import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView,Image, FlatList } from 'react-native';






export default function App() {

  const [data,setData] = useState([])

  const getData = async() =>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result =await fetch(url);
    result =await result.json()
    setData(result)


  }


  useEffect(()=>{
    getData()
  },[])

  
  

  
   
    return (
      <View>

      <Text style={{fontSize:30,marginTop:20}}>
      Flat list with api</Text>

      {
        data.length?
        <FlatList

        data={data}

        renderItem = {({item})=><View style={{borderBottomColor:"orange",borderBottomWidth:1,padding:10}}>
          <Text style={{fontSize:20,backgroundColor:"green"}}>{item.id}</Text>
          <Text style={{fontSize:20,backgroundColor:"yellow"}}>{item.title}</Text>
          </View>}
        
        />:null
      }

      
      
    
    
      

      </View>
    
      
    )
  
}



