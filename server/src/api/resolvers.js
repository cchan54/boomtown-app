import fetch from "node-fetch";
import {
  getUsers,
  getItems,
  getUserOwnedItems,
  getBorrowedItems,
  getItemBorrower
} from "./resources/jsonServer";

const jsonAPI = "http://localhost:3001";

export default function({ jsonResources }) {
  return {
    Query: {
      items(root) {
        //here
        return jsonResources.getItems();
      },
      users(root) {
        return jsonResources.loaders.getUsers();
      },
      item(root, { id }) {
        return context.loaders.singleItem.load(id);
      },
      user(root, { id }) {
        return context.loaders.singleUser.load(id);
      }
    },
    Item: {
      itemowner({ itemowner }, args, context) {
        return context.loaders.singleItem.load(itemowner);
      },
      async borrower({ borrower }) {
        return jsonResources.getItemBorrower();
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
}
