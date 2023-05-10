import { ITodo } from "@/types/common";
import { IAddTodo, ICheckTodo, IDeleteTodo, IEditTodo } from "@/types/todos";
import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "react-query";

export class TodosService {
    static async getTodos(): Promise<ITodo[]> {
        const result = await axios.get("/api/todos");
        return result.data.data;
    }
    
    static async addTodo({ newTodoTitle }: IAddTodo): Promise<void> {
        await axios.post(
            "/api/todos",
            {
                title: newTodoTitle,
                isCompleted: false
            }
        )
    }

    static async checkTodo({ _id, currentIsCompleted }: ICheckTodo): Promise<void> {
        await axios.patch(
            `/api/todos/${_id}?action=check`,
            {
                newIsCompleted: !currentIsCompleted
            }
        );
    }

    static async editTodo({ _id, newTitle }: IEditTodo): Promise<void> {
        await axios.patch(
            `/api/todos/${_id}?action=edit`,
            {
                newTitle
            }
        );
    }

    static async deleteTodo({ _id }: IDeleteTodo): Promise<void> {
        await axios.delete(`/api/todos/${_id}`);
    }
}

export const useTodos = () => {
    const queryClient = useQueryClient();
    const {
        isLoading,
        isFetching,
        isError,
        error,
        data: todoList
    } = useQuery('todos', TodosService.getTodos);

    const addTodoMutation = useMutation(TodosService.addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    })

    const checkTodoMutation = useMutation(TodosService.checkTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    })

    const editTodoMutation = useMutation(TodosService.editTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    })

    const deleteTodoMutation = useMutation(TodosService.deleteTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    })

    return {
        isLoading,
        isFetching,
        isError,
        error,
        todoList,
        addTodoMutation,
        checkTodoMutation,
        editTodoMutation,
        deleteTodoMutation
    }
}