import { View, TextInput, Pressable, Text, Keyboard } from 'react-native';
import { useState } from 'react';
import { useTodoList } from '../context/TodoListContext';

export const TodoInput = () => {
  const { setTodoList } = useTodoList();
  const [todoText, setTodoText] = useState('');
  const [todoTextError, setTodoTextError] = useState('');
  const addTodoHandler = () => {
    if (todoText.length > 0) {
      if (todoText.length > 3) {
        const randId = Math.floor(Math.random() * 9000000000);
        setTodoList((prevItem) => [
          ...prevItem,
          { id: `note-${randId}`, text: todoText, checked: false },
        ]);
        setTodoText('');
        Keyboard.dismiss();
      } else {
        setTodoTextError('Todo must be more than 3 characters.');
      }
    } else {
      setTodoTextError('Todo Field is required.');
    }
  };

  const handleTodoChange = (value: string) => {
    setTodoText(value);
    if (value.length > 3) {
      setTodoTextError('');
    } else {
      if (value.length === 0) {
        setTodoTextError('Todo Field is required.');
      } else {
        if (value.length < 3) {
          setTodoTextError('Todo must be more than 3 characters.');
        }
      }
    }
  };
  return (
    <View style={{ gap: 4 }}>
      <TextInput
        placeholder="Enter your todo item here."
        value={todoText}
        onChange={(e) => handleTodoChange(e.nativeEvent.text)}
        style={{
          borderWidth: 2,
          borderColor: todoTextError ? 'red' : 'black',
          borderRadius: 8,
          padding: 8,
        }}
      />
      <Pressable
        onPress={addTodoHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? 'rgba(0,0,255,0.7)' : '#229799',
          paddingVertical: 8,
          borderRadius: 8,
        })}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Add</Text>
      </Pressable>
      {todoTextError && <Text style={{ color: 'red' }}>{todoTextError}</Text>}
    </View>
  );
};
