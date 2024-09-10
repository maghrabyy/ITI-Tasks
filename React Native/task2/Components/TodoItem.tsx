import { TodoItemType } from '../types/todoItemType';
import { View, Pressable, Text } from 'react-native';
import Fa6Icon from 'react-native-vector-icons/FontAwesome6';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTodoList } from '../context/TodoListContext';

type TodoItemProps = {
  item: TodoItemType;
  index: number;
  todoList: TodoItemType[];
};
export const TodoItem = ({ item, index, todoList }: TodoItemProps) => {
  const { setTodoList } = useTodoList();
  const updateTodoItemStatus = (checked: boolean) => {
    setTodoList((prevItems) =>
      prevItems.map((todoItem) => {
        if (todoItem.id === item.id) {
          return { ...item, checked: checked };
        } else {
          return todoItem;
        }
      }),
    );
  };
  const handleChecked = () => {
    if (item.checked) {
      updateTodoItemStatus(false);
    } else {
      updateTodoItemStatus(true);
    }
  };
  const handleItemDeleted = () => {
    setTodoList((prevItems) =>
      prevItems.filter((todoItem) => todoItem.id !== item.id),
    );
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: index === todoList.length - 1 ? 0 : 1,
        paddingBottom: 4,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          textDecorationLine: item.checked ? 'line-through' : 'none',
        }}
      >
        {item.text}
      </Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Pressable onPress={handleChecked}>
          {item.checked ? (
            <MCIcon name="checkbox-marked" size={18} />
          ) : (
            <Fa6Icon name="notes-medical" size={18} />
          )}
        </Pressable>
        <Pressable onPress={handleItemDeleted}>
          <FaIcon name="trash-o" size={18} />
        </Pressable>
      </View>
    </View>
  );
};
