import React, {useState} from 'react';
import {Modal, ModalFooter, Label, ModalBody, ModalHeader, Button, Input, Row, Col} from "reactstrap";


function AddColumnModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const addButtonHandler = () => {
        props.addNewColumn(newTitle)
        setIsModalOpen(false)
        setNewTitle('')
    }

return (
    <>
        <Button onClick={() => setIsModalOpen(true)}>Add New Column</Button>
        <Modal isOpen={isModalOpen}>
            <ModalHeader>Add new Column</ModalHeader>
            <ModalBody>
                <Label>New Title</Label>
                <Input type='text' placeholder="add new..." value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>


            </ModalBody>
            <ModalFooter>
                <Button onClick={addButtonHandler}>Add New Column</Button>
                {' '}
                <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </>
);
}

export default AddColumnModal;
