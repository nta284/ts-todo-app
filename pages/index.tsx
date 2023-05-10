import { GetStaticProps, NextPage } from "next";
import { connectToMainDatabase } from "@/lib/mongo/main";
import { ITodo } from "@/types/common";
import Home from "@/views/home";

const TODOS_COLLECTION = process.env.TODOS_COLLECTION;

interface HomePageProps {
    todoList: ITodo[]
}

const HomePage: NextPage<HomePageProps> = ({ todoList }) => {
    return <Home />
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const { db } = await connectToMainDatabase();

        const result = await db
            .collection(TODOS_COLLECTION)
            .find()
            .toArray();

        return {
            props: {
                todoList: JSON.parse(JSON.stringify(result))
            }
        }
    } catch (err: any) {
        console.log(err.message);
        return { notFound: true };
    }
}

export default HomePage;