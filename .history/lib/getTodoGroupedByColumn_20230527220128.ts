import { database } from "@/appwrite"

export const getTodoGroupedByColumn = async () => { 
    const data = await database.listDocuments(
        '6472119538b3c763613a',
        process.env.COLLECTION_ID!,
    )
    console.log(data)
}