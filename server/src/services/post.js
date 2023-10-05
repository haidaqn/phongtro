import db from '../models';
import { v4 } from 'uuid';
import generateCode from '../utils/generateCode';
require('dotenv').config();
import generateCode from '../utils/generateCode';
import { getNumberFromStringV2 } from '../utils/common';
import { getNumberFromString } from '../utils/common';
export const getPostsService = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.Post.findAll({
                nest: true,
                include: [
                    { model: db.Image, as: 'images', attributes: ['image'] },
                    {
                        model: db.Attribute,
                        as: 'attributes',
                        attributes: ['price', 'acreage', 'published', 'hashtag'],
                    },
                    {
                        model: db.User,
                        as: 'user',
                        attributes: ['name', 'zalo', 'phone'],
                    },
                ],
                raw: true,
                attributes: ['id', 'title', 'star', 'address', 'description'],
            });
            resolve({
                err: response ? 0 : 1,
                msg: response ? 'Get all posts success' : 'Failed to get posts',
                data: { rows: response, count: response.length },
            });
        } catch (error) {
            reject(error);
        }
    });
//
export const getPostLimitService = (offset, query) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.Post.findAndCountAll({
                where: query,
                raw: true,
                nest: true,
                offset: offset * +process.env.LIMIT || 0,
                limit: +process.env.LIMIT,
                include: [
                    { model: db.Image, as: 'images', attributes: ['image'] },
                    {
                        model: db.Attribute,
                        as: 'attributes',
                        attributes: ['price', 'acreage', 'published', 'hashtag'],
                    },
                    {
                        model: db.User,
                        as: 'user',
                        attributes: ['name', 'phone'],
                    },
                ],
                attributes: ['id', 'title', 'star', 'address', 'description'],
            });
            resolve({
                err: response ? 0 : 1,
                msg: response ? 'Get all posts success' : 'Failed to get posts',
                data: response,
            });
        } catch (error) {
            reject(error);
        }
    });

export const createNewPost = (body, userId) =>
    new Promise(async (resolve, reject) => {
        try {
            const attributesId = v4();
            const imagesId = v4();
            const overviewId = v4();
            const labelCode = v4(generateCode(body.label));
            const hashtag = `${Math.round(Math.random() * 1000000)}`;
            const currentDate = new Date();
            await db.Post.create({
                id: v4(),
                title: body.title,
                labelCode,
                address: body.address || null,
                attributesId,
                categoryCode: body.code,
                description: body.description || null,
                userId: userId,
                overviewId,
                imagesId,
                areaCode: body.areaCode || null,
                priceCode: body.priceCode || null,
                provinceCode: body.provinceCode || null,
                priceNumber: body.priceNumber || null,
                areaNumber: body.areaNumber || null,
            });
            await db.Attribute.create({
                id: attributesId,
                price: `${
                    +body.priceNumber < 1
                        ? `${+body.priceNumber * 1000000} đồng/tháng`
                        : `${+body.priceNumber} triệu/tháng`
                }`,
                acreage: `${body.areaNumber} m2`,
                publish: null,
                hashtag: hashtag,
            });
            await db.Image.create({
                id: imagesId,
                image: JSON.stringify(body.images),
            });
            await db.Overview.create({
                id: overviewId,
                code: `#${hashtag}`,
                area: body.label,
                type: body.category,
                target: body.target,
                bonus: 'Tin thường',
                created: new Date(),
                expire: currentDate.setDate(currentDate.getDate() + 10),
            });
            await db.Province.findOrCreate({
                where: {
                    [Op.or]: [
                        { value: body.province.replace('Thành phố ', '') },
                        { value: body.province.replace('Tỉnh ', '') },
                    ],
                },
                defaults: {
                    code: body.province.include('Thành phố')
                        ? generateCode(body.province.replace('Thành phố ', ''))
                        : generateCode(body.province.replace('Tỉnh ', '')),
                    value: body.province.include('Thành phố')
                        ? body.province.replace('Thành phố ', '')
                        : body.province.replace('Tỉnh ', ''),
                },
            });
            await db.Label.findOrCreate({
                where: { code: labelCode },
                defaults: {
                    code: labelCode,
                    value: body.label,
                },
            });
            resolve({ status: true });
        } catch (err) {
            reject(err);
        }
    });
