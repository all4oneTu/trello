
import { database } from "@/appwrite"

export const getTodoGroupedByColumn = async () => { 
    const data = await database.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_COLLECTION_ID!,
    )
    const todos = data.documents
    const columns = todos.reduce((acc, todo) => {
        if (!acc.get(todo.status)) {
            acc.set(todo.status, {
                id: todo.status,
                todos:[]
            })
        }
        acc.get(todo.status)!.todos.push({
            $id: todo.$id,
            $created: todo.$created,
            title: todo.title,
            status: todo.status,
            ...(todo.image && { image:JSON.parse( todo.image)  })
        })
        return acc
    }, new Map<TypedColumn, Column>())
    //if colums doesnt have todo, inprogress, done, add them with empty todos
    const columnTypes = ["todo", "inprogress", "done"] as TypedColumn[]
    for (const columnType of columnTypes) {
        if (!columns.get(columnType)) {
            columns.set(columnType, {
                id: columnType,
                todos:[]
            })
        }
    }
    console.log("columns", columns)
    //sort by colums type
    const sortColumns = new Map(
       Array.from(columns.entries()).sort((a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0]))
    )
    const board: Board = {
        columns =
    }
}