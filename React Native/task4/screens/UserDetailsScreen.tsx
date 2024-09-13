import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { userType } from '../types/userType';
import axios from 'axios';
import { Card } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/StackNavigation';
import { ActivityIndicator } from 'react-native-paper';

type UserDetailProp = RouteProp<RootStackParamList, 'UserDetails'>;

type UserDetailsScreenProps = {
  route: UserDetailProp;
};

function UserDetailsScreen({ route }: UserDetailsScreenProps) {
  const { userId } = route.params;
  const [user, setUser] = useState<userType | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      setIsUserLoading(false);
      setUser(res.data);
    };
    fetchUser();
  }, []);
  return isUserLoading ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator animating={true} />
    </View>
  ) : (
    <View style={{ paddingHorizontal: 12, flex: 1, justifyContent: 'center' }}>
      <Card>
        <Card.Title title={user?.name} subtitle={user?.email} />
        <Card.Content style={{ paddingBottom: 8 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            {user?.company.name}
          </Text>
          <Text style={{ fontWeight: '500', fontSize: 14 }}>
            {user?.company.catchPhrase}
          </Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
    </View>
  );
}

export default UserDetailsScreen;
