import React, { useEffect, useState } from 'react'
import List from './List'
import sun from '../images/icon-sun.svg'

function Todo() {
    const [data,setData] = useState([
        {text:'add light mode',completed:false},
        {text:'make todo list',completed:true},
        {text:'my list is sortable',completed:false}
    ]);
    const [activeData,setActiveData]=useState(data);
    const [input,setInput] = useState('');
    const [filter,setFilter] = useState('all');
    const setCompleted = (i)=>{
       let newData=data.map((item)=>{
            if(item.text == i ){
                console.log({...item,completed:true})
                return {...item,completed:true}
            }
            console.log(item,'ch')
            return item
       })
       
       setData(newData);
       if(filter == 'active'){
            setActiveData(newData.filter(item => !item.completed));
       }else if(filter == 'completed'){
           setActiveData(newData.filter(item => item.completed));
       }else{
           setActiveData(newData)
       }
       
       
    }
    const deleteTodo = (text)=>{
        let newData = data.filter((item,index)=>index !== text);
        setData(newData);
        setActiveData(newData)
    }
    const addTodo =(e)=>{
        if(e.keyCode === 13){
            e.preventDefault();
            if(input.length>=1){
                let newObj = {text:input,completed:false};
                setData([...data,newObj]);
                setActiveData([...data,newObj])

            }
            setInput('');
        }
    }
    const filterData =(type)=>{
        if(type==='all'){
            setActiveData(data);
        }else if(type === 'active'){
            setActiveData(data.filter(item => !item.completed))
        }else if(type === 'completed'){
            setActiveData(data.filter(item => item.completed))
        }
        setFilter(type);
    }
    const clearCompleted =()=>{
        setData(data.filter(item=>!item.completed));
        setActiveData(data.filter(item=>!item.completed));
        setFilter('all')
    }
    return (
        <div className="todo">

            <div className="todo-header">
                <h1>TODO</h1>
                <div className="icon">
                    <img src={sun} alt="icon" />
                </div>
            </div>
            <div className="input">
                <div className="circle"></div>
                <input 
                type="text" 
                placeholder='Create a new todo...'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                onKeyDown={addTodo}
                />
            </div>
            
            <List data={activeData} 
            setCompleted={setCompleted}
            deleteTodo={deleteTodo}
            filterData={filterData}
            clearCompleted={clearCompleted}
            filter={filter}
            />
            
        </div>
  )
}

export default Todo