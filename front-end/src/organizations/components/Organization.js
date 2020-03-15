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
            currentOrganizationPosts: [],
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

            // Since an organization is authenticated by name the state
            // will hold its posts and logged state is true
            this.setState({
                currentOrganizationPosts: organizationPosts,
                organizationLogged: true
            });
        } else {
            // If no organization is found by name don't render any posts
            // and set logged back to false since it's not authenticated
            this.setState({
                currentOrganizationPosts: [],
                organizationLogged: false
            });
        }
    };

    // Pass the posts array to parent (App) to keep it in the state
    setPosts = posts => {
        this.props.setPosts(posts);
    };

    // Set new organization's posts array
    setOrganizationPosts = posts => {
        this.setState({
            currentOrganizationPosts: posts
        });
    }

    render() {
        return (
            <div>
                <OrganizationForm organizationLogin={this.organizationLogin} />
                <Posts
                    posts={this.state.currentOrganizationPosts}
                    setPosts={this.setPosts}
                    organizationLogged={this.state.organizationLogged}
                    setOrganizationPosts={this.setOrganizationPosts}
                />
            </div>
        );
    }
}
