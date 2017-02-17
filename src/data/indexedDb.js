import Storage from './storage';

class IndexedDb extends Storage{

    constructor() {
        super();
        this.db = null;
    }

    init(dbName) {

        this.db = this.request(window.indexedDB.open(dbName, 1))
            .then((db) => {
                //this.db = db;
                //debugger;
                db.createObjectStore("channels", { keyPath: "id" });
                return db;
            })
            .catch((e) => {
                throw new Error('There was an error opening the indexedDb store ' + e);
            });

            return this.db;
    }

    add(record) {

    }

    remove(){}

    list(store) {

        return this.db.then((db) => {
            debugger;
            return this.request(db.transaction(store, 'readwrite').objectStore(store).openCursor())
                .then((cursor) => {
                    debugger;
                    let results = [];
                    if(cursor) {
                        results.push(cursor.value);
                        cursor.continue();
                    }
                    else {
                        return results;
                    }

                });
        });

    }

    request(req) {
        return new Promise((resolve, reject) => {
            req.onsuccess = (e) => {
                resolve(e.target.result);
            };

            req.onerror = (e) => {
                reject(e);
            };
        });
    }
}

export default IndexedDb;
