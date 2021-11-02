import { Button, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const MovieView = () => {

    var[courseData,changeDatas]=useState([])
    var[isloading,loadstatusChange]=useState(false)

    useEffect(  ()=>{

        loadData()
          
    },[])

    const loadData =() =>{
        loadstatusChange(isloading=true)

        axios.get("https://localhost:8080/getmovies").then(
                (response)=> {
                    console.log(response.data)

                    changeDatas(
                            courseData=response.data
                    )
                    loadstatusChange(isloading=false)
                }
            )
    }


    return (
        <div>

<table style={{marginTop:10}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Actor</TableCell>
                        <TableCell>Actress</TableCell>
                        <TableCell>Director</TableCell>
                        <TableCell>Released Year</TableCell>
                        <TableCell>Camera</TableCell>
                        <TableCell>Producer</TableCell>
                        <TableCell>Language</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {courseData.map((value,index)=>{
                        return<TableRow>
                            <TableCell>{value._id}</TableCell>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.actor}</TableCell>
                            <TableCell>{value.actress}</TableCell>
                            <TableCell>{value.director}</TableCell>
                            <TableCell>{value.releaseyear}</TableCell>
                            <TableCell>{value.camera}</TableCell>
                            <TableCell>{value.producer}</TableCell>
                            <TableCell>{value.languaue}</TableCell>

                        </TableRow>
                    })}
                </TableBody>
            </table>

            
        </div>
    )
}

export default MovieView
