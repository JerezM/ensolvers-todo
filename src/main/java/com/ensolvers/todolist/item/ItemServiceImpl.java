package com.ensolvers.todolist.item;

import java.util.List;
import java.util.Objects;

import javax.transaction.Transactional;

import com.ensolvers.todolist.exception.ItemNotFoundException;

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

    @Transactional
    @Override
    public void updateItem(Integer itemId, String itemContent) throws ItemNotFoundException {
        Item itemFinded = this.itemRepository.findById(itemId)
                            .orElseThrow(() -> new ItemNotFoundException("item with id: "+ itemId +" does not exist"));
        
        if( itemContent != null && itemContent.length() > 0 && !Objects.equals(itemFinded.getItemContent(), itemContent) ) {
            itemFinded.setItemContent(itemContent);
        }
    }

    @Override
    public void deleteItemById(Integer itemId) throws ItemNotFoundException {
        boolean itemExist = this.itemRepository.existsById(itemId);

        if(!itemExist) {
            throw new ItemNotFoundException("item with id: "+ itemId +" does not exist");
        }

        this.itemRepository.deleteById(itemId);
    }
    
}
