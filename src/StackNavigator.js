import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import BottomTabs from './BottomTabs';
import  Details  from './Details';

const Stack = createStackNavigator();

const Header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.pop}
          color="red"
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Avatar.Image
            size={40}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          previous ? title : <MaterialCommunityIcons name="twitter" size={40} />
        }
      />
    </Appbar.Header>
  );
};

export default StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen
        name="Feed"
        component={BottomTabs}
        options={{ headerTitle: 'Twitter' }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Tweet' }}
      />
    </Stack.Navigator>
  );
};