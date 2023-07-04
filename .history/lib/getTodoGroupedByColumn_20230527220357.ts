import { database } from "@/appwrite"

export const getTodoGroupedByColumn = async () => { 
    const data = await database.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        pr,
    )
    console.log(data)
}