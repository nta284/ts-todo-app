import { useTodos } from "@/services/todos";
import { ITodo } from "@/types/common";
import { FC, useState, ChangeEvent, useEffect, useRef } from "react";
import { MdModeEditOutline, MdDelete, MdDone } from "react-icons/md";

interface TodoProps {
    key: string;
    data: ITodo;
}

const Todo: FC<TodoProps> = ({
    data: { _id, title, isCompleted }
}) => {
    const {
        checkTodoMutation,
        editTodoMutation,
        deleteTodoMutation
    } = useTodos();

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");

    const init = useRef<boolean>(false);

    useEffect(() => {
        if (!init.current) return;

        if (isEditing) {
            setInputValue(title);
        }
        else {
            editTodoMutation.mutate({
                _id,
                newTitle: inputValue.trim()
            });
        }
    }, [isEditing])

    return (
        <div className="w-full h-14 mt-4 bg-white flex items-center justify-between px-3 rounded-md cursor-default">
            <div>
                {
                    isEditing
                        ?
                        <input
                            type="text"
                            className="border-2 border-colorGrey6 outline-none"
                            value={inputValue}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setInputValue(e.target.value);
                            }}
                        />
                        :
                        <span>{title}</span>
                }
            </div>
            <div className="flex items-center gap-1.5">
                <button
                    onClick={() => checkTodoMutation.mutate({
                        _id,
                        currentIsCompleted: isCompleted
                    })}
                >
                    <MdDone className="text-2xl text-colorGrey6 cursor-pointer hover:scale-110 duration-75" />
                </button>
                <button
                    onClick={() => {
                        if (isEditing) {
                            if (inputValue.trim() !== "") setIsEditing(false);
                        }
                        else {
                            setIsEditing(true);
                            init.current = true;
                        }
                    }}
                >
                    <MdModeEditOutline className="text-[21px] text-colorGrey6 cursor-pointer hover:scale-110 duration-75" />
                </button>
                <button
                    onClick={() => deleteTodoMutation.mutate({ _id })}
                >
                    <MdDelete className="text-[21px] text-colorGrey6 cursor-pointer hover:scale-110 duration-75" />
                </button>
            </div>
        </div>
    )
}

export default Todo;