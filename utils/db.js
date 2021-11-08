const connection = require('../config/db_config'); // DB credentials

const initializeDatabase = async () => {
    try {
        // Check connection
        await connection.authenticate();
        await connection.sync();
        console.log('DB connection is successful');
    } catch (error) {
        throw new Error(`DB connection error: ${error}`);
    }
};


module.exports = initializeDatabase;
