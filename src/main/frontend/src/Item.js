import React from "react";
import { markItem } from "./client"

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            content: props.content,
            isMarked: props.isMarked
        };
    }

    updateIsMarked = () => {
        let mark = !this.state.isMarked;
        this.setState({
            isMarked: mark
        });
        markItem(this.state.id, mark);
    }

    render() {
        return (
            <div className="item">
                <input type="checkbox" checked={this.state.isMarked} onChange={this.updateIsMarked}/>{" "}
                {this.state.content !== undefined ? 
                    <p>{this.state.content}</p> : null
                }
            </div>
        );
    }
}

export default Item;