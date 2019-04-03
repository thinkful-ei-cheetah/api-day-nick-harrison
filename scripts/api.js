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
  function updateItem(id, updateData){
    let data = JSON.stringify(updateData);
    
    // console.log(data);

    return fetch(`${BASE_URL}/items/${id}`, {
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:data
    });
  }
  function deleteItem(id){
    return fetch(`${BASE_URL}/items/${id}`, {
      method:'DELETE'
    });
  }
  function listApiFetch(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          // Valid HTTP response but non-2xx status - let's create an error!
          error = { code: res.status };
        }
  
        // In either case, parse the JSON stream:
        return res.json();
      })
  
      .then(data => {
        // If error was flagged, reject the Promise with the error object
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
  
        // Otherwise give back the data as resolved Promise
        return data;
      })
  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
}();
