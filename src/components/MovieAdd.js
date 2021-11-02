import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import useForm from './Read'

const MovieAdd = () => {

    var [value,setValue]=useForm({name:"",actor:"",actress:"",director:"",releaseyear:"",camera:"",producer:"",language:""})

    const readValues = () => {
        console.log(value)

    axios.post("https://localhost:8080/addmovie",value).then(
            (response) => {
                console.log(response.data)               //data adding api

                if(response.data.status=="success")
                {
                    alert("Successfully added")
                }
                else
                {
                    alert("Error...something went wrong")
                }

            }
        )
    }

    return (
        <div>

<TextField
                value={value.name}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="name"
                label="Enter Movie Name"/>

                <TextField
                value={value.actor}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="actor"
                label="Enter Actor"/>

                <TextField
                value={value.actress}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="actress"
                label="Enter Actress"/>

                <TextField
                value={value.director}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="director"
                label="Enter Director"/>

                <TextField
                value={value.releaseyear}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="releaseyear"
                label="Enter Release Year"/>

                <TextField
                value={value.camera}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="camera"
                label="Enter Camera"/>

                <TextField
                value={value.producer}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="producer"
                label="Enter Producer"/>

                <TextField
                value={value.language}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="language"
                label="Enter Language"/>

                <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={readValues}
                >SUBMIT</Button>

            
        </div>
    )
}

export default MovieAdd
