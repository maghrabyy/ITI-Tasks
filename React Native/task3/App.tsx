import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { FlatListTask } from './components/FlatList Task/FlatListTask';
import { SectionListTask } from './components/SectionList Task/SextionListTask';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatListTask /> */}
      <SectionListTask />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
