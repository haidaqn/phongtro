import express from 'express';
import * as postController from '../controllers/post';

const router = express.Router();

router.get('/all-post', postController.getPosts);
router.get('/limit', postController.getPostLimit);

export default router;
