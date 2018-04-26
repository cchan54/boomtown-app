import fetch from "node-fetch";

const jsonAPI = "http://localhost:3001";

const resolveFunctions = {
  Query: {
    items(root) {
      return fetch(`${jsonAPI}/items`).then(response => response.json());
    },
    users(root) {
      return fetch(`${jsonAPI}/users`).then(response => response.json());
    },
    item(root, { id }) {
      return fetch(`${jsonAPI}/items/${id}`).then(response => response.json());
    },
    user(root, { id }) {
      return fetch(`${jsonAPI}/users/${id}`).then(response => response.json());
    }
  },
  Item: {
    itemowner({ itemowner }) {
      return fetch(`${jsonAPI}/users/${itemowner}`).then(response =>
        response.json()
      );
    },
    borrower({ borrower }) {
      return fetch(`${jsonAPI}/users/${borrower}`).then(response =>
        response.json()
      );
    }
  },
  User: {
    owneditems({ id }) {
      return fetch(`${jsonAPI}/items/?itemowner=${id}`).then(response =>
        response.json()
      );
    },
    borroweditems({ id }) {
      return fetch(`${jsonAPI}/items/?borrower=${id}`).then(response =>
        response.json()
      );
    }
  }
};
export default resolveFunctions;
