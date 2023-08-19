import db from '../models';

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
export const getPostLimitService = (offset) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.Post.findAndCountAll({
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
                        attributes: ['name', 'zalo', 'phone'],
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
