import * as postService from '../services/post';

export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPostsService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed to get posts' + error,
        });
    }
};

export const getPostLimit = async (req, res) => {
    try {
        const { page, ...dk } = req.query;
        const response = await postService.getPostLimitService(page, dk);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed to get posts limit' + error,
        });
    }
};

export const newPost = async (req, res) => {
    try {
        const { categoryCode, title, priceNumber, areaNumber, label, ...payload } = req.body;
        const { id } = req.user;
        if (!categoryCode || !id || !title || !priceNumber || !areaNumber || !label) {
            return res.json({
                success: false,
            });
        }
        const response = await postService.createNewPost(req.body, id);
        return res.json({ response });
    } catch (err) {
        console.log(err);
    }
};
