import { auth } from "../initFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "@/app/lib/features/users/usersSlice";
import { useEffect } from "react";
import { checkIfDocExists } from "../get_firestore_users";

const AuthStateListener = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscriber = onAuthStateChanged(auth, (user) => {
			if (user) {
                const { uid, displayName, email, photoURL } = user;
                
                dispatch(setUser(user))

			} else {
				router.push("/login");
			}
		});
	}, [dispatch, router]);
};

export default AuthStateListener;
