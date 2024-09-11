import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Box } from './Box';

export const FlatListTask = () => {
  const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
  ];
  return (
    <FlatList
      style={{ padding: 12 }}
      data={COLORS}
      ListHeaderComponent={
        <Text style={styles.headerText}>
          Here are some boxes of different colors
        </Text>
      }
      renderItem={({ item: color }) => (
        <Box text={color.colorName} hexcode={color.hexCode} />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 8 }}></View>}
      ListEmptyComponent={
        <Text style={{ textAlign: 'center' }}>Nothing in here.</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 19,
    paddingBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
