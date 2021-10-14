package com.ensolvers.todolist.item;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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

}
