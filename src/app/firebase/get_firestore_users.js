import { doc, getDoc } from "firebase/firestore";
import { db } from "./initFirebase";

export const checkIfDocExists = async (id) => {
	const documentReference = doc(db, "users", `${id}`);
	const documentSnap = await getDoc(documentReference);

	if (documentSnap.exists()) {
		console.log(documentSnap.data())
	}
	
};
