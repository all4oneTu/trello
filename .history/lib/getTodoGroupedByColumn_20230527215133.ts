import { database } from "@/appwrite"

export const getTodoGroupedByColumn = async () => { 
    const data = await database.listDocuments(
        process.env.DATABASE_ID,
        process.env.VUE_APP_COLLECTION_SEARCH_QUERY,
    )
}