import jwt from 'jsonwebtoken';

//
export const verifyAccessToken = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token)
        return res.json({
            data: {
                success: false,
            },
        });
    try {
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.json({
                    data: {
                        success: false,
                    },
                });
            }
            req.user = user;
            next();
        });
    } catch (err) {
        console.error(err);
        return res.json({
            data: {
                success: false,
            },
        });
    }
};
