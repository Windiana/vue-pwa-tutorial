var dbPromise = idb.open('tasks-db', 1, function(db) {
  if (!db.objectStoreNames.contains('task')) {
    db.createObjectStore('task', {keyPath: 'id'});
  }
})

function readStore(storeName) {
  dbPromise.then(function(db) {
    var tx = db.transaction([storeName], 'readonly');
    var store = tx.objectStore(storeName);
    return store.getAll();
  });
}