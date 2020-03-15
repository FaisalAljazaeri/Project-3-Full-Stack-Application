import React, { Component } from "react";
import Posts from "../../posts/posts";
import OrganizationForm from "./OrganizationForm";

export default class Organization extends Component {
    constructor(props) {
        super(props);

        // By default theres no organization logged in, so no posts will render
        this.state = {
            organizationLogged: false
        };
    }

    // Change the state to organizationLogged so posts can be rendered
    organizationLogin = name => {
        this.setState({
            organizationLogged: true
        });
    };

    render() {
        // Posts will only be rendered if there's an org logged in
        const posts = this.state.organizationLogged ? (
            <Posts posts={this.props.posts} setPosts={this.props.setPosts} />
        ) : (
            ""
        );

        return (
            <div>
                <OrganizationForm organizationLogin={this.organizationLogin} />
                {posts}
            </div>
        );
    }
}
