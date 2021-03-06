import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AppText from '../components/AppText';
import Screen from '../components/Screen'
import colors from '../config/colors';
import ListItemSeparator from "../components/lists/ListItemSeparator"
import ListItem from "../components/lists/ListItem"
// import { color } from 'react-native-reanimated';






function Instructions({navigation}) {

    const inst=[
        {   id:1,
            title:"Report this ............"
        },
        {
            id:2,
            title:"you have to go to this location"

        }
    ]
    const [listings, setListings] = useState();
//   const [loading,isLoading]=useState(false)
//   const authContext = useContext(AuthContext)
//   const [pending, setPending] = useState(true)
//   const [accept, setAccept] = useState(false)
//   const [state, updateState] = React.useState();
//   const [messages, setMessages] = useState();
//   const forceUpdate = React.useCallback(() => updateState({}), []);

//   async function loadROrdersData() {
//     setMessages(null)
//     isLoading(true)
//     const postRef = await firebase.firestore().collection("ride").where("owener","==",authContext.userDetails.docId).get()
//     let data = []

//     if(accept){
//     postRef.forEach(doc => {
//       if(doc.data().isAccepted === true)
//         data.push({id: doc.id, data: doc.data()})
//       })
      
//       setMessages(data)
//       isLoading(false)
//       return
//     }
    
//     else if(pending){
//     postRef.forEach(doc => {
//       if(doc.data().isAccepted === false)
//         data.push({id: doc.id, data: doc.data()})

//       })

//       setMessages(data)
//       isLoading(false)

//       return
//     }
//     isLoading(false)

//   }
//   async function loadUOrdersData() {
//     console.log("hello")
//     isLoading(true)
//     console.log(authContext.userDetails.docId)
//     const postRef = await firebase.firestore().collection("ride").where("pId","==",authContext.userDetails.docId).get()
    
//     setMessages(postRef.docs.map((doc)=>({id: doc.id, data: doc.data()})))
//     console.log('hey')
//     isLoading(false)

//   }


    useEffect(() => {
         
      setListings(inst.map((item)=>({id:item.id,title:item.title })))
    }, [])

  




    return (
        <Screen style={styles.screenStyle}>
           
            {/* <View style = {styles.container}>
                <AppText style = {styles.titleheader}>Rides</AppText>
            </View>
            {authContext.userDetails.isDriver === true && <View style = {styles.options}>
              <View style={{backgroundColor: pending?colors.green:colors.light, padding: 5, borderRadius: 100, paddingHorizontal:10}} >
                <TouchableHighlight onPress={()=>{setAccept(false),  setPending(true), forceUpdate()}}>
                  <AppText style={{color: pending?colors.yellow:colors.black}} >Pending</AppText></TouchableHighlight></View>

              <View style={{backgroundColor: accept?colors.green:colors.light, padding: 5, borderRadius: 100, paddingHorizontal:8}} >
                <TouchableHighlight onPress={()=>{setAccept(true), setPending(false), forceUpdate()}}>
                  <AppText style={{color: accept?colors.yellow:colors.black}} >Accepted</AppText></TouchableHighlight></View>

              
            </View>}
            {
              loading && <Image style = {styles.loading} source={require('../assets/loading.gif')}  />
            } */}
            <FlatList
                data={listings}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                    title={item.title}
                   
                    
                   

                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                
             />
        </Screen>
    );
}

const styles = StyleSheet.create({
  loading: {
    height: 300,
    width : 300,
    alignSelf: "center"
  },
    container: {
        padding: 10,
        backgroundColor: colors.light
    },
    titleheader: {
        fontSize: 28,
        color: colors.black,
        fontWeight: "bold"
    },
    screenStyle: {
      backgroundColor: colors.light
    },
    options: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
      paddingBottom: 10,
      
      
    }
})


export default Instructions;