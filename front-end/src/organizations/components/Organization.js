import React, { Component } from "react";
import Posts from "../../posts/posts";
import OrganizationForm from "./OrganizationForm";
import { getAllOrganizations } from "../api";

export default class Organization extends Component {
    constructor(props) {
        super(props);

        // By default theres no organization logged in, so no posts will render
        this.state = {
            organizations: [],
            organizationLogged: false
        };
    }

    componentDidMount() {
        // Get all Organizations from API and load them in the state
        getAllOrganizations()
            .then(response => {
                this.setState({
                    organizations: response.data.organizations
                });
            })
            .catch(err => console.log(err));
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
