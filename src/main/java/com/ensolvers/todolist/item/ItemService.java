package com.ensolvers.todolist.item;

import java.util.List;

import com.ensolvers.todolist.exception.ItemNotFoundException;

public interface ItemService {
    
    /**
     * Get a collection of all the items.
     * @return a collection that contain all the items.
     */
    public List<Item> getItems();

    /**
     * Create a new item using the parameterized one.
     * @param itemToAdd must not had an id.
     * @return The created item.
     */
    public Item addNewItem(Item itemToAdd);

    /**
     * Update the content of the item with the given id.
     * @param itemId must not be null.
     * @param itemContent must not be null or empty string if you want to update this attribute.
     */
    public void updateItem(Integer itemId, String itemContent) throws ItemNotFoundException;

    /**
     * Delete the item by his id.
     * @param itemId must not be null.
     */
    public void deleteItemById(Integer itemId) throws ItemNotFoundException;
}
