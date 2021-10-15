import React from "react";
import { getAllItems } from "./client";
import Item from "./Item";
import { useEffect } from "react";

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isFetching: false
        };
    }

    componentDidMount() {
        this.fetchItems();
    }

    /*useEffect( () => {
      fetchItems();
    });*/

    fetchItems = () => {
        this.setState({
          isFetching: true
        });
        getAllItems()
          .then(res => res.json()
          .then(items => {
            console.log(items);
            this.setState({
              items: items,
              isFetching: false
            });
          }))
          .catch(error => {
            console.log(error.error);
            this.setState({
              isFetching: false
            });
          });
      }

    render() {
      const { items } = this.state;

      return (
        <div className="todo">
          <h1>To-Do List</h1>
          {
            items.map( item => 
              <Item
                key = {item.id}
                content = {item.itemContent}
                isMarked = {item.isMarked}
              />  
            )
          }
        </div>
      );

    }

}

export default Todo;