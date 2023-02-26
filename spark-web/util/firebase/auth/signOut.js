import firebase_app from "../config";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signOut() {
    try {
        await signOut(auth);
        console.log("User signed out successfully");
    } catch (e) {
        console.log(e);
    }

    return { result, error };
}