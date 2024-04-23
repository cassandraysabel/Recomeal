import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function index() {
  return (
    // The main container view
    <View style={styles.container}>
      {/* Navigation bar with a blue background positioned at the bottom */}
      <View style={styles.navigationBar}>
        {/* Icons container */}
        <View style={styles.icons}>
          <Image style={styles.icon} source={require("../assets/homeIcon.png")} />
          <Image style={styles.icon} source={require("../assets/favoritesIcon.png")} />
          <Image style={styles.icon} source={require("../assets/ingredientsIcon.png")} />
          <Image style={styles.icon} source={require("../assets/calendarIcon.png")} />
          <Image style={styles.icon} source={require("../assets/profileIcon.png")} />
        </View>
        {/* Descriptions container */}
        <View style={styles.descriptions}>
          <Text style={styles.descriptionText}>HOME</Text>
          <Text style={styles.descriptionText}>FAVORITES</Text>
          <Text style={styles.descriptionText}>INGREDIENTS</Text>
          <Text style={styles.descriptionText}>CALENDAR</Text>
          <Text style={styles.descriptionText}>PROFILE</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex to take up the full screen
    justifyContent: 'flex-end', // Align children (navigation bar) at the bottom
  },
  navigationBar: {
    backgroundColor: "#201E53",
    // height: 63, // You might want to adjust or remove this height if it causes layout issues
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
});
