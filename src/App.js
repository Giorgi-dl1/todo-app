import { useState } from 'react';
import './app.css'
import Todo from './components/Todo';
function App() {
  const [light,setLight] = useState(false);
  return (
    <main className={light ? 'App light':'App'}>
      <div className="background-img"/>
      <div className="todo-container">
        <Todo/>
      </div>
    </main>
  );
}

export default App;
