import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, TouchableHighlight } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import AppButton from "../components/AppButton";










function Feed({navigation}) {

 const data = [
     {   id:1,
         image :require('../assets/profle.jpg'),
         description: 'Hello work fellas'
     },
     { 
         id:2,
        image :require('../assets/profle.jpg'),
        description: 'Hello work fellas'
    }
 ]
 const [listings,setListings] = useState()
 
 
 
 //   const [refreshing, setRefreshing] = useState(false);
 //   const [loading,isLoading]=useState(false)
 
 
//   async function loaddata() {
//     isLoading(true)
//     const postRef = await firebase.firestore().collection("posts").orderBy("time", "desc").get()
//     setListings(postRef.docs.map((doc)=>({id: doc.id, data: doc.data()})))
//     postRef.forEach(doc => {
//         console.log("Logged In", listings)
//         })
//     isLoading(false)
//   }

//   const [listings,setListings] = useState()
  useEffect(()=> {
     

      setListings(data.map((item)=>({id:item.id ,image:item.image, description:item.description})))
  },[])
  
  return (
    <Screen style={styles.screen}>
      
      <FlatList
        data={listings}
   
       
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            feedImageStyle = {styles.feedImageStyle}
                  
            image={item.image}
            title={item.description}
           
          />
        )}
      />
    </Screen>
  );

  function checkVideo (type) {
    var str = String(type)
    if(str.includes("video"))
    {
      return true
    }
    else return false
  }
  function checkImage (type) {
    var str = String(type)
    if(str.includes("image"))
    {
      return true
    }
    else return false
  }
}



const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  feedStyle: {
      height: 500,
      borderRadius: 40,
      marginHorizontal: 20,
      
  },
  button: {
    width: 45 ,height: 45,
  },
  feedImageStyle: {
    aspectRatio: 1,
    alignSelf: "center",
    height: "85%",

  }
});

export default Feed;
