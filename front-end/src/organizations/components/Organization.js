import React, { Component } from "react";
import Posts from "../../posts/component/posts";
import OrganizationForm from "./OrganizationForm";
import { getAllOrganizations } from "../api";

export default class Organization extends Component {
    constructor(props) {
        super(props);

        // By default theres no organization logged in, so no posts will render
        this.state = {
            organizations: [],
            currentOrganizationPosts: []
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

    // Change the state of oaranizations posts so they can be rendered
    organizationLogin = name => {
        // get organizations array from state
        const { organizations } = this.state;

        // Find the selected organization by the passed name
        const selectedOrganization = organizations.find(
            org => org.name.toLowerCase() === name.toLowerCase()
        );

        // check if an organization is found by name
        // update the current organization to render its posts
        if (selectedOrganization) {
            // Get all posts by the organization with the passed name
            const organizationPosts = this.props.posts.filter(
                post =>
                    post.organization.name.toLowerCase() ===
                    selectedOrganization.name.toLowerCase()
            );

            this.setState({
                currentOrganizationPosts: organizationPosts
            });
        } else {
            // If no organization is found by name don't render any posts
            this.setState({
                currentOrganizationPosts: []
            });
        }
    };

    // Pass the posts array to parent (App) to keep it in the state
    setPosts = posts => {
        this.props.setPosts(posts);
    };

    render() {
        return (
            <div>
                <OrganizationForm organizationLogin={this.organizationLogin} />
                <Posts
                    posts={this.state.currentOrganizationPosts}
                    setPosts={this.setPosts}
                />
            </div>
        );
    }
}
