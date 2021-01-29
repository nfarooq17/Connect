import React, { useState } from "react";
import { View, StyleSheet, Image,TouchableWithoutFeedback } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'




import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, subTitle, image, isImage, video, isVideo, feedImageStyle, feedStyle, isFeedPost=false, like, onLikePress, onPress, }) {
  const [mute,setMute]=useState(false)
  return (
    <View style={[styles.card, feedStyle]}>
      <View style ={{alignItems: "center",}}>
      {image && 
      <TouchableWithoutFeedback onPress={onPress}>
        <Image resizeMethod="scale" resizeMode="contain" style={[styles.image]}  source={image} />
        </TouchableWithoutFeedback>}
      {isVideo&&
      <TouchableWithoutFeedback onPress={()=>{setMute(!mute)}}>
      <Video    
          source={{ uri: image}}
          rate={1.0}
          volume={1.0}
          isMuted={!mute}
          resizeMode="contain"
          isLooping={mute}
          shouldPlay={mute}
          style={{ width: 300, height: 300 }}
    />
    </TouchableWithoutFeedback>}
    </View>

      <View style={styles.detailsContainer}>
      <TouchableWithoutFeedback onPress = {onPress}>
        <AppText style={styles.title}>{title}</AppText>
        </TouchableWithoutFeedback>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
        {(isFeedPost && !like) &&<MaterialCommunityIcons name = "heart" size = {25} onPress = {onLikePress}/>}
        {(isFeedPost && like ) && <MaterialCommunityIcons color = 'red' name = "heart" size = {25} onPress = {onLikePress}/>}
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    overflow: "hidden",
    aspectRatio: 1,
    alignSelf: "center",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
