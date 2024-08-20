/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  
  return (
    <View style={styles.sectionContainer}>
      <ImageBackground source={require('../Myfirstnativeproject/assets/img/photo01.png')} resizeMode='cover' style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer:{
    flex: 1,
    
  },
  
  image: {
    flex: 1,
    justifyContent: 'center',
}
});

export default App;
