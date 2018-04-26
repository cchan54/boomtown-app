// Defining Actions
const GET_IS_LOADING = 'GET_IS_LOADING';
const GET_FETCH_ITEMS = 'GET_FETCH_ITEMS';
const GET_ITEM_FILTERS = 'GET_ITEM_FILTER';
const GET_ERROR = 'GET_ERROR';
const FETCH_USERS_ONLY = 'FETCH_USERS_ONLY';

//  creating action creators

export const get_is_loading = () => ({
    type: GET_IS_LOADING
});

export const get_fetch_items = items => ({
    type: GET_FETCH_ITEMS,
    payload: items
});

export const get_itemFilters = itemFilters => ({
    type: GET_ITEM_FILTERS,
    payload: itemFilters
});

export const get_error = error => ({
    type: GET_ERROR,
    payload: error
});

// export const fetchUsers = users => ({
//     type: FETCH_USERS_ONLY,
//     payload: users
// });

// Creating Initial State

const initialState = {
    items: [],
    isLoading: false,
    itemFilters: [],
    error: ''
};

// THUNK FETCH ACTION

export const fetchItemsAndUsers = () => dispatch => {
    const urls = ['http://localhost:3001/items', 'http://localhost:3001/users'];

    //  remove the logic
    const combineItemsAndUsers = itemsAndUsers => {
        itemsAndUsers[0].map(item => {
            itemsAndUsers[1].map(user => {
                if (user.id === item.itemowner) {
                    item.itemowner = user;
                }
            });
        });

        return itemsAndUsers[0];
    };
    dispatch(get_is_loading());
    Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
        .then(responses =>
            dispatch(get_fetch_items(combineItemsAndUsers(responses)))
        )
        .catch(error => dispatch(get_error(error)));
};

// Profile THUNK

// export const getDatafromProfileUrl = () => dispatch => {
//     const url = ['http://localhost:3000/users'];
//     Promise.all(
//         url.map(userUrl => fetch(userUrl).then(resp => resp.json()))
//     ).then(responses => dispatch(fetchUsers(getDatafromProfileUrl(responses))));
// };

//  creating reducer

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_IS_LOADING: {
        return { ...state, isLoading: true, error: '' };
    }

    case GET_FETCH_ITEMS: {
        const items = action.payload;
        return { ...state, items, isLoading: false, error: '' };
    }

    // case FETCH_USERS_ONLY: {
    //     const users = action.payload;
    //     return { ...state, users, isLoading: false, error: '' };
    // }

    case GET_ITEM_FILTERS: {
        let itemFilters = [...state.itemFilters];
        if (!itemFilters.includes(action.payload)) {
            itemFilters.push(action.payload);
        } else {
            itemFilters = itemFilters.filter(tag => tag !== action.payload);
        }
        return { ...state, itemFilters };
    }

    case GET_ERROR: {
        return { ...state, isLoading: false, error: action.payload };
    }

    default: {
        return { ...state };
    }
    }
};
