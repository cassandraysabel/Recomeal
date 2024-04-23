import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LandingScreen() {
  const navigation = useNavigation();

  const navigateToLogIn = () => {
    navigation.navigate('LogInScreen'); 
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={navigateToLogIn}>
        <Image
          source={require("../assets/5.png")}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'top',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 500,
  },
});
