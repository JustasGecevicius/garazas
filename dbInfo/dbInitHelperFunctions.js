function insertValuesIfNoneFound(db, tableName, values, query, queriesList) {
  queriesList.push(false);
  db.get(`SELECT * FROM ${tableName};`, (_, res) => {
    if (!!res) return;
    values.forEach((val) => {
      db.run(query, val);
    });
  });
}

module.exports = {
  insertValuesIfNoneFound,
};
