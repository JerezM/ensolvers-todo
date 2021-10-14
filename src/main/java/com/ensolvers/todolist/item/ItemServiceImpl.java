package com.ensolvers.todolist.item;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;

    @Autowired
    public ItemServiceImpl(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @Override
    public List<Item> getItems() {
        List<Item> itemList = this.itemRepository.findAll();

        return itemList;
    }

    @Override
    public Item addNewItem(Item itemToAdd) {
        Item addedItem = this.itemRepository.save(itemToAdd);

        return addedItem;
    }
    
}
