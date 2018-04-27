import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Profile from './Profile';
import ItemCardList from '../../components/ItemCardList';
// import { fetchProfileItemsFromUrl } from '../../redux/modules/profile';
import './styles.css';

export const fetchUser = gql`
    query user($id: ID!) {
        user(id: $id) {
            id
            fullname
            bio
            email
            owneditems {
                id
                title
                description
                tags
                itemowner {
                    id
                }
                created
                imageurl
            }
            borroweditems {
                id
            }
        }
    }
`;

class ProfileContainer extends Component {
    render() {
        const id = this.props.match.params.itemownerId;
        console.log(this.props);
        return (
            <Query query={fetchUser} variables={{ id }}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error Getting Profile!</p>;
                    return (
                        <div className="profileContainer">
                            <Profile profileData={data.user} />
                            <ItemCardList itemsData={data.user.owneditems} />
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default ProfileContainer;
