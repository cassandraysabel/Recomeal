import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Landing() {
  const navigation = useNavigation();

  const navigateToHeader = () => {
    navigation.navigate('favorites'); 
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={navigateToHeader}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 500,
    height: 500,
  },
});
