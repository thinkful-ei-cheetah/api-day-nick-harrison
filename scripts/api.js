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
  function updateItem(id,updateData){
    let data=JSON.stringify(updateData);
    console.log(data);
    return fetch(`${BASE_URL}/items/${id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:data
    });
  }

  return {
    getItems,
    createItem,
    updateItem
  };
}();