
interface Board {
    columns : Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "inprogress" | "done"

interface Column { 
    id: TypedColumn,
    todos: Todo[]

}

interface Todo extends{ 
    $id: string;
    $created: string;
    title: string;
    status: TypedColumn;
    image?: string;
}

interface Image {
    bucketId: string;
    fileId: string;
}