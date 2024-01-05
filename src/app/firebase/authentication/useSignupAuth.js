import { auth } from "../initFirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../initFirebase";

const UseSignupAuth = (email, password, values) => {
	const createNewUser = createUserWithEmailAndPassword(auth, email, password)
		.then(async (userCredential) => {
			const id = userCredential.user.uid;

			if (id != null) {
				const addNewUser = await setDoc(doc(db, "users", id), {
					firstName: values.firstName,
					lastName: values.lastName,
					email: values.email,
					password: values.password,
				});

				return addNewUser;
			}
		})
		.catch((err) => {
			console.log("Error : ", err);
		});

	return createNewUser;
};

export default UseSignupAuth;
