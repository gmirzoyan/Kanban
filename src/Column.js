import React from 'react';
import Task from "./Task";
import {Col} from 'reactstrap'

function Column(props) {
  const {tasks, changeTaskStatus, deleteTask, column} = props
    return (

        <div>
            <Col>
                <h3><p className="text-warning">{column.title}</p></h3>
                {tasks
                    .filter(el => el.status === column.status)
                    .sort((a, b) => b.priority - a.priority)
                    .map(el => <Task key={el.id} task={el} changeTaskStatus={changeTaskStatus} deleteTask={deleteTask}/>)}
            </Col>
        </div>
    );
}

export default Column;
