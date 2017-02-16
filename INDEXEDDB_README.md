indexeddb
https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

// ------------ setup ------------
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
    // not available :( go with local storage?
}
else

// ------------ create stores ------------
var request = window.indexedDB.open("DB_NAME", VERSION_NUM);

request.onerror = function(event) {
  // Do something with request.errorCode!
  alert("Database error: " + event.target.errorCode);
};

request.onsuccess = function(event) {
  // Do something with request.result! -> save reference to db
  db = event.target.result;
};

// create stores (tables) once, on onupgradeneeded
request.onupgradeneeded = function(event) {
  var db = event.target.result;
  var objectStore = db.createObjectStore("STORE_NAME", { keyPath: "KEY" });

  // non unique index
  objectStore.createIndex("name", "name", { unique: false });

  // unique index
  objectStore.createIndex("email", "email", { unique: true });
};


---------------- transactions -------------

var transaction = db.transaction(["DB_NAME"], "readwrite");

// Do something when all the data is added to the database.
transaction.oncomplete = function(event) {
  alert("All done!");
};

transaction.onerror = function(event) {
  // Don't forget to handle errors!
};

var objectStore = transaction.objectStore("STORE_NAME");
for (var i in data) {
  var request = objectStore.add(data[i]);
  request.onsuccess = function(event) {
    // event.target.result == data[i].key;
  };
}


-------------------- delete data ----------------
var request = db.transaction(["DB_NAME"], "readwrite")
                .objectStore("STORE_NAME")
                .delete("ID");
request.onsuccess = function(event) {
  // It's gone!
};

-------------------- use index -------------------------

var index = objectStore.index("name");

index.get("Donna").onsuccess = function(event) {
  alert("Donna's SSN is " + event.target.result.ssn);
};

--------------------- using cursor ----------------------

var customers = [];

objectStore.openCursor().onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    customers.push(cursor.value);
    cursor.continue();
  }
  else {
    alert("Got all customers: " + customers);
  }
};
