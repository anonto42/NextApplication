import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material"
import { useFileHandler, useInputValidation , useStrongPassword} from "6pp";
import { Navigate } from 'react-router-dom';

const AdminLogin = () => {
    
  const [isAdmin,setIsAdmin] = useState(true);

  if (isAdmin) return <Navigate to={"/admin/dashboard"} />;

  const passKey = useInputValidation("");

  const handerlogin = (e) =>{
    e.preventDefault();
    console.log("supmit")
  }


  return (
    <div style={{ backgroundImage: "linear-gradient(to right, gray , pink)"}}>
  <Container component={"main"} maxWidth="xs" sx={{display:'flex' , justifyContent:"center" , alignItems:"center",height:"100svh"}}>
      <Paper elevation={3} sx={{padding:4, display:"flex",flexDirection:"column",alignItems:"center"}} >
              <Typography variant='h5'>Admin</Typography>
              <form style={{ width: "100%" , marginTop:"1rem"}} onSubmit={handerlogin} >
                 <TextField required fullWidth value={passKey.value} onChange={passKey.changeHandler} type='password' label="Key" margin='normal' variant='outlined'  />

                 <Button sx={{marginTop:"1rem"}} fullWidth variant='contained' color='primary' type='submit' onClick={handerlogin} >Entry</Button>
              </form>
      </Paper>
  </Container>
  </div>
  )
}

export default AdminLogin