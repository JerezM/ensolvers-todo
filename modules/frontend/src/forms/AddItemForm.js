import React from "react";
import { addNewItem } from "../client"

class AddItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemContent: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({itemContent: event.target.value});  
    }

    handleSubmit(event) {
        let content = this.state.itemContent;
        console.log("itemContent: " +content);
        addNewItem(content);

        this.props.onSuccess();

        event.preventDefault();
    }

    render() {

        return (
            <div className="add-item-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="New Task" value={this.state.value}
                     onChange={this.handleChange} required/>

                    <button type="submit">Add</button>
                </form>
            </div>
        );

    }
}

export default AddItemForm;