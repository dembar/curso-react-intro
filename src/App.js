import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoLista } from './TodoLista';
import { TodoItem } from './TodoItem';
import { TodoItems } from './TodoItems';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Cortar papa', completed: false},
  {text: 'Cortar tomate', completed: false},
  {text: 'Cortar cilantro', completed: false},
]

const myTodos = [
  {name:'Task1', state: 'ToDo'},
  {name:'Task2', state: 'onGoing'},
  {name:'Task3', state: 'Completed'},
  {name:'Task4', state: 'ToDo'},
  {name:'Task5', state: 'onGoing'},
  {name:'Task6', state: 'ToDo'},
  {name:'Task7', state: 'Completed'},
  {name:'Task8', state: 'onGoing'},
  {name:'Task9', state: 'Completed'},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    (todos) =>{
      return todos.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  );
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text);
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <>
{/*       <TodoCounter 
        completed = {completedTodos}
        total = {totalTodos}
        />
       <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList> */}
      <CreateTodoButton />
        <TodoItems
         UrlImage='/ToDo.png'
         Description='Discover the efficiency of our ToDo table on TashHhub. Organize your tasks with ease: "ToDo" for pending, 
         "InProgress" for current and "Complete" for wins. Manage your project effectively with us! 🚀 #SimpleOrganization #ImparableProductivity.'/>
        <TodoItems 
          UrlImage='/ToDo2.png'
          Description='Experience the power of ultimate customization with our ToDo solution! Tailor your task management experience to fit your unique style.
           From personalized categories to flexible priority settings, take control of your productivity like never before. Embrace efficiency with
            a ToDo platform that adapts to your needs seamlessly. Your tasks, your way. Start customizing today!'/>
    </>
  );
}

export default App;
