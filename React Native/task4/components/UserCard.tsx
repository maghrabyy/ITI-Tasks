import { Card, Avatar, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/StackNavigation';
import { StackNavigationProp } from '@react-navigation/stack';

type UserDetailProp = StackNavigationProp<RootStackParamList, 'UserDetails'>;

type UserCardProps = {
  id: number;
  name: string;
};
export const UserCard = ({ id, name }: UserCardProps) => {
  const navigation = useNavigation<UserDetailProp>();
  return (
    <Card mode="contained">
      <Card.Title
        title={name}
        left={(props) => <Avatar.Icon {...props} icon="account" />}
        right={(props) => (
          <IconButton
            {...props}
            icon="arrow-right"
            onPress={() => {
              navigation.navigate('UserDetails', { userId: id.toString() });
            }}
          />
        )}
      />
    </Card>
  );
};
