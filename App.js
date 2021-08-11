import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';

const App = () => {
  return(
    <NavigationContainer>
      <Tabs></Tabs>
    </NavigationContainer>
  );
}

export default App;