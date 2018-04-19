const initialStore = {items: []};

const GET_FETCH_ITEMS = "GET_FETCH_ITEMS";

export const get_fetch_items = response => ({
  type: GET_FETCH_ITEMS,
  payload: response
});

const initialState = {
  item: initialStore
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
    // console.log(itemsAndUsers[0])

    return itemsAndUsers[0];
  };
    Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(
      item => dispatch(get_fetch_items(combineItemsAndUsers(item)))
    );
  };

//creating reducer

export default (state=initialState, action) => {
  switch (action.type){
    case GET_FETCH_ITEMS: {
      const items = action.payload;
      return {...state, items};
      break;
    }
    default: {
      return {...state};
    };
  }
}