import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material'

export const EditableRow = (props) => {
    const [editFormData, setEditFormData] = useState({
        first: "",
        last: "",
        email: "",
        medium: "",
        country: "",
        city: "",
        street: ""
    });
    const [open, setOpen] = useState(false)
   

    const handleEditFormSubmit = (event) => {
        event.preventDefault()
        setOpen(false)
      };

    
    return (
        <>
        <Button onClick={() => setOpen(true)}>Edit User</Button>
        <Dialog 
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='dialog-title' 
        ariadescribeby='dialog-description'
        >
            <DialogTitle id='dialog-title'>Edit User</DialogTitle>
            <DialogContent>
                <>
                    <input
                    type="text"
                    name="first"
                    required="required"
                    placeholder="Enter a name..."
                    onChange={(e) => props.setFirst(e.target.value)}/>
                    <input
                    type="text"
                    name="last"
                    required="required"
                    placeholder="Enter a last..."
                    onChange={(e) => props.setLast(e.target.value)}/>
                    <input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                    onChange={(e) => props.setEmail(e.target.value)}/>
                    <input
                    type="text"
                    name="country"
                    required="required"
                    placeholder="Enter an country..."
                    onChange={(e) => props.setCountry(e.target.value)}/>
                    <input
                    type="text"
                    name="city"
                    required="required"
                    placeholder="Enter an city..."
                    onChange={(e) => props.setCity(e.target.value)}/>
                    <input
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Enter an street..."
                    onChange={(e) => props.setStreet(e.target.value)}/>
                </>   
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={handleEditFormSubmit} >Edit</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

