import React from 'react';
import { useDispatch } from 'react-redux';

import { markItemAction, updateItemAction, deleteItemAction } from '../actions/todo-items-action'

const TodoItem = ({ item }) => {

    const {id, content, isMarked} = item;
    console.log(item);

    const dispatch = useDispatch();

    return (
        <div className="todo-item">
                <input type="checkbox" checked={isMarked} />{" "}
                {content !== undefined ? 
                    <p>{content}</p> : null
                }
        </div>
    );
}