import { database } from "@/appwrite"

export const getTodoGroupedByColumn = async () => { 
    const data = await database.listDocuments(
        process.env.DATABASE_ID!,
        process.env.COLLECTION_ID,
    )
}