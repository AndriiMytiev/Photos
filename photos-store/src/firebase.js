// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCqxxM93Ku6ti-S_RklKaW34mB_1O7wTtE',
	authDomain: 'abc-photos-bdafe.firebaseapp.com',
	projectId: 'abc-photos-bdafe',
	storageBucket: 'abc-photos-bdafe.appspot.com',
	messagingSenderId: '675772661486',
	appId: '1:675772661486:web:92478644c3ba7c1f15fdff'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);