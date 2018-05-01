import fetch from "node-fetch";

const jsonAPI = "http://localhost:3001";

export const getUserOwnedItems = id => {
  return fetch(`${jsonAPI}/items/?itemowner=${id}`).then(response =>
    response.json()
  );
};

export const getBorrowedItems = id => {
  return fetch(`${jsonAPI}/items/?borrower=${id}`).then(response =>
    response.json()
  );
};

export const getItem = id => {
  return fetch(`${jsonAPI}/items/${id}`).then(response => response.json());
};

export const getUser = id => {
  return fetch(`${jsonAPI}/users/${id}`).then(response => response.json());
};
