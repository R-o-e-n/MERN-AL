import { useGetTasksQuery } from '../store/apis/taskApi';
import Spinner from './Spinner';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { data: tasks = [], isLoading, isError, error } = useGetTasksQuery();

    if (isLoading) return <Spinner />;

    if (isError) {
        console.error('Gabim gjatë marrjes së detyrave:', error);
        return <p className="error">Error marrjen e taskeve.</p>;
    }

    return (
        <section className='content'>
            {tasks.length > 0 ? (
                <div className='tasks'>
                    {tasks.map(task => (
                        <TaskItem key={task._id} task={task} />
                    ))}
                </div>
            ) : (
                <p>Ska taske.</p>
            )}
        </section>
    );
};

export default TaskList;