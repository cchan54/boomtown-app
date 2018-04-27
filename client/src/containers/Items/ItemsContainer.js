import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Items from './Items';

export const fetchItems = gql`
    query fetchItems {
        items {
            id
            title
            description
            imageurl
            tags
            itemowner {
                id
                fullname
                email
            }
            created
            available
            borrower {
                id
                fullname
                email
            }
        }
    }
`;
class ItemsContainer extends Component {
    render() {
        return (
            <Query query={fetchItems}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading</p>;
                    if (error) return <p>Error Getting Items!</p>;
                    return <Items itemsData={data.items} />;
                }}
            </Query>
        );
    }
}

export default ItemsContainer;
