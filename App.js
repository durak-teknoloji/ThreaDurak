import React, {useState, useEffect} from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import { useColorScheme, View, Image, ScrollView } from 'react-native';
import Tabs from './navigation/tabs';

const App = () => {
  // const scheme = useColorScheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPlaylists();
  }, []);

  const getPlaylists = async () => {
    try {
      setLoading(true);
    } catch (error) {
      console.log("error", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  };

  return(
    <>
      {
        loading ? (
          <View style={{ flex: 1 }}>
            <Image source={require('./assets/Images/OpeningScreen.png')} resizeMode='cover'
              style={{
                flex: 1,
                width: '100%',
                backgroundColor: '#D7DFE6',
              }}></Image></View>
        ) : (
          <NavigationContainer>
            <Tabs></Tabs>
          </NavigationContainer>
        )
      }
    </>
    //  theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
  );
}

export default App;