import { collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../firebase/initFirebase";

export const getAllDocs = async () => {
	const querySnapShot = await getDocs(collection(db, "users"));
	querySnapShot.forEach((doc) => {
		console.log(doc.id, "=> ", doc.data());
	});
};

export const getDocument = async (id) => {
	const usersRef = doc(db, "users", `${id}`);
	const docSnap = await getDoc(usersRef);

	if (docSnap.exists()) {
		console.log("Document data exists: ", docSnap.data());
	} else {
		console.log("Document does not exist");
	}
};
