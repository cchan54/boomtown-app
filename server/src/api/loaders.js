import DataLoader from "dataloader";
import {
  getUserOwnedItems,
  getBorrowedItems,
  getItem,
  getUser
} from "./jsonServer";

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => getUserOwnedItems(id)))
    ),
    UserBorrowedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => getBorrowedItems(id)))
    )
  };
}
