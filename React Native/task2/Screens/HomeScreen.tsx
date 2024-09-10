import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import { AppBar } from '../Components/Appbar';
import { TodoInput } from '../Components/TodoInput';
import { TodoItemList } from '../Components/TodoItemList';
import { useTodoList } from '../context/TodoListContext';

export const HomeScreen = () => {
  const { todoList } = useTodoList();
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 12,
          paddingVertical: 8,
          gap: 4,
        }}
      >
        <TodoInput />
        <TodoItemList list={todoList} />
        <TodoItemList list={todoList} checkedList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 27 : 0,
  },
});
