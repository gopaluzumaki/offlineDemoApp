import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './Screens/LandingScreen';
import AddFriendsScreen from './Screens/AddFriendsScreen';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen
          name="Friends List"
          component={LandingScreen}    
        />
        <Stack.Screen name="AddFriendsScreen" component={AddFriendsScreen}/>
      </Stack.Navigator>
    
  );
};

export default StackNavigator;
