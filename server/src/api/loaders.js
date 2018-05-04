import DataLoader from "dataloader";

export default function({ jsonResources }) {
  return {
    UserOwnedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => jsonResources.item()))
    ),
    UserBorrowedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => jsonResources.item()))
    ),
    singleItem: new DataLoader(ids =>
      Promise.all(ids.map(id => jsonResources.getItem()))
    ),
    singleUser: new DataLoader(ids =>
      Promise.all(ids.map(id => jsonResources.user()))
    )
  };
}
