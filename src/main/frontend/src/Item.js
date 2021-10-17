import React from "react";
import { markItem, deleteItem } from "./client"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { UpdateItemForm } from './forms/UpdateItemForm'
import { Todo } from './Todo'

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            content: props.content,
            isMarked: props.isMarked
        };

        this.handleClickDeleteItem = this.handleClickDeleteItem.bind(this);
    }

    updateIsMarked = () => {
        let mark = !this.state.isMarked;
        this.setState({
            isMarked: mark
        });
        markItem(this.state.id, mark);
    }

    handleClickDeleteItem(event) {
        deleteItem(this.state.id);
        this.props.onSuccess();
        event.preventDefault();
    }

    render() {
        const { id, content } = this.state;
        
        return (
            <Router>
                <div className="todo-item">
                    <input type="checkbox" checked={this.state.isMarked} onChange={this.updateIsMarked}/>{" "}
                    {this.state.content !== undefined ? 
                        <p>{this.state.content}</p> : null
                    }
                    <Link to="/items/edit"><button className="btn-edit">Edit</button>{" "}</Link>
                    <button className="btn-remove" onClick={this.handleClickDeleteItem}>Remove</button>
                </div>

                <Switch>
                    <Route path={["/", "/items"]}>
                        <Todo/>
                    </Route>
                    <Route path="/items/edit">
                        <UpdateItemForm 
                            key = {id}
                            id = {id}
                            itemContent = {content}
                            onSuccess = {this.props.onSuccess}
                        />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Item;