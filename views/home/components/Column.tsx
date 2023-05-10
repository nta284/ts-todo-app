import { ITodo } from "@/types/common";
import { FC } from "react";
import Todo from "./Todo";

interface ColumnProps {
    heading: string;
    data: ITodo[] | undefined;
    bgColor: string;
    isCompleted: boolean;
}

const Column: FC<ColumnProps> = ({
    heading,
    data,
    bgColor,
    isCompleted
}) => {
    return (
        <div className={`basis-1/2 h-fit p-4 rounded-lg ${bgColor}`}>
            <div className="text-lg font-medium text-white">
                {heading}
            </div>
            <div>
                {data?.filter(todo => todo.isCompleted === isCompleted).map((todo) => (
                    <Todo
                        key={todo._id}
                        data={todo}
                    />
                ))}
            </div>
        </div>
    )
}

export default Column;