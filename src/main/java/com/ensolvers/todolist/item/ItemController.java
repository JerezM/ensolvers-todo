package com.ensolvers.todolist.item;

import java.util.List;

import com.ensolvers.todolist.exception.ItemNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/items")
public class ItemController {
    
    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping
    public ResponseEntity<List<Item>> getItems() {
        ResponseEntity<List<Item>> responseEntity;

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");

        List<Item> itemList = this.itemService.getItems();

        responseEntity = new ResponseEntity<List<Item>>(itemList, headers, HttpStatus.OK);

        return responseEntity;
    }

    @PostMapping
    public ResponseEntity<Item> addNewItem(RequestEntity<Item> requestEntity) {
        ResponseEntity<Item> responseEntity;

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");

        Item itemToAdd = requestEntity.getBody();

        Item addedItem = this.itemService.addNewItem(itemToAdd);

        responseEntity = new ResponseEntity<Item>(addedItem, headers, HttpStatus.OK);

        return responseEntity;
    }

    @PutMapping(path = "/{itemId}")
    public ResponseEntity<String> updateItem(@PathVariable("itemId") Integer itemId,
                                            RequestEntity<Item> requestEntity) throws ItemNotFoundException {
        ResponseEntity<String> responseEntity;

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
                                        
        Item itemToUpdate = requestEntity.getBody();
        String itemContentToUpdate = itemToUpdate.getItemContent();

        this.itemService.updateItem(itemId, itemContentToUpdate);

        responseEntity = ResponseEntity.ok().headers(headers).build();

        return responseEntity;
    } 

    @DeleteMapping(path = "/{itemId}")
    public ResponseEntity<String> deletedStudentById(@PathVariable("itemId") Integer itemId) throws ItemNotFoundException {
        ResponseEntity<String> responseEntity;

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");

        this.itemService.deleteItemById(itemId);

        responseEntity = ResponseEntity.ok().headers(headers).build();

        return responseEntity;
    }
}
