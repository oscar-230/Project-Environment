import { addDoc, collection, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";

class userDAO {
    constructor(){
        this.collectionRef = collection(db, "user")
    }

    async getUserById(id) {
        await getDoc(doc(this.collectionRef, id))
        .then((userDoc)=>{
            if(userDoc.exists()){
                return { sucess: true, data: userDoc.data() };
            } else {
                return { sucess: false, data:null };
            }
        })
        .catch((error)=>{
            console.log("Error getting document: ", error);
        });
    }

    async getUserByEmail(email) {
        const q = query(this.collectionRef, where("email", "==", email));
        try {
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                return { success: true, data: querySnapshot.docs[0].data() };
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error fetching user by email: ", error);
        }
    }

    async createUser(userData) {
        await addDoc(this.collectionRef, userData)
        .then((docRef)=>{
            console.log("Document written with ID: ", docRef.id)
        })
        .catch((error) => {
            console.error("Error adding document: ", error)
        });
    }

    async updateUser(id, userData) {
        const userRef = doc(this.collectionRef, id);
        await this.updateDoc(userRef, userData)
        .then(console.log("Document successfully updated!"))
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
    }

    async deleteUser(id) {
        await deleteDoc(doc(this.collectionRef, id))
        .then(console.log("Document successfully deleted!"))
        .catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
}

export default new userDAO();