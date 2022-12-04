import { Sequelize } from "sequelize";

const db = new Sequelize('crud', 'root', 'admin',{
    host: 'localhost',
    dialect:'mysql'
});

export default db;