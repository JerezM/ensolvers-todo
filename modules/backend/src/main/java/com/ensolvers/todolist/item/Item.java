package com.ensolvers.todolist.item;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

@Entity(name = "Item")
@Table(name = "item")
@DynamicInsert
public class Item {
    
    @Id
    @SequenceGenerator(
        name = "item_sequence",
        sequenceName = "item_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "item_sequence"
    )
    @Column(
        name = "item_id"
    )
    private Integer id;

    @Column(
            name = "item_content",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String itemContent;

    @Column(
            name = "marked",
            columnDefinition = "BOOLEAN"
    )
    @ColumnDefault("false")
    private Boolean isMarked;

    public Item(Integer id, String itemContent, Boolean isMarked) {
        this.id = id;
        this.itemContent = itemContent;
        this.isMarked = isMarked;
    }

    public Item(){}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getItemContent() {
        return itemContent;
    }

    public void setItemContent(String itemContent) {
        this.itemContent = itemContent;
    }

    public Boolean getIsMarked() {
        return isMarked;
    }

    public void setIsMarked(Boolean isMarked) {
        this.isMarked = isMarked;
    }

    @Override
    public String toString() {
        return 
        "{ " + 
            "id='" + id + "'" +
            ", itemContent='" + itemContent + "'" +
            ", isMarked='" + isMarked + "'" + 
        "}";
    }

    
}
