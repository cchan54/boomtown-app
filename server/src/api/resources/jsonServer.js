import fetch from "node-fetch";

const jsonAPI = "http://localhost:3001";

export default function(app) {
  return {
    getUserOwnedItems(id) {
      return fetch(`${jsonAPI}/items/?itemowner=${id}`).then(response =>
        response.json()
      );
    },

    getBorrowedItems(id) {
      return fetch(`${jsonAPI}/items/?borrower=${id}`).then(response =>
        response.json()
      );
    },

    getItems() {
      return fetch(`${jsonAPI}/items/`).then(response => response.json());
    },

    getItem(id) {
      return fetch(`${jsonAPI}/items/${id}`).then(response => response.json());
    },

    getUser(id) {
      return fetch(`${jsonAPI}/users/${id}`).then(response => response.json());
    },

    getUsers() {
      return fetch(`${jsonAPI}/users`).then(response => response.json());
    },

    getItemOwner(id) {
      return fetch(`${jsonAPI}/users/${itemowner}`).then(response =>
        response.json()
      );
    },

    getItemBorrower(id) {
      return fetch(`${jsonAPI}/items/?borrower=${id}`).then(response =>
        response.json()
      );
    }
  };
}
