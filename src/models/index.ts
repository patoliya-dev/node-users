
import { Sequelize } from 'sequelize'

const DB_URL: string = process.env.DB_URL || '';
export const sequelize = new Sequelize(DB_URL, {
    dialect: "mysql",
});

sequelize.authenticate()