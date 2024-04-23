import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function index() {
    const navigation = useNavigation();

    const navigateToHome = () => {
    navigation.navigate('HomeScreen'); 
};

    const navigateToFavorites = () => {
    navigation.navigate('FavoritesScreen'); 
};

    const navigateToIngredients = () => {
    navigation.navigate('IngredientsScreen');
};

    const navigateToCalendar = () => {
    navigation.navigate('CalendarScreen'); 
};

    const navigateToProfile = () => {
    navigation.navigate('ProfileScreen'); 
};

    return (
    <View style={styles.container}>
    <View style = {styles.header}>
        <View>
        <Image source= {require("../assets/gradient.png")} style={{position:"absolute"}}></Image>
        </View>
            
        <View style={styles.abtnprem}>
            <Image style={{width: 20, height: 20, right: 1 }} source={require("../assets/premium.png")}></Image>
            <Text style={{fontSize: 15, fontWeight: "bold", color: "#333A73", left: -80}}>
            PRE<Text style={{fontSize: 15, fontWeight: "bold", color: "#FBA834"}}>MIUM</Text>
            </Text>
            <Text style={{fontSize: 15, fontWeight: "bold", color: "#333A73"}}> ABOUT </Text>
        </View>
        <Text style={{color: "#333A73", fontSize: 25, fontWeight: "bold", marginLeft: 25, marginTop: 45}}>WELCOME!</Text>
        <TextInput style={styles.input} placeholder='Input your ingredients'></TextInput>
        <Image style={{width: 30, height: 30, left: 204, top: -40}} source={require("../assets/calendarIcon.png")}></Image>
        <View style = {{width: 50, height: 30, left: 240, top: -68 }}>
            <Button  title='ADD'></Button>
        </View>
        <View style={{backgroundColor: "red", width: 87, height: 87, borderRadius: 100, left: 300, top: -120, backgroundColor: "white" }}></View>
        <Image style={{ width: 110, height: 90, left: 293, top: -220 }}source={require("../assets/logoNoText.png")}></Image>
    </View>
    {/* NAVIGATION BAR*/}
    <View style={[styles.navigationBar, {zIndex: 3}]}>
    <View style={styles.icons}>
        <Pressable onPress={navigateToHome}><Image style={styles.icon} source={require("../assets/OnHomeIcon.png")} /></Pressable>
        <Pressable onPress={navigateToFavorites}><Image style={styles.icon} source={require("../assets/favoritesIcon.png")} /></Pressable>
        <Pressable onPress={navigateToIngredients}><Image style={styles.icon} source={require("../assets/ingredientsIcon.png")} /></Pressable>
        <Pressable onPress={navigateToCalendar}><Image style={styles.icon} source={require("../assets/calendarIcon.png")} /></Pressable>
        <Pressable><Image style={styles.icon} source={require("../assets/profileIcon.png")} /></Pressable>
    </View>
    <View style={styles.descriptions}>
        <Text style={styles.descriptionText}>HOME</Text>
        <Text style={styles.descriptionText}>FAVORITES</Text>
        <Text style={styles.descriptionText}>INGREDIENTS</Text>
        <Text style={styles.descriptionText}>CALENDAR</Text>
        <Text style={styles.descriptionText}>PROFILE</Text>
    </View>
    </View>


    </View>

    

    )
}

const styles = StyleSheet.create({

container: {
    flex: 1,
    position: 'relative',
},

abtnprem:{
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    alignContent:"flex-start",
    top: 20
},
input:{
    width: 190,
    height: 40,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    marginLeft: 10,
    top: 0,
    shadowOpacity: 0.59,
    shadowRadius: 4.65,
    elevation: 7
},
calendar:{
    shadowOpacity: 0.59,
    shadowRadius: 4.65,
    elevation: 7
},
navigationBar: {
    position:'absolute',
    backgroundColor: "#201E53",
    justifyContent: 'flex-end',
    bottom: 0,
    left: 0,
    right: 0,
},
icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10, // Add some padding for visual appeal
},
descriptions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
},
icon: {
    width: 30,
    height: 30,
},
descriptionText: {
    fontSize: 10,
    color: "white",
},


})