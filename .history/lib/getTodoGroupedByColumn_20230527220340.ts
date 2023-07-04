import { database } from "@/appwrite"

export const getTodoGroupedByColumn = async () => { 
    const data = await database.listDocuments(
        process.e,
        '647211b369e2d6ebceec',
    )
    console.log(data)
}