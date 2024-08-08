import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
    const [name, setName] = useState('');
    const [subject1, setSubject1] = useState('');
    const [subject2, setSubject2] = useState('');
    const [subject3, setSubject3] = useState('');
    const [message, setMessage] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://shivansh-raheja.42web.io/student_app/add_student.php', new URLSearchParams({
            name,
            subject1,
            subject2,
            subject3
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        const { status, message, result } = response.data;
        setMessage(message);
        if (status === 'success') {
            setResult(result);
        } else {
            setResult(null);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Personality Trait Finder</h1>
            <form onSubmit={handleSubmit} className="card p-4">
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="subject1">Subject 1 Marks</label>
                    <input
                        type="number"
                        id="subject1"
                        className="form-control"
                        value={subject1}
                        onChange={(e) => setSubject1(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="subject2">Subject 2 Marks</label>
                    <input
                        type="number"
                        id="subject2"
                        className="form-control"
                        value={subject2}
                        onChange={(e) => setSubject2(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="subject3">Subject 3 Marks</label>
                    <input
                        type="number"
                        id="subject3"
                        className="form-control"
                        value={subject3}
                        onChange={(e) => setSubject3(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {message && <p className="mt-3 alert alert-info">{message}</p>}
            {result && (
                <div className="mt-5">
                    <h2 className="mb-4 text-center">Result</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Subject 1</th>
                                <th>Subject 2</th>
                                <th>Subject 3</th>
                                <th>Average</th>
                                <th>Grade</th>
                                <th>Personality Trait</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{result.name}</td>
                                <td>{result.subject1}</td>
                                <td>{result.subject2}</td>
                                <td>{result.subject3}</td>
                                <td>{result.average_marks}</td>
                                <td>{result.grade}</td>
                                <td>{result.trait}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            <footer className="mt-5 text-center">
                <p>Copyright &copy; Shivansh Raheja - 2024</p>
                <div>
                    <a href="https://facebook.com" className="mx-2"><i className="fab fa-facebook"></i> Facebook</a>
                    <a href="https://twitter.com" className="mx-2"><i className="fab fa-twitter"></i> Twitter</a>
                    <a href="https://linkedin.com" className="mx-2"><i className="fab fa-linkedin"></i> LinkedIn</a>
                </div>
            </footer>
        </div>
    );
};

export default App;
