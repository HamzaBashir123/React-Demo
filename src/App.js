import './App.css';
import { useState } from 'react';

function App() {
 const [advice, setAdvice] = useState(null);
 const [count, setACount] = useState(1);
 const [item, setItem] = useState(null);
  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    setAdvice(data.slip.advice)

  }

  async function getTitle(){
    const res1 = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    const data1 = await res1.json()
    
    // console.log(data1)
    setItem(data1)
    setACount((c)=> c+1)

    const newItem = `${item.id} : ${item.title}`;
    // console.log(newItem , " ====> NewItem")

    // Append the new item to the listParent
    const listParent = document.querySelector('.listParent');
    // console.log(listParent)
    const listItem = document.createElement('li');
    listItem.className = 'list';
    listItem.innerHTML = newItem;
    listParent.appendChild(listItem);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{advice}</p>
      <button class="getBtn" onClick={getAdvice}>Get advice</button>
      <button class="getBtn" onClick={getTitle}>Get Todo List Titles</button>
      <div className='listDiv'>
        <ul className='listParent'>
       
        </ul>
      </div>
      </header>
     
    </div>
  );
}

export default App;
