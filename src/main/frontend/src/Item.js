import React from "react";

class Item extends React.Component {
    render() {
        return (
            <div className="item">
                {this.props.content !== undefined ? 
                    <p>{this.props.content}</p> : null
                }
            </div>
        );
    }
}

export default Item;