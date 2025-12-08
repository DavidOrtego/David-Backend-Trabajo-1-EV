const { initDatabase } = require('./src/database/init');

async function run() {
    const success = await initDatabase();
    process.exit(success ? 0 : 1);
}

run();
