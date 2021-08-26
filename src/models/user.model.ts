import { Model, DataTypes } from "sequelize";
import { sequelize } from './index';

export interface IUser extends Model {
    name: string;
    email: string;
    password: string;
}

export type createUser = {
    name: string;
    email: string;
    password: string;
}

export type userInstence = {
    id?: number;
    name: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
}

export const UserModel = sequelize.define<IUser>("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
});

// (async () => {
//     await UserModel.sync({ alter: true })
// })()
