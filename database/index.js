import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.db");

const Database = {
  createTable: () => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists notes (id integer primary key not null, title VARCHAR(255), description text, time VARCHAR(255));"
      );
    });
  },

  selectAllNotes: (setData) => {
    db.transaction((tx) => {
      tx.executeSql("select * from notes", [], (_, { rows: { _array } }) => {
        setData(_array);
      });
    });
  },

  addNote: (title, description, time) => {
    let transactionResult = [];
    db.transaction((tx) => {
      tx.executeSql(
        "insert into notes (title, description, time) values (?, ?, ?)",
        [title, description, time],
        (tx, result) => {
          transactionResult.push(result);

          //console.log(result);
        }
      );
    });
    console.log(transactionResult);
    return transactionResult;
  },
  updateNote: (id, title, description) => {
    let transactionResult;
    if (title && description) {
      db.transaction((tx) => {
        tx.executeSql(
          "update notes set title=?, description=? where id=?;",
          [title, description, id],
          (tx, result) => {
            transactionResult = result;
          }
        );
      });
    } else if (title) {
      db.transaction((tx) => {
        tx.executeSql(
          "update notes set title=? where id=?;",
          [title, id],
          (tx, result) => {
            transactionResult = result;
          }
        );
      });
    } else {
      db.transaction((tx) => {
        tx.executeSql(
          "update notes set description=? where id=?;",
          [description, id],
          (tx, result) => {
            transactionResult = result;
          }
        );
      });
    }
    return transactionResult;
  },

  deleteNote: (id) => {
    let transactionResult;
    db.transaction((tx) => {
      tx.executeSql("delete from notes where id = ?;", [id], (tx, result) => {
        transactionResult = result;
      });
    });
    return transactionResult;
  },
};

export default Database;
