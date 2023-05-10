import { connectToMainDatabase } from '@/lib/mongo/main';
import { ITodo } from '@/types/common';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

const TODOS_COLLECTION = process.env.TODOS_COLLECTION;

type Status = "success" | "error";
type StatusCode = 200 | 204 | 400 | 500;

interface IResponse<T> {
    status: Status;
    code: StatusCode;
    data?: T;
    message?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<IResponse<ITodo[]>>) {
    const { _id, action } = req.query;

    if (!ObjectId.isValid(_id)) {
        res.status(400).json({
            status: "error",
            code: 400,
            message: 'Invalid _id!'
        });
    }

    if (req.method === 'PATCH') {
        const data = req.body;

        try {
            const { db } = await connectToMainDatabase();

            if (action === "check") {
                const { newIsCompleted } = data;
    
                if (newIsCompleted === undefined) {
                    res.status(400).json({
                        status: "error",
                        code: 400,
                        message: 'Missing parameters!'
                    });
                }
    
                await db
                    .collection(TODOS_COLLECTION)
                    .updateOne(
                        { _id: new ObjectId(_id) },
                        {
                            $set: {
                                isCompleted: newIsCompleted
                            }
                        }
                    );    
            }
            else if (action === "edit") {
                const { newTitle } = data;
    
                if (newTitle === undefined) {
                    res.status(400).json({
                        status: "error",
                        code: 400,
                        message: 'Missing parameters!'
                    });
                }
    
                await db
                    .collection(TODOS_COLLECTION)
                    .updateOne(
                        { _id: new ObjectId(_id) },
                        {
                            $set: {
                                title: newTitle
                            }
                        }
                    );  
            }
            
            res.status(200).json({
                status: "success",
                code: 200,
                message: 'Successful!'
            });
        } catch (err: any) {
            console.log(err.message);
            res.status(500).json({
                status: "error",
                code: 500,
                message: err.message
            });
        }
    }
    if (req.method === 'DELETE') {
        try {
            const { db } = await connectToMainDatabase();
            
            await db
                .collection(TODOS_COLLECTION)
                .deleteOne({ _id: new ObjectId(_id) });

            res.status(204).end();
        } catch (err: any) {
            res.status(500).json({
                status: "error",
                code: 500,
                message: err.message
            });
        }
    }
}