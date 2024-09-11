import { Image, View, Text } from 'react-native';

type ContactItemProps = {
  name: string;
};
export const ContactItem = ({ name }: ContactItemProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 6,
        paddingStart: 12,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#DDDDDD',
        }}
      >
        <Image
          source={require('../../assets/avatar.png')}
          style={{ width: 22, height: 22 }}
        />
      </View>
      <Text style={{ fontSize: 18, fontWeight: 500 }}>{name}</Text>
    </View>
  );
};
