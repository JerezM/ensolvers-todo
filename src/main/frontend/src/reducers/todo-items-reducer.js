import {
    CREATE_ITEM,
    RETRIEVE_ITEMS,
    UPDATE_ITEM,
    DELETE_ITEM,
    MARK_ITEM
} from '../actions/types';

const initialState = {
  items: [],
};

function todoItemReducer(state = initialState, action) {
    const { type, payload } = action;
    const { items } = state;
   
    switch (type) {
      case CREATE_ITEM:
        return ({
          ...state,
          items: [...items, payload]
        });
  
      case RETRIEVE_ITEMS:
        return ({
          ...state,
          items: payload
        });
  
      case UPDATE_ITEM:
        return ({
          ...state,
          items: items.map((item) => {
            if (item.id === payload.itemId) {
              let sourceItem = {
                  id: payload.itemId,
                  content: payload.itemContent,
                  isMarked: item.isMarked
              };
              return Object.assign(item, sourceItem);
            } else {
              return item;
            }
          })
        });
  
      case DELETE_ITEM:
        return ({
          ...state,
          items: items.filter(({ id }) => id !== payload.itemId)
        });
  
      case MARK_ITEM:
        return ({
          ...state,
          items: items.map((item) => {
            if (item.id === payload.itemId) {
              let sourceItem = {
                  id: payload.itemId,
                  content: item.content,
                  isMarked: payload.isMarked
              };
              return Object.assign(item, sourceItem);
            } else {
              return item;
            }
          })                  
      });
  
      default:
        return items;
    }
};
  
export default todoItemReducer;