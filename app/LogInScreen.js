import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { NavigationContainer } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation(); // Get navigation object using useNavigation hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUpScreen'); // Navigate to SignUpScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in Here</Text>
      <Text style={styles.desc}>Welcome back, you've been missed!</Text>
      <TextInput
        style={[styles.input, usernameFocused && styles.inputFocused]}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        onFocus={() => setUsernameFocused(true)}
        onBlur={() => setUsernameFocused(false)}
      />
      <TextInput
        style={[styles.input, passwordFocused && styles.inputFocused]}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(false)}
      />

      <TouchableOpacity style={styles.fpw}>
        <Text style={styles.fpwbtn}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Sign in</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <TouchableOpacity style={styles.cna} onPress={navigateToSignUp}>
          <Text style={styles.cnabtn}>Don't have an account yet? Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orwText}>Or continue with</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image style={styles.icon} source={require('../assets/fb.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image style={styles.icon} source={require('../assets/google.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image style={styles.icon} source={require('../assets/apple-logo.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    marginTop: 100,
    fontSize: 35,
    marginBottom: 10,
    color: '#1F1E53',
  },
  desc: {
    marginBottom: 40,
    fontSize: 15,
    marginBottom: 50,
  },
  input: {
    width: '80%',
    padding: 10,
    paddingVertical: 15,
    backgroundColor: '#F1F4FF',
    marginBottom: 10,
    borderRadius: 10,
    color: '#626262',
    borderWidth: 1, 
    borderColor: '#cccccc', 
  },
  inputFocused: {
    borderWidth: 2, 
    borderColor: '#1F1E53', 
  },
  btn: {
    backgroundColor: '#1F1E53',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  btnText: {
    fontSize: 15,
    color: '#ffffff',
  },
  fpw: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginTop: 5,
  },
  fpwbtn: {
    color: '#1F41BB',
  },
  cnaText: {
    color: '#494949',
    marginTop: 5,
  },
  cnabtn: {
    color: '#494949',
    marginTop: 5,
  },
  orwText: {
    color: '#1F41BB',
    marginTop: 50,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  iconWrapper: {
    backgroundColor: '#ECECEC',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
