import db from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 } from 'uuid';
require('dotenv').config();

const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const registerService = ({ phone, password, name }) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOrCreate({
                where: { phone },
                defaults: {
                    phone,
                    name,
                    password: hashPassword(password),
                    id: v4(),
                },
            });
            // console.log(response);
            const token =
                response[1] &&
                jwt.sign({ id: response[0].id, phone: response[0].phone }, process.env.SECRET_KEY, { expiresIn: '2d' });
            resolve({
                status: token ? true : false,
                message: token ? 'Register is successfully !' : 'Phone number has been aldready used !',
                data: token
                    ? { name: response.name, phone: response.phone, token: token }
                    : { name: '', phone: '', token: '' },
            });
        } catch (error) {
            reject(error);
        }
    });

export const loginService = ({ phone, password }) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOne({
                where: { phone },
                raw: true,
            });
            const isCorrectPassword = response && bcrypt.compareSync(password, response.password);
            const token =
                isCorrectPassword &&
                jwt.sign({ id: response.id, phone: response.phone }, process.env.SECRET_KEY, { expiresIn: '2d' });
            resolve({
                status: token ? true : false,
                data: token
                    ? { name: response.name, phone: response.phone, token: token, id: response.id }
                    : { name: '', phone: '', token: '' },
                message: token
                    ? 'Login is successfully !'
                    : response
                    ? 'Password is wrong !'
                    : 'Phone number not found !',
            });
        } catch (error) {
            reject(error);
        }
    });

export const VerifyToken = (token) => {
    return new Promise(async (resolve, reject) => {
        try {
            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            });
        } catch (error) {
            reject(error);
        }
    });
};
