
export interface IAddTodo {
    newTodoTitle: string;
}

export interface ICheckTodo {
    _id: string;
    currentIsCompleted: boolean;
}

export interface IEditTodo {
    _id: string;
    newTitle: string;
}

export interface IDeleteTodo {
    _id: string;
}