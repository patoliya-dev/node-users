import Boom from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';
import { userInstence, IUser } from '../models/user.model';

import {
    findByFilter,
    findById,
    findOne,
    update,
    create,
    destroy
} from '../services/users.service';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const userList: userInstence[] = await findByFilter({});

        return res.json({ userList });

    } catch (error) {
        return next(error.isBoom ? error : Boom.badRequest(error.messsage))
    }
};

const add = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body: any = req.body;
        const existUser = await findOne({ email: body.email });
        if (existUser) return next(Boom.notFound('User already exist with email.'));
        const user = await create(body);
        return res.json(user);

    } catch (error) {
        console.log(error)
        return next(error.isBoom ? error : Boom.badRequest(error.messsage))
    }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const user = await findById(id);
        if (!user) return next(Boom.notFound('User Not Found.'));
        return res.json(user);

    } catch (error) {
        return next(error.isBoom ? error : Boom.badRequest(error.messsage))
    }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { id } = req.params;
        const body: any = req.body;
        const user = await update({ id }, body);
        if (!user) return next(Boom.notFound('User Not Found.'));
        return res.json(user);

    } catch (error) {
        return next(error.isBoom ? error : Boom.badRequest(error.messsage))
    }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const user = await destroy({ id });
        return res.json(user);

    } catch (error) {
        return next(error.isBoom ? error : Boom.badRequest(error.messsage))
    }
};


export default {
    getAll,
    add,
    getById,
    updateById,
    deleteById
};
