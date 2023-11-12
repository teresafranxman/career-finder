import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../firebase/initFirebase";

export const getAllDocs = async () => {
	const querySnapShot = await getDocs(collection(db, "users"));
	querySnapShot.forEach((doc) => {
		console.log(doc.id, "=> ", doc.data());
	});
};


export const getOneDoc = async (id) => {
	const docRef = doc(db, "users", id)
	const docSnap = await getDoc(docRef)

	if (docSnap.exists()) {
		console.log("Document exists: ", docSnap.data())
	} else {
		console.log("DOC DOES NOT EXIST!")
	}
}