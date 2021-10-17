import React from "react";
import { updateItem } from '../client'

class UpdateItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.itemId,
            itemContent: this.props.itemContent
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
        updateItem(id, content);

        this.props.onSuccess();

        event.preventDefault();
    }

    render () {
        const content = this.state.itemContent;
        return (
            <div className="update-item">
                <form onSubmit={this.handleSubmit}>
                    <h2>Editing Task {content}</h2>
                    <input type="text" placeholder={content} value={content}
                     onChange={this.handleChange} required/>

                    <div className="btn-update-item">
                        <input type="submit" value="Save"/>
                        <Link to={["/", "/items"]}><input type="button" value="Cancel"/></Link>
                    </div>
                </form>
            </div>
        );
    }

}

export default UpdateItemForm;

