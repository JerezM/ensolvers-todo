import React from "react";
import { markItem, deleteItem } from "./client"
import { Link } from "react-router-dom";

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
        return (
            
            <div className="todo-item">
                <input type="checkbox" checked={this.state.isMarked} onChange={this.updateIsMarked}/>{" "}
                {this.state.content !== undefined ? 
                    <p>{this.state.content}</p> : null
                }
                <Link to="/"><button className="btn-edit">Edit</button>{" "}</Link>
                <button className="btn-remove" onClick={this.handleClickDeleteItem}>Remove</button>
            </div>
        );
    }
}

export default Item;