import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is missing");
}

// Mongo client
const client = new MongoClient(uri);

// connect once
await client.connect();

const db = client.db("drivefleetDB");

export const auth = betterAuth({
  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENTID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    },
  },

  secret: process.env.BETTER_AUTH_SECRET || "",

  baseURL:
    process.env.BETTER_AUTH_URL ||
    "http://localhost:3000",
});