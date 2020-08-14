import React, {useState} from 'react';
import {Modal, ModalFooter, Label, ModalBody, ModalHeader, Button, Input, Row, Col} from "reactstrap";


function AddTaskModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newPriority, setNewPriority] = useState(0)
    const [newStatus, setNewStatus] = useState('todo')

    const addButtonHandler = () => {
        props.addNewTask(newTitle, newPriority, newStatus)
        setIsModalOpen(false)
        setNewTitle('')
    }

return (
    <>
        <Button onClick={() => setIsModalOpen(true)}>Add New Task</Button>

        <Modal isOpen={isModalOpen}>
            <ModalHeader>Add new task</ModalHeader>
            <ModalBody>
                <Label>New Title</Label>
                <Input type='text' placeholder="add new..." value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>

                <Row>
                    <Col>
                        <Label>priority</Label>
                        <Input type='select' value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                            <option value={0}>Low</option>
                            <option value={1}>Med</option>
                            <option value={2}>High</option>
                        </Input>
                    </Col>
                    <Col>
                        <Label>status</Label>
                        <Input type='select' value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                            <option value={'todo'}>Todo</option>
                            <option value={'progress'}>Progress</option>
                            <option value={'review'}>Review</option>
                            <option value={'done'}>Done</option>
                        </Input>
                    </Col>
                </Row>

            </ModalBody>
            <ModalFooter>
                <Button onClick={addButtonHandler}>Add New Task</Button>
                {' '}
                <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </>
);
}

export default AddTaskModal;
