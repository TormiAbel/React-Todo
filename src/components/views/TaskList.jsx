import { DeleteOutlined } from "@ant-design/icons";
import { Input, Button, Checkbox, List, Col, Row, Space, Divider } from "antd";
import produce from "immer";
import { useEffect, useState } from "react";


export default function TaskList() {
    const [tasks, setTasks] = useState([
        {id: 1, title: "Task 1", marked_as_complete: false},
        {id: 2, title: "Task 2", marked_as_complete: true},
    ]);

    useEffect(() => {
        fetch("https://demo2.z-bit.ee/tasks", {
            method: "GET",
            headers: new Headers({
                'Authorization': 'Bearer ' + ('FiZSmCGT9ojsLedpxOzx6DZOyHPlRsL0'), 
                'Content-Type': 'application/json'
            }), 
        }).then(res => res.json())
        .then(res => setTasks(res))
    }, [])

    const handleNameChange = (task, event) => {
        console.log(event) 
        const newTasks = produce(tasks, draft => {
            const index = draft.findIndex(t => t.id === task.id);
            draft[index].title = event.target.value;
        });
        setTasks(newTasks);
    };

    const handleCompletedChange = (task, event) => {
        console.log(event)
        const newTasks = produce(tasks, draft => {
            const index = draft.findIndex(t => t.id === task.id);
            draft[index].marked_as_complete = event.target.checked;
        });
        setTasks(newTasks);
    };

    const handleAddTask = () => {
        const newTask = {
            id: Math.random(),
            title: "lmao",
            marked_as_complete: false
        };
        setTasks(produce(tasks, draft => {
            draft.push({newTask});
        }));

        fetch("https://demo2.z-bit.ee/tasks", {
            method: "POST",
            body: JSON.stringify(newTask),
            headers: new Headers({
                'Authorization': 'Bearer ' + ('FiZSmCGT9ojsLedpxOzx6DZOyHPlRsL0'), 
                'Content-Type': 'application/json'
            }), 
        }).then(res => res.json())
        .then(res => console.log(res))
    };

    const handleDeleteTask = (task) => {
        setTasks(produce(tasks, draft => {
            const index = draft.findIndex(t => t.id === task.id);
            draft.splice(index, 1);
        }));
    };

    return (
        <Row type="flex" justify="center" style={{minHeight: '100vh', marginTop: '6rem'}}>
            <Col span={12}>
                <h1>Task List</h1>
                <Button onClick={handleAddTask}>Add Task</Button>
                <Divider />
                <List
                    size="small"
                    bordered
                    dataSource={tasks}
                    renderItem={(task) => <List.Item key={task.id}>
                        <Row type="flex" justify="space-between" align="middle" style={{width: '100%'}}>
                            <Space>
                                <Checkbox checked={task.marked_as_complete} onChange={(e) => handleCompletedChange(task, e)} />
                                <Input value={task.title} onChange={(event) => handleNameChange(task, event)} />
                            </Space>
                            <Button type="text" onClick={() => handleDeleteTask(task)}><DeleteOutlined /></Button>
                        </Row>
                    </List.Item>}
                />
            </Col>
        </Row>
    )
}