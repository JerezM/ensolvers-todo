import {
    CREATE_ITEM,
    RETRIEVE_ITEMS,
    UPDATE_ITEM,
    DELETE_ITEM,
    MARK_ITEM
} from './types';

import TodoItemDataService from '../services/todo-item-service';
import { Dispatch } from 'react';

export function createItemAction(itemContent) {
  return async (dispatch) => {
      try {
        const res = TodoItemDataService.addNewItem({ itemContent });
        
        dispatch({
          type: CREATE_ITEM,
          payload: res.item,
        });

      } catch (err) {
          console.log(err)
      }
  }
}

export function retrieveItemsAction() {
  return async (dispatch) => {
      
      try {
        const res = TodoItemDataService.getAllItems();
  
        dispatch({
          type: RETRIEVE_ITEMS,
          payload: res.items,
        });

      } catch (err) {
        console.log(err);
      }
  }
}

export function updateItemAction(itemId, itemContent) {
  return async (dispatch) => {
    try{
      TodoItemDataService.updateItem(itemId, itemContent);
  
        dispatch({
          type: UPDATE_ITEM,
          payload: {itemId, itemContent},
        });

    } catch (err) {
      console.log(err);
    }
  }
}

export function deleteItemAction(itemId) {
  return async (dispatch) => {
    try {
      TodoItemDataService.deleteItem(itemId);

      dispatch({
        type: DELETE_ITEM,
        payload: { itemId },
      });

    } catch (err) {
      console.log(err);
    }
  }
}

export function markItemAction(itemId, isMarked) {
  return async (dispatch) => {
    try{
      TodoItemDataService.markItem(itemId, isMarked);
  
      dispatch({
        type: MARK_ITEM,
        payload: {itemId, isMarked},
      });

    } catch (err) {
      console.log(err);
    }
  }
}


