import { auth } from "../../firebase.config";
import { create } from "zustand";
import { 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => ({
    user: null,
    loading: true,
    error: null,

    loginGoogleWithPopUp: async () => {
        await signInWithPopup(auth, provider)
        .catch((error) => {
            console.log(error);
        });
    },

    logout: async() => {
        await signOut(auth)
        .then(()=>{
            set({ user: null });
        })  
        .catch((error) => {
            console.log(error);
        });
    },

    observeAuthState: () =>{
        set({ loading: true });
        onAuthStateChanged(auth, (user) =>{
            if(user) {
                set({ user, loading: false });
            } else {
                set({user: null, loading: false});
            }
        });
    },

    registerWithEmail: async (email, password) => {
        set({ loading: true });
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            set({ user: userCredential.user, loading: false, error: null });
        })
        .catch((error) => {
            set({ error: error.message, loading: false });
        });
    },

    loginWithEmail: async (email, password) => {
        set({ loading: true });
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            set({ user: userCredential.user, loading: false, error: null });
        })
        .catch((error) => {
            set({ error: error.message, loading: false });
        });
    }
}));

export default useAuthStore;
