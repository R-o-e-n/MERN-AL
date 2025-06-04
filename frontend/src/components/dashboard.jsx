import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import TaskForm from './TaskForm';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (!user) navigate("/login");
    }, [user, navigate])

    return (
        <>
            <section className='heading'>
                <h1>Miresevini {user && user.name}</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className='btn' onClick={() => navigate('/alltasks')}>Shih Tasket</button>
                </div>
            </section>

            <TaskForm />
        </>
    )
}

export default Dashboard