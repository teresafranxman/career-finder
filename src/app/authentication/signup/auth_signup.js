import { auth } from "../../firebase/initFirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const UseSignupAuth = (email, password) => {
	const createNewUser = createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
		})
		.catch((err) => {
			console.log("Error : ", err);
		});

	return createNewUser;
};

export default UseSignupAuth;
