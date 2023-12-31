import db from '../models';
require('dotenv').config();
import { v4 as uuidv4, v1, v4 } from 'uuid';
import bcrypt from 'bcryptjs';
import generateCode from '../utils/generateCode';
import { getNumberFromStringV2 } from '../utils/common';
import chothuecanho from '../../data/chothuecanho.json';
import chothuematbang from '../../data/chothuematbang.json';
import nhachothue from '../../data/nhachothue.json';
import chothuephongtro from '../../data/chothuephongtro.json';
import { dataArea, dataPrice } from '../utils/data';
import { getNumberFromString } from '../utils/common';

const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(12));
const dataBody = [
    {
        body: chothuephongtro.body,
        code: 'CTPT',
    },
    {
        body: chothuematbang.body,
        code: 'CTMB',
    },
    {
        body: chothuecanho.body,
        code: 'CTCH',
    },
    {
        body: nhachothue.body,
        code: 'NCT',
    },
];
export const insertService = () =>
    new Promise((resolve, reject) => {
        try {
            const provinceCodes = [];
            const labelCodes = [];
            dataBody.forEach(async (cate) => {
                cate.body.forEach(async (item) => {
                    let postId = uuidv4();
                    let labelCode = generateCode(item?.headerData?.class?.classType).trim();
                    labelCodes?.every((item) => item?.code !== labelCode) &&
                        labelCodes.push({
                            code: labelCode,
                            value: item?.headerData?.class?.classType.trim(),
                        });
                    let attributesId = uuidv4();
                    let provinceCode = generateCode(item?.headerData?.address.split(',').slice(-1)[0]).trim();
                    provinceCodes?.every((item) => item?.code !== provinceCode) &&
                        provinceCodes.push({
                            code: provinceCode,
                            value: item?.headerData?.address.split(',')?.slice(-1)[0].trim(),
                        });
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
                        categoryCode: cate.code,
                        description: JSON.stringify(item?.mainContent?.content),
                        userId,
                        overviewId,
                        imagesId,
                        address: item?.headerData?.address,
                        areaCode: dataArea.find((area) => area.max > currentArea && area.min <= currentArea)?.code,
                        priceCode: dataPrice.find((price) => price.max > currentPrice && price.min <= currentPrice)
                            ?.code,
                        provinceCode,
                        priceNumber: getNumberFromStringV2(item.headerData.attributes.price),
                        areaNumber: getNumberFromStringV2(item.headerData.attributes.acreage),
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
            });

            provinceCodes.forEach(async (item) => {
                await db.Province.create(item);
            });

            labelCodes.forEach(async (item) => {
                await db.Label.create(item);
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
                    code: item.code,
                    value: item.value,
                });
            });
            dataArea.forEach(async (item) => {
                await db.Area.create({
                    code: item.code,
                    value: item.value,
                });
            });
            resolve('ok');
        } catch (error) {
            reject(error);
        }
    });

const categories = [
    {
        code: 'CTCH',
        value: 'Cho thuê căn hộ',
        header: 'Cho Thuê Căn Hộ Chung Cư, Giá Rẻ, Mới Nhất 2022',
        subheader:
            'Cho thuê căn hộ - Kênh đăng tin cho thuê căn hộ số 1: giá rẻ, chính chủ, đầy đủ tiện nghi. Cho thuê chung cư với nhiều mức giá, diện tích cho thuê khác nhau.',
    },
    {
        code: 'CTMB',
        value: 'Cho thuê mặt bằng',
        header: 'Cho Thuê Mặt Bằng, Cho Thuê Văn Phòng, Cửa Hàng, Kiot, Mới Nhất 2022',
        subheader:
            'Cho thuê mặt bằng - Kênh đăng tin cho thuê mặt bằng, cho thuê cửa hàng, cho thuê kiot số 1: giá rẻ, mặt tiền, khu đông dân cư, phù hợp kinh doanh.',
    },
    {
        code: 'CTPT',
        value: 'Cho thuê phòng trọ',
        header: 'Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất 2022',
        subheader:
            'Cho thuê phòng trọ - Kênh thông tin số 1 về phòng trọ giá rẻ, phòng trọ sinh viên, phòng trọ cao cấp mới nhất năm 2022. Tất cả nhà trọ cho thuê giá tốt nhất tại Việt Nam.',
    },
    {
        code: 'NCT',
        value: 'Nhà cho thuê',
        header: 'Cho Thuê Nhà Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất 2022',
        subheader:
            'Cho thuê nhà nguyên căn - Kênh đăng tin cho thuê nhà số 1: giá rẻ, chính chủ, miễn trung gian, đầy đủ tiện nghi, mức giá, diện tích cho thuê khác nhau.',
    },
];

export const createCategory = () =>
    new Promise(async (resolve, reject) => {
        try {
            await db.Category.bulkCreate(categories);
            resolve('ok');
        } catch (err) {
            reject(err);
        }
    });
