import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://wisnuprsj:ArungJeram23!@mern.7ysrk.mongodb.net/nextjs?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  await db.collection(collection).insertOne(document);
}
