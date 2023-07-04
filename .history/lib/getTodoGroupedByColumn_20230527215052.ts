import { database } from "@/appwrite"

export const getTodoGroupedByColumn = async () => { 
    const data = await database.listDocuments('60f9c5b0d5c3f', '60f9c5b0d5c4a');
}