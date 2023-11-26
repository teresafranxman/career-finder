import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/initFirebase";

const AddUserDoc = async (values) => {
	try {
		const newUserDoc = doc(collection(db, "users"));
		await setDoc(newUserDoc, {
			id: newUserDoc.id,
			firstName: values.firstName,
			lastName: values.lastName,
			email: values.email,
			password: values.password,
		});

		return newUserDoc;
		
		// console.log(newUserDoc)
	} catch (err) {
		console.log("Error :", err);
	}
};

export default AddUserDoc;
