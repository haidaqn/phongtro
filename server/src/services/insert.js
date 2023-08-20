import db from '../models';
require('dotenv').config();
import { v4 as uuidv4, v1, v4 } from 'uuid';
import bcrypt from 'bcryptjs';
import generateCode from '../utils/generateCode';

import chothuecanho from '../../data/chothuecanho.json';
// import chothuematbang from '../../data/chothuematbang.json';
// import nhachothue from '../../data/nhachothue.json';
// import chothuephongtro from '../../data/chothuephongtro.json';
import { dataArea, dataPrice } from '../utils/data';
import { getNumberFromString } from '../utils/common';

const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(12));
const dataBody = chothuecanho.body;

export const insertService = () =>
    new Promise((resolve, reject) => {
        try {
            dataBody.forEach(async (item) => {
                let postId = uuidv4();
                let labelCode = generateCode(item?.headerData?.class?.classType);
                let attributesId = uuidv4();
                let userId = uuidv4();
                let overviewId = uuidv4();
                let imagesId = uuidv4();
                let currentArea = getNumberFromString(item?.headerData?.attributes?.acreage);
                let currentPrice = getNumberFromString(item?.headerData?.attributes?.price);
                // post db
                await db.Post.create({
                    id: postId,
                    title: item?.headerData?.title,
                    star: item?.headerData?.star,
                    labelCode,
                    attributesId,
                    categoryCode: 'CTCH',
                    description: JSON.stringify(item?.mainContent?.content),
                    userId,
                    overviewId,
                    imagesId,
                    address: item?.headerData?.address,
                    areaCode: dataArea.find((area) => area.max > currentArea && area.min <= currentArea)?.code,
                    priceCode: dataPrice.find((price) => price.max > currentPrice && price.min <= currentPrice)?.code,
                });
                // attributes db
                await db.Attribute.create({
                    id: attributesId,
                    price: item?.headerData?.attributes?.price,
                    acreage: item?.headerData?.attributes?.acreage,
                    publish: item?.headerData?.attributes?.publish,
                    hashtag: item?.headerData?.attributes?.hashtag,
                });
                // image db
                await db.Image.create({
                    id: imagesId,
                    image: JSON.stringify(item?.images),
                });
                // label db
                await db.Label.findOrCreate({
                    where: { code: labelCode },
                    defaults: {
                        code: labelCode,
                        value: item?.headerData?.class?.classType,
                    },
                });
                // overview db
                await db.Overview.create({
                    id: overviewId,
                    code: item?.overview?.content.find((i) => i.name === 'Mã tin:')?.content,
                    area: item?.overview?.content.find((i) => i.name === 'Khu vực:')?.content,
                    type: item?.overview?.content.find((i) => i.name === 'Loại tin rao:')?.content,
                    target: item?.overview?.content.find((i) => i.name === 'Đối tượng thuê:')?.content,
                    bonus: item?.overview?.content.find((i) => i.name === 'Gói tin:')?.content,
                    created: item?.overview?.content.find((i) => i.name === 'Ngày đăng:')?.content,
                    expire: item?.overview?.content.find((i) => i.name === 'Ngày hết hạn:')?.content,
                });
                // user db
                await db.User.create({
                    id: userId,
                    name: item?.contact?.content.find((i) => i.name === 'Liên hệ:')?.content,
                    password: hashPassword('123456'),
                    phone: item?.contact?.content.find((i) => i.name === 'Điện thoại:')?.content,
                    zalo: item?.contact?.content.find((i) => i.name === 'Zalo')?.content,
                });
            });
            resolve('Insert Successfully!');
        } catch (error) {
            console.log(error);
        }
    });

export const createUserService = () => {
    new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                id: userId,
                name: item?.contact?.content.find((i) => i.name === 'Liên hệ:')?.content,
                password: hashPassword('123456'),
                phone: item?.contact?.content.find((i) => i.name === 'Điện thoại:')?.content,
                zalo: item?.contact?.content.find((i) => i.name === 'Zalo')?.content,
            });
        } catch (error) {
            reject(error);
        }
    });
};

export const createPricesAndArea = () =>
    new Promise((resolve, reject) => {
        try {
            dataPrice.forEach(async (item) => {
                await db.Price.create({
                    id: uuidv4(),
                    code: item.code,
                    value: item.value,
                });
            });
            dataArea.forEach(async (item) => {
                await db.Area.create({
                    id: uuidv4(),
                    code: item.code,
                    value: item.value,
                });
            });
            resolve('ok');
        } catch (error) {
            reject(error);
        }
    });
