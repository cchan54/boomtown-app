import fetch from "node-fetch";
import { getUserOwnedItems, getUserBorrowedItems } from "./jsonServer";

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
      return context.loaders.getItems.load(id);
    },
    user(root, { id }) {
      return context.loaders.userItems.load(id);
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
    owneditems({ id }, args, context) {
      return context.loaders.UserOwnedItems.load(id);
    },
    borroweditems({ id }, args, context) {
      return context.loaders.UserBorrowedItems.load(id);
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
