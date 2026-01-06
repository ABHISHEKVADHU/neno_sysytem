import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://<EC2-IP>:5000/api/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <div>
      <h2>MERN Task Manager</h2>
      {tasks.map(task => (
        <p key={task._id}>{task.title}</p>
      ))}
    </div>
  );
}

export default App;

