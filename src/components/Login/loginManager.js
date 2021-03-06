import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}
export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider).then(result => {
        const { displayName, photoURL, email } = result.user;
        const signInUser = {
            isSignIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            success: true,
        }
        storeAuthToken();
        return signInUser;
    })
        .catch(err => {
            console.log(err)
            console.log(err.message)
        })
}
const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
        sessionStorage.setItem('token', idToken);
      }).catch(function(error) {
        // Handle error
      });
}
export const signOutAll = () => {
    return firebase.auth().signOut().then(result => {
        const signOutUser = {
            isSignIn: false,
            name: '',
            email: '',
            password: '',
            photo: '',
            error: '',
            success: false
        }
        return signOutUser;
    })
        .catch(err => {
            console.log(err)
            console.log(err.message)
        })
}