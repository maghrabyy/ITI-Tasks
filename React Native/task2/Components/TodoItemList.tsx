import { ScrollView, View, Text } from 'react-native';
import { TodoItemType } from '../types/todoItemType';
import { TodoItem } from './TodoItem';

type TodoItemsProps = {
  list: TodoItemType[];
  checkedList?: boolean;
};
export const TodoItemList = ({ list, checkedList = false }: TodoItemsProps) => {
  const todoItemsList = checkedList
    ? list.filter((todoItem) => todoItem.checked)
    : list.filter((todoItem) => !todoItem.checked);
  return (
    <ScrollView
      style={{
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 8,
        gap: 8,
        padding: 8,
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: '600' }}>
        {checkedList ? 'Checked Items' : 'Todo Items'}
      </Text>

      {todoItemsList.length > 0 ? (
        todoItemsList.map((item, index, todoItemArr) => (
          <TodoItem
            key={item.id}
            item={item}
            index={index}
            todoList={todoItemArr}
          />
        ))
      ) : (
        <View>
          <Text>Nothing in here.</Text>
        </View>
      )}
    </ScrollView>
  );
};
