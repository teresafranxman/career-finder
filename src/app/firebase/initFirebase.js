import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: NEXT_PUBLIC_API_KEY,
	authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
	databaseURL: NEXT_PUBLIC_DATABASE_URL,
	projectId: NEXT_PUBLIC_PROJECT_ID,
	storageBucket: NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: NEXT_PUBLIC_APP_ID,
	measurementId: NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize firebase app
const app = initializeApp(firebaseConfig);

export default app;