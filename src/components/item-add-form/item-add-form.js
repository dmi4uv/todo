import React, {Component} from "react";
import "./item-add-form.css"

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.label) {
        this.props.onAddItem(this.state.label)
        this.setState({label: ''})}
        else return
    }


    render() {
        return (
            <form className="item-add-form" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="Write task"
                    value={this.state.label}
                />
                <button
                    className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>
        )
    }
}