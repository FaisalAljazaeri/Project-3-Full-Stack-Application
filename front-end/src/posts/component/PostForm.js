import React, { Component } from "react";

export default class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            photo: "",
            description: "",
            place: ""
        };
    }

    // Set state with new value when an input field is changed
    chnageHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitHanler = e => {
        // Prevent page reload when the form is submitted
        e.preventDefault();

        // Get the input values from the state
        const { title, description, photo, place } = this.state;

        // Create new Post object with the data from inputs
        const post = { title, description, photo, place };

        // Return all the state values to their defaults
        this.setState({
            title: "",
            photo: "",
            description: "",
            place: ""
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitHanler}>
                    <div>
                        <label>Title: </label>
                        <input
                            name="title"
                            value={this.state.title}
                            onChange={this.chnageHandler}
                            placeholder="Post Title"
                        />
                    </div>
                    <div>
                        <label>Description: </label>
                        <input
                            name="description"
                            value={this.state.description}
                            onChange={this.chnageHandler}
                            placeholder="Post Description"
                        />
                    </div>
                    <div>
                        <label>Place: </label>
                        <input
                            name="place"
                            value={this.state.place}
                            onChange={this.chnageHandler}
                            placeholder="Post Place"
                        />
                    </div>
                    <div>
                        <label>Photo: </label>
                        <input
                            name="photo"
                            value={this.state.photo}
                            onChange={this.chnageHandler}
                            placeholder="Post Photo"
                        />
                    </div>

                    <button type="submit">Add Post</button>
                </form>
            </div>
        );
    }
}
