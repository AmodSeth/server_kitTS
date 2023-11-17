import mongoose, { disconnect } from "mongoose";
export async function connect_to_database() {

    try {
        await mongoose.connect(process.env.MONGO_DB || "");
    } catch (error) {
        throw new Error("Error connecting to database");
    }

}


//security step if anything goes wrong
export async function disconnect_to_database() {
    try {
        await disconnect();
    } catch (error) {
        
    }
}
