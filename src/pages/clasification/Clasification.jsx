import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import userDAO from '../../Dao/userDAO';
import useQuizStore from '../../Stores/use-quiz-store'; // Usamos el store para cargar los resultados del quiz
import "../../Styles/Clasification.css";

const Clasification = ({ onLogout }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { loadQuizResults } = useQuizStore(); // Para cargar los resultados de los quizzes
    const [quizResults, setQuizResults] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Obtener todos los usuarios
                const querySnapshot = await userDAO.getUsers();
                const usersList = querySnapshot.docs.map(doc => doc.data());

                // Filtrar duplicados por email
                const uniqueUsers = Array.from(
                    new Map(usersList.map(user => [user.email, user])).values()
                );

                setUsers(uniqueUsers);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users: ", error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchQuizResults = async () => {
            for (const user of users) {
                const results = await userDAO.getQuizResultsByUserId(user.uid);
                const formattedResults = results.reduce((acc, result) => {
                    acc[result.quizId] = result.score; // Guardamos el puntaje del quiz
                    return acc;
                }, {});
                setQuizResults(prevResults => ({
                    ...prevResults,
                    [user.uid]: formattedResults
                }));
            }
        };

        if (users.length > 0) {
            fetchQuizResults();
        }
    }, [users]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar onLogout={onLogout} />
            <div className="table-container">
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Puntajes de los Quizzes</th> {/* Columna de puntajes */}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {/* Mostrar puntajes de los quizzes */}
                                        {quizResults[user.uid] ? (
                                            Object.keys(quizResults[user.uid]).map((quizId) => (
                                                <div key={quizId}>
                                                    Quiz {quizId}: {quizResults[user.uid][quizId]} pts
                                                </div>
                                            ))
                                        ) : (
                                            <span>No hay resultados</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <footer className='footer-cla'>

                <Footer />

            </footer>
        </div>
    );
};

export default Clasification;
