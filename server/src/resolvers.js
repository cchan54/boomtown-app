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
    async borrower({ borrower }) {
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
  },
  Mutation: {
    addItem(root, args) {
      const newItem = {
        name: args.name,
        title: args.title,
        description: args.description,
        imageurl: args.imageurl,
        tags: args.tags,
        itemowner: args.itemowner,
        created: args.createdon,
        available: args.available,
        borrower: args.borrower
      };

      fetch(`${jsonAPI}/items`, {
        body: JSON.stringify(newItem),
        method: "POST",
        headers: {
          "content-type": "application/json"
        }
      }).then(response => response.json());
      return newItem;
    }
  }
};
export default resolveFunctions;
