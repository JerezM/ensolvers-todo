package com.ensolvers.todolist.item;

import java.util.List;

public interface ItemService {
    
    /**
     * Get a collection of all the items.
     * @return a collection that contain all the items.
     */
    public List<Item> getItems();
}
