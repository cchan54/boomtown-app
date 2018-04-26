import fetch from "node-fetch";

const resolveFunctions = {
  Query: {
    items(root) {
      return fetch(`http://localhost:3000/items`).then(response =>
        response.json()
      );
    },
    users(root) {
      return fetch(`http://localhost:3000/users`).then(response =>
        response.json()
      );
    },
    item(root, { id }) {
      return fetch(`http://localhost:3000/items/${id}`).then(response =>
        response.json()
      );
    },
    user(root, { id }) {
      return fetch(`http://localhost:3000/users/${id}`).then(response =>
        response.json()
      );
    }
  },
  Item: {
    itemowner({ itemowner }) {
      return fetch(`http://localhost:3000/users/${itemowner}`).then(response =>
        response.json()
      );
    },
    borrower({ borrower }) {
      return fetch(`http://localhost:3000/users/${borrower}`).then(response =>
        response.json()
      );
    }
  },
  User: {
    owneditems({ id }) {
      return fetch(`http://localhost:3000/items/?itemowner=${id}`).then(
        response => response.json()
      );
    },
    borroweditems({ id }) {
      return fetch(`http://localhost:3000/items/?borrower=${id}`).then(
        response => response.json()
      );
    }
  }
};
export default resolveFunctions;
