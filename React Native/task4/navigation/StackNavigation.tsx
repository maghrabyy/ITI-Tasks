import { createStackNavigator } from '@react-navigation/stack';
import UsersScreen from '../screens/UsersScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';

export type RootStackParamList = {
  Users: undefined;
  UserDetails: {
    userId: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Users">
      <Stack.Screen name="Users" component={UsersScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
}
