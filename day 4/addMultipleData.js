function addMultipleData(storeName, data) {
  return new Promise(function(resolve, reject) {
    dbPromise
      .then(function(db) {
        var tx = db.transaction(storeName, 'readwrite');
        var store = tx.objectStore(storeName);
         for(key in data) {
          store.put(data[key])
        }
         tx.oncomplete = function(event) {
          resolve();
        }
      })
  })
}