import { database } from "@/appwrite"

export const getTodoGroupedByColumn = async () => { 
    const data = await database.listDocuments(
        '6472119538b3c763613a',
        '647211b369e2d6ebceec',
    )
    console.log(data)
}