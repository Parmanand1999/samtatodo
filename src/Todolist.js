import React, { useState } from 'react'

const Todolist = () => {
    const [todoText, setTodoText] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        if (todoText !== "") {
            const update = [...todos, todoText]
            setTodos(update)
            setTodoText("")
        }
        console.log(todos)
    }
    const handelDeleteitem = ((index) => {
        const deleteData = todos.filter((items, id) => id !== index)
        setTodos(deleteData)

    })
// console.log("state")
    return (
        <>
            <div className='d-flex  gap-4'>

                <input type='text' placeholder='Enter next Todo' value={todoText} className='border-2 rounded-xl border-black p-2' onChange={(e) => setTodoText(e.target.value)}></input>
                <button className='border-2 rounded-xl border-black ml-4 p-2' onClick={handleAddTodo}>Add Todo</button>

            </div>
            <div className='flex-col justify-center mt-8  '>

                <h1 className='text-xl font-bold'>All TodoList</h1>
                {todos.map((item, index) =>
                    <div className='w-[60%] flex justify-center border-1 mb-1  ml-[15%] '>
                        <p key={index} className='bg-gray-200  border-1 mb-1 w-[40%] ml-[20%] ' >{item}
                        </p>
                        <p onClick={() => handelDeleteitem(index)} className='text-red-500 w-[10%] mb-1 bg-gray-200 '>x</p>
                    </div>



                )
                }
            </div>

        </>
    )
}

export default Todolist