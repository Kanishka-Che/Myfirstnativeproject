import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/img/photo01.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <Text style={styles.text}>welcome back</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="your email"
            placeholderTextColor="#000"
            style={styles.input}
          />
          <TextInput
            placeholder="password"
            placeholderTextColor="#000"
            style={styles.input}
            secureTextEntry
          />
        </View>
        
        {/* Sign-In Button moved below the inputContainer */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>sign in</Text>
          <View style={styles.arrowButton}>
            <Text style={styles.arrowText}>→</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>sign up</Text>
          <Text style={styles.footerText}>forgot passwords</Text>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '20%',
  paddingLeft:'12%',
    marginTop: '2%',
    paddingTop:5
  },
  inputContainer: {
    height: '30%',
    width: '100%',
    padding: '10%',
    marginTop: '1%',
  },
  input: {
    backgroundColor: '#C4C4C4',
    borderRadius: 50,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
  signInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0077B6',
    height: 50,
    width: '60%',
    justifyContent: 'center', // Center the button content
    borderRadius: 50, // Round the edges of the button
    marginTop: 20, // Add some margin above the button
  },
  signInText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 10,
  },
  arrowButton: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 16,
    color: '#fff',
  },
  footer: {
    width: '80%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 30,
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
