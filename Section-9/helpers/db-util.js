import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    constructConnection(
      process.env.MONGO_CONN_STRING,
      process.env.MONGO_USERNAME,
      process.env.MONGO_PASSWORD
    ),
    { useUnifiedTopology: true }
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}

function constructConnection(connectionString, username, password) {
  connectionString = connectionString.replace("<username>", username);
  connectionString = connectionString.replace("<password>", password);

  return connectionString;
}
