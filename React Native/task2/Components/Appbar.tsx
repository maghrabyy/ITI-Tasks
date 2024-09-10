import { View, Text, Image } from 'react-native';

export const AppBar = () => {
  return (
    <View
      style={{
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 8,
      }}
    >
      <View
        style={{ borderRadius: 50, padding: 6, backgroundColor: '#F5F5F5' }}
      >
        <Image
          source={require('../assets/todolist.png')}
          style={{ width: 24, height: 24 }}
        />
      </View>

      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Todo App</Text>
    </View>
  );
};
