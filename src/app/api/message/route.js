import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  //   const url = "mongodb://127.0.0.1:27017/Demo";
  const url =
    "mongodb+srv://hj201812:fWcyYFPVaNuPmsPi@contactus-profile.d9fjtap.mongodb.net";
  const client = new MongoClient(url);
  try {
    let body = await request.json();
    const database = client.db("profiles");
    const table = database.collection("messages");
    const result = await table.insertOne(body);
    return NextResponse.json(result);
  } finally {
    await client.close();
  }
}
