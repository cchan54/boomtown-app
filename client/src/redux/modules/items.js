// Defining Actions

const GET_IS_LOADING = "GET_IS_LOADING";
const GET_FETCH_ITEMS = "GET_FETCH_ITEMS";
const GET_ITEM_FILTERS = "GET_ITEM_FILTER";
const GET_TAGS = "GET_TAGS";
const GET_ERROR = "GET_ERROR";

//creating action creators

export const get_is_loading = () => ({
  type: GET_IS_LOADING
});

export const get_fetch_items = response => ({
  type: GET_FETCH_ITEMS,
  payload: response
});

export const get_itemFilters = itemFilters => ({
  type: GET_ITEM_FILTERS,
  payload: itemFilters
});

export const get_error = error => ({
  type: GET_ERROR,
  payload: error
});

// Creating Initial State


const initialState = {
  items: [],
  isLoading: false,
  itemFilters: [],
  error: ""
}

// CREATING THUNK FETCH ACTION

export const fetchItemsAndUsers = () => dispatch => {
  const urls = ["http://localhost:3000/items", "http://localhost:3000/users"];

//remove the logic
  const combineItemsAndUsers = itemsAndUsers  => {
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
    Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(
      item => dispatch(get_fetch_items(combineItemsAndUsers(item)))
    )
    .catch(error => dispatch(get_error(error)));
  };

//creating reducer

export default (state=initialState, action) => {
  switch (action.type){
    case GET_IS_LOADING: {
      return{...state, isLoading: true, error: ""};
      break;
    }

    case GET_FETCH_ITEMS: {
      const items = action.payload;
      return {...state, items, isLoading: false, error: ""};
      break;
    }
    
    case GET_ITEM_FILTERS: {
      let itemFilters = [...state.itemFilters];
      if(!itemFilters.includes(action.payload)) {
      itemFilters.push(action.payload);
      } else {
  
      }
      return { ...state, itemFilters };
    }

    case GET_ERROR: {
      return {...state, isLoading: false, error: action.payload};
      break;
    }

    default: {
      return {...state};
    };
  }
}

