const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'Pilotos.db'
    },
    useNullAsDefault: true
});

exports.db = db;