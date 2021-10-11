import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import Tabs from './navigation/tabs';

const App = () => {
  const scheme = useColorScheme();
  return(
    <NavigationContainer>
      <Tabs></Tabs>
    </NavigationContainer>
    //  theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
  );
}

export default App;