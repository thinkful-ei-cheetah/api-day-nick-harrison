'use strict';

const api = function() {
  const  BASE_URL = 'https://thinkful-list-api.herokuapp.com/nick-harrison';

  function getItems() {
    return fetch(BASE_URL + '/items');
  }

  function createItem(name) {
    let newItem = {
      name
    };

    newItem = JSON.stringify(newItem);

    return fetch(BASE_URL + '/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newItem
    });
  }

  return {
    getItems,
    createItem
  };
}();