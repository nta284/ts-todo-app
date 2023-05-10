import { useTodos } from "@/services/todos";
import { ChangeEvent, FC, useState } from "react";
import Column from "./components/Column";

const Home: FC = () => {
    const {
        isLoading,
        isFetching,
        isError,
        error,
        todoList,
        addTodoMutation
    } = useTodos();

    const [inputValue, setInputValue] = useState<string>("");

    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            addTodoMutation.mutate({ newTodoTitle: inputValue.trim() });

            setInputValue("");
        }
    }

    return (
        <div className="bg-colorPrimary min-h-screen">
            <div className="w-3/5 flex flex-col items-center gap-8 py-16 mx-auto">
                <div className="w-full h-14 pl-6 pr-1.5 py-1.5 border border-colorGrey5 rounded-full bg-white flex">
                    <input
                        className="outline-none w-full h-full bg-transparent grow"
                        type="text"
                        placeholder="Nhập gì đó..."
                        value={inputValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setInputValue(e.target.value);
                        }}
                    />
                    <button
                        className="bg-colorPrimary text-white font-medium px-6 shrink-0 rounded-full"
                        onClick={handleAddTodo}
                    >Thêm</button>
                </div>
                {
                    isLoading
                        ?
                        <span className="text-center italic text-white">Loading...</span>
                        :
                        <div className="w-full flex gap-8">
                            <Column
                                heading="Chưa hoàn thành"
                                data={todoList}
                                bgColor="bg-colorRed2"
                                isCompleted={false}
                            />
                            <Column
                                heading="Đã hoàn thành"
                                data={todoList}
                                bgColor="bg-colorGreen1"
                                isCompleted={true}
                            />
                        </div>
                }
            </div>
        </div>
    )
}

export default Home;