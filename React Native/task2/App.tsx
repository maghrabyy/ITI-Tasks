import { HomeScreen } from './Screens/HomeScreen';

import { TodoListProvider } from './context/TodoListContext';

export default function App() {
  return (
    <TodoListProvider>
      <HomeScreen />
    </TodoListProvider>
  );
}
