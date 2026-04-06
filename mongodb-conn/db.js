const { MongoClient } = require("mongodb");
require("dotenv").config();

const URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;

let client = null;
let db = null;

// connectToDB => establish the connection
const connectToDB = async () => {
    try {
        if (!URI || !DB_NAME) {
            throw new Error("Missing DB_URI or DB_NAME in environment variables.");
        }

        if (db) return db; // reuse existing connection

        client = new MongoClient(URI);
        await client.connect();
        db = client.db(DB_NAME);

        console.log("MongoDB connected successfully.");
        return db;
    } catch (error) {
        console.error("connectToDB error:", error.message);
        throw error;
    }
};

// getDatabase => return db instance
const getDatabase = async () => {
    try {
        if (!db) {
            return await connectToDB();
        }
        return db;
    } catch (error) {
        console.error("getDatabase error:", error.message);
        throw error;
    }
};

module.exports = { connectToDB, getDatabase };