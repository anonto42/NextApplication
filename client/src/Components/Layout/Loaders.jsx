import React from 'react'
import { Grid, Skeleton, Stack } from '@mui/material';

const Loaders = () => {
  return (
    <Grid container height={"calc(100vh - 4rem)"} >
                <Grid item sm={4} md={3} spacing={"1rem"} sx={{display:{ xs: "none" , sm: "block" }}} height={"100%"} >
                    <Skeleton variant='rectangular' height={"100vh"} />
                </Grid>
                <Grid item xs={12} sm={8} md={5} lg={6} height={"100vh"} m={"1rem"} >
                    <Stack spacing={"1rem"}>
                        {
                            Array.from({ length: 10 }, (_, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Skeleton variant='rounded' key={index}  height={"5rem"} />
                                </Grid>
                            ))
                        }
                    </Stack>
                </Grid>
                <Grid item md={4} lg={3} height={"100%"} sx={{display:{ xs: "none" , sm: "block" }}} >
                    <Skeleton variant='rectangular' height={"100vh"}/>
                </Grid>
    </Grid>
  )
}

export default Loaders