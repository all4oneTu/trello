import { database } from "@/appwrite"

export const getTodoGroupedByColumn = async () => { 
    const data = await database.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        '647211b369e2d6ebceec',
    )
    console.log(data)
}