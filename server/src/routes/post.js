import express from 'express';
import * as postController from '../controllers/post';
import { verifyAccessToken } from '../middlewares/verifyToken';

const router = express.Router();

router.get('/all-post', postController.getPosts);
router.get('/limit', postController.getPostLimit);

router.use(verifyAccessToken);
router.post('/create-post', postController.newPost);

export default router;
