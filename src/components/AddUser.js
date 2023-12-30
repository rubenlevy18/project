import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material'

export const AddUser = (props) => {
    const [addFormData, setAddFormData] = useState({
        title: "",
        first: "",
        last: "",
        email: "",
        medium: "",
        country: "",
        city: "",
        name: ""
    });
    const [open, setOpen] = useState(false)
    const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
      };

      const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        const newContact = 
            {
                name:{
                    title: addFormData.title, first: addFormData.first, last: addFormData.last
                },
                location:{
                    street:{
                        name: addFormData.name
                    }, 
                    city: addFormData.city,
                     country: addFormData.country
                    },
                picture:{
                    medium: addFormData.medium
                },
                email: addFormData.email,
                login: {uuid: uuidv4()}
            }
        const newContacts = [...props.data, newContact];
        props.setData(newContacts);
        setOpen(false)
      };
    return (
        <>
        <Button onClick={() => setOpen(true)}>Add User</Button>
        <Dialog 
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='dialog-title' 
        ariadescribeby='dialog-description'
        >
            <DialogTitle id='dialog-title'>Add User</DialogTitle>
            <DialogContent>
                <>
                    <input
                    type="text"
                    name="title"
                    required="required"
                    placeholder="Enter a title..."
                    onChange={handleAddFormChange}/>
                    <input
                    type="text"
                    name="first"
                    required="required"
                    placeholder="Enter a name..."
                    onChange={handleAddFormChange}/>
                    <input
                    type="text"
                    name="last"
                    required="required"
                    placeholder="Enter an last..."
                    onChange={handleAddFormChange}/>
                    <input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                    onChange={handleAddFormChange}/>
                    <input
                    type="text"
                    name="medium"
                    required="required"
                    placeholder="Enter an image..."
                    onChange={handleAddFormChange}/>
                    <input
                    type="text"
                    name="country"
                    required="required"
                    placeholder="Enter an country..."
                    onChange={handleAddFormChange}/>
                    <input
                    type="text"
                    name="city"
                    required="required"
                    placeholder="Enter an city..."
                    onChange={handleAddFormChange}/>
                    <input
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Enter an street..."
                    onChange={handleAddFormChange}/>
                </>   
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={handleAddFormSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

