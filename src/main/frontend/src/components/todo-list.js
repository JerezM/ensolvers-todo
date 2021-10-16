import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { retrieveItems, createItem } from '../actions/todo-items-action'
import TodoItem from './todo-item'

const TodoList = () => {

    const dispatch = useDispatch();

    /*const [item, addItem] = useState({

    });*/

    useEffect(() => {
        const fetchItems = () => dispatch(retrieveItems());
        fetchItems();
    },[]);

    const items = useSelector(state => state.items.items)
    console.log(items);

    //const handleAddNewItem = ()

    /*const onChangeAddItemInput = e => {

    }*/

    return (
        <div className="todo-list">
            <h1>To-Do List</h1>

            <ul className="list-group">
                {items.map( item => 
                    <TodoItem
                        key = {item.id}
                        id = {item.id}
                        item = {item}
                    />)
                }
            </ul>
        </div>
    );

}

export default TodoList;