import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    constructConnection(
      process.env.MONGO_CONN_STRING,
      process.env.MONGO_USERNAME,
      process.env.MONGO_PASSWORD
    )
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  return await db.collection(collection).insertOne(document);
}

function constructConnection(connectionString, username, password) {
  console.log(connectionString, username, password);
  connectionString = connectionString.replace("<username>", username);
  connectionString = connectionString.replace("<password>", password);

  return connectionString;
}
