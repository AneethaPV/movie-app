import { AppBar, Button, TextField, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import useForm from './Read'

const Movie = () => {

    var [value,setValue]=useForm({name:"",actor:"",actress:"",director:"",releaseyear:"",camera:"",producer:"",language:""})

    const readFn = () => {
        console.log(value)
    }


    return (
        <div>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="overline" >MOVIE APP</Typography>
                </Toolbar>
            </AppBar>

            <TextField
            name="name"
            onChange={setValue}
            value={value.name}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Movie Name"/>

            <TextField
            name="actor"
            onChange={setValue}
            value={value.actor}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Actor"/>

            <TextField
            name="actress"
            onChange={setValue}
            value={value.actress}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Actress"/>

            <TextField
            name="director"
            onChange={setValue}
            value={value.director}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Director"/>

            <TextField
            type="number"
            name="releaseyear"
            onChange={setValue}
            value={value.releaseyear}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Release year"/>

            <TextField
            name="camera"
            onChange={setValue}
            value={value.camera}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Camera"/>

            <TextField
            name="producer"
            onChange={setValue}
            value={value.producer}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Producer"/>

            <TextField
            name="language"
            onChange={setValue}
            value={value.language}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Language"/>

            <Button
            onClick={readFn}
            variant="contained"
            color="secondary"
            fullWidth
            >SUBMIT</Button>

            <Typography>{value.name}</Typography>

            
        </div>
    )
}

export default Movie
