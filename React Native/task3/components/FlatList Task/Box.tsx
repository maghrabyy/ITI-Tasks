import { View, Text } from 'react-native';

type BoxProps = {
  text: string;
  hexcode: string;
};
export const Box = ({ text, hexcode }: BoxProps) => {
  return (
    <View style={{ backgroundColor: hexcode, padding: 12, borderRadius: 4 }}>
      <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 14 }}>
        {text} {hexcode}
      </Text>
    </View>
  );
};
