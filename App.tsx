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
            placeholderTextColor="#000" // Adjust color if necessary
            style={styles.input}
          />
          <TextInput
            placeholder="password"
            placeholderTextColor="#000" // Adjust color if necessary
            style={styles.input}
            secureTextEntry
          />
        </View> 

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>sign in</Text>
          <View style={styles.arrowButton}>
            {/* Arrow icon can be added as an Image or a Text (e.g., with a Unicode character) */}
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
  text:{
    color:"white",
    fontSize:45,
    fontWeight:"bold",
    display:"flex",
    flexDirection: "column",
    alignItems:'center',
    width: '100%',
    height: '45%',
    padding: 50 ,  
  },
  TextInput:{
    fontSize:55,
    fontWeight:"bold",
    display:"flex",
    flexDirection: "column",
    alignItems:'center',
    
    height: '55%',
    padding: 5 ,
  },
  inputContainer: {
    height: '25%',
    width: '100%',
    marginBottom: 30,
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
    marginTop: 20,
  },
  signInText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 20,
  },
  arrowButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 24,
    color: '#fff',
  },
  footer: {
    width: '100%',
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
