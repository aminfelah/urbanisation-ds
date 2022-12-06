// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('rest_api_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
 
// export connection
export default db;