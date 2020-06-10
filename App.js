import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/managerScreen/BottomTabs';
import { Provider} from 'react-redux';
import {store} from './src/redux/store';


export default function App() {
  return (
    // <View>
    //   <Text>Thinh</Text>
    // </View>
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <BottomTabs/>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}