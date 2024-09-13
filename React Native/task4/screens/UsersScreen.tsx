import { View, Text, FlatList } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { UserCard } from '../components/UserCard';
import { Searchbar } from 'react-native-paper';
import { userType } from '../types/userType';
import { ActivityIndicator } from 'react-native-paper';

function UsersScreen() {
  const [users, setUsers] = useState<userType[]>([]);
  const [isUsersLoading, setIsUsersLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const usersRef = useRef<userType[] | null>(null);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setIsUsersLoading(false);
      setUsers(res.data);
      usersRef.current = res.data;
    };
    fetchUsers();
  }, []);
  const searchInputHandler = (value: string) => {
    setSearchInput(value);
    setUsers(
      usersRef.current!.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  return (
    <View
      style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 18, gap: 8 }}
    >
      <Searchbar
        style={{ borderRadius: 8 }}
        placeholder="Search for users"
        onChangeText={searchInputHandler}
        value={searchInput}
      />
      {isUsersLoading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator animating={true} />
        </View>
      ) : (
        <View style={{ paddingTop: 10, paddingBottom: 70 }}>
          <FlatList
            data={users}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <UserCard key={item.id} id={item.id} name={item.name} />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 4 }}></View>}
          />
        </View>
      )}
    </View>
  );
}

export default UsersScreen;
