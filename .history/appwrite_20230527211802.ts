import { Client, Account, ID, Databases, Storage } from "appwrite";
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('647210006fa1c64237f3');

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);
