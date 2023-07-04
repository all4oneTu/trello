import { database } from "@/appwrite"

export const getTodoGroupedByColumn = async () => { 
    const data = await database.listDocuments(
        process.env.NEXT_PUBLIC_,
        '647211b369e2d6ebceec',
    )
    console.log(data)
}