import { UserModel, createUser } from '../models/user.model';

const findByFilter = async (filter: any = {}, options: any = { raw: true }) => {
    try {
        return UserModel.findAll({ where: filter, raw: options.raw });
    } catch (e) {
        throw new Error(e)
    }
}

const create = async (userObj: createUser) => {
    try {
        return UserModel.create(userObj);
    } catch (e) {
        throw new Error(e)
    }
}

const findById = async (id: string) => {
    try {
        return UserModel.findByPk(id);
    } catch (e) {
        throw new Error(e)
    }
}

const findOne = async (filter: any = {}) => {
    try {
        return UserModel.findOne({ where: filter });
    } catch (e) {
        throw new Error(e)
    }
}

const update = async (filter: any, updateObj: any) => {
    try {
        return UserModel.update(updateObj, { where: filter },);
    } catch (e) {
        throw new Error(e)
    }
}

const destroy = async (filter: any) => {
    try {
        return UserModel.destroy({ where: filter });
    } catch (e) {
        throw new Error(e)
    }
}

export {
    findByFilter,
    findById,
    findOne,
    update,
    create,
    destroy
}