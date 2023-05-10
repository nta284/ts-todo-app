import { connectToMainDatabase } from '@/lib/mongo/main';
import { ITodo } from '@/types/common';
import type { NextApiRequest, NextApiResponse } from 'next';

const TODOS_COLLECTION = process.env.TODOS_COLLECTION;

type Status = "success" | "error";
type StatusCode = 200 | 201 | 400 | 500;

interface IResponse<T> {
    status: Status;
    code: StatusCode;
    data?: T;
    message?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<IResponse<ITodo[]>>) {
    if (req.method === 'GET') {
        try {
            const { db } = await connectToMainDatabase();

            const result = await db
                .collection(TODOS_COLLECTION)
                .find()
                .toArray();

            res.status(200).json({
                status: "success",
                code: 200,
                data: result
            });
        } catch (err: any) {
            res.status(500).json({
                status: "error",
                code: 500,
                message: err.message
            });
        }
    }
    if (req.method === 'POST') {
        const data = req.body;

        try {
            const { db } = await connectToMainDatabase();

            const result = await db
                .collection(TODOS_COLLECTION)
                .insertOne(data);

            res.status(201).json({
                status: "success",
                code: 201,
                message: 'Successful!'
            });
        } catch (err: any) {
            res.status(500).json({
                status: "error",
                code: 500,
                message: err.message
            });
        }
    }
}