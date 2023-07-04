import { database } from "@/appwrite"

export const getTodoGroupedByColumn = async () => { 
    const data = await database.listDocuments(
        pr,
        '647211b369e2d6ebceec',
    )
    console.log(data)
}