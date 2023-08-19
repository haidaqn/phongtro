import express from 'express';
import * as insertServices from '../services';

export const insert = async (req, res) => {
    try {
        const response = await insertServices.insertService();
        return res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            err: -1,
            msg: 'Failed to register ' + error,
        });
    }
};
