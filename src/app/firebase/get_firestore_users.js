import { collection, getDocs } from "firebase/firestore";
import { db } from "./initFirebase";

export const getAllDocs = async () => {
	const querySnapShot = await getDocs(collection(db, "users"));
	querySnapShot.forEach((doc) => {
		console.log(doc.id, "=> ", doc.data());
	});
};

