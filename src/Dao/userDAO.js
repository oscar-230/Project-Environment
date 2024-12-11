import { addDoc, collection, doc, getDoc, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

class userDAO {
  constructor() {
    this.collectionRef = collection(db, "user");
    this.quizCollectionRef = collection(db, "quizzes");
  }

  async getUserById(id) {
    await getDoc(doc(this.collectionRef, id))
      .then((userDoc) => {
        if (userDoc.exists()) {
          return { success: true, data: userDoc.data() };
        } else {
          return { success: false, data: null };
        }
      })
      .catch((error) => {
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
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
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

  async getUsers() {
    try {
      const querySnapshot = await getDocs(this.collectionRef);
      return querySnapshot;  // Retorna el snapshot de la consulta
    } catch (error) {
      console.error("Error fetching users: ", error);
      throw error;  // Lanzar el error para manejarlo en el componente
    }
  }
  
  // Métodos para manejar la colección de quizzes

  // Obtener un resultado de quiz por userId y quizId
  async getQuizResultByQuizId(userId, quizId) {
    const q = query(
      this.quizCollectionRef,
      where("userId", "==", userId),
      where("quizId", "==", quizId)
    );
    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        return querySnapshot.docs[0]; // Si existe el resultado, retorna el documento
      }
      return null; // Si no existe, retorna null
    } catch (error) {
      console.error("Error fetching quiz result by quizId: ", error);
    }
  }

  // Guardar o actualizar el resultado del quiz
  async saveQuizResult(userId, quizData) {
    try {
      // Verificar si ya existe un resultado para este quiz
      const existingQuizResult = await this.getQuizResultByQuizId(userId, quizData.quizId);

      if (existingQuizResult) {
        // Si ya existe, actualizamos el documento
        const docRef = doc(this.quizCollectionRef, existingQuizResult.id);
        await updateDoc(docRef, {
          ...quizData,
          updatedAt: new Date(), // Actualizamos el campo `updatedAt`
        });
        console.log("Quiz result updated with ID: ", existingQuizResult.id);
      } else {
        // Si no existe, creamos un nuevo documento
        const docRef = await addDoc(this.quizCollectionRef, {
          userId,
          ...quizData,
          createdAt: new Date(),
        });
        console.log("Quiz data saved with ID: ", docRef.id);
      }
    } catch (error) {
      console.error("Error saving quiz result: ", error);
    }
  }

  async getQuizResultsByUserId(userId) {
    const q = query(this.quizCollectionRef, where("userId", "==", userId));
    try {
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return results;
    } catch (error) {
      console.error("Error fetching quiz results by user ID: ", error);
    }
  }

  async deleteQuizResult(quizId) {
    try {
      await deleteDoc(doc(this.quizCollectionRef, quizId));
      console.log("Quiz document successfully deleted!");
    } catch (error) {
      console.error("Error deleting quiz document: ", error);
    }
  }
}

export default new userDAO();
