import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import CircleIcon from '@mui/icons-material/Circle';
import { Typography } from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    flexGrow: {
      flex: '1',
    },
    card: {
backgroundColor: "white",
'&:hover': {
    backgroundColor:"#c1e2f3  "
}
    },

    })

const Component = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`
const List1 = styled.div`
display: flex;
`
const List2 = styled.div`
display: flex;

`
const List3 = styled.div`
display: flex;

`
const Field = styled.div`
width:80px;
`
const Field2 = styled.div`
width:200px;
`
const Details = styled.div`
font-weight: bold;
`
const FinalDiv = styled.div`
display: flex;
`

const LeftBar = styled.div`
min-width:300px;
margin-top:30px;
height: 150vh;
background-color: #e8f5fe;


`


export default function ActivePatients() {
    const classes = useStyles();
    return (
        <>
            <FinalDiv >
                <LeftBar >
                    <Typography style={{ fontSize: "20px", marginLeft:"15px", marginTop:"15px" }}>Patients</Typography>
                    <div>
                        <input style={{ marginTop:"10px",position: "relative", border: "none", outline: "none", height: "25px", width: "273px", marginLeft: "15px" }} type="text"
                        placeholder="Search"
                        />

                        <img style={{ position: "absolute" ,
                        position: "absolute",
                        width: "28px",
                        left: "258px",
                        height: "28px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"/>
                    </div>

                    <Card className={classes.card} style={{
                        height: "60px",
                        marginTop: "10px",
                        marginLeft: "15px",
                        cursor:"pointer",
                    }} variant="outlined">
                        <div style={{ marginTop: "5px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                            <img style={{ width: "50px", position: "r" }} src="http://fredhaulinginc.com/wp-content/uploads/2016/05/Tobys.png" alt="" />
                            <div>
                                <Typography>
                                    Joseph 
                                </Typography>
                                <div>
                                    <Typography style={{ fontSize: "10px" }}>
                                        15 August 2020
                                    </Typography>
                                </div>
                            </div>
                            <CircleIcon style={{ color: "#0CF000", fontSize: "15px" }} />
                        </div>

                    </Card>
                    <Card className={classes.card} style={{
                        cursor:"pointer",
                        height: "60px",
                        marginTop: "10px",
                        marginLeft: "15px"
                    }} variant="outlined">
                        <div style={{ marginTop: "5px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                            <img style={{ width: "50px", position: "r" }} src="http://fredhaulinginc.com/wp-content/uploads/2016/05/Tobys.png" alt="" />
                            <div>
                                <Typography>
                                    Pratice Page
                                </Typography>
                                <div>
                                    <Typography style={{ fontSize: "10px" }}>
                                        30 August 2020
                                    </Typography>
                                </div>
                            </div>
                            <CircleIcon style={{ color: "#ff1100", fontSize: "15px" }} />
                        </div>
                    </Card>
                    <Card className={classes.card} style={{
                        height: "60px",
                        cursor:"pointer",
                        marginTop: "10px",
                        marginLeft: "15px"
                    }} variant="outlined">

                        <div style={{ marginTop: "5px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                            <img style={{ width: "50px", position: "r" }} src="http://fredhaulinginc.com/wp-content/uploads/2016/05/Tobys.png" alt="" />
                            <div>
                                <Typography>
                                    Drak Dimon
                                </Typography>
                                <div>
                                    <Typography style={{ fontSize: "10px" }}>
                                        22 September 2020
                                    </Typography>
                                </div>
                            </div>
                            <CircleIcon style={{ color: "#0CF000", fontSize: "15px" }} />
                        </div>
                    </Card>
                    <Card className={classes.card} style={{
                        height: "60px",
                        cursor:"pointer",
                        marginTop: "10px",
                        marginLeft: "15px",
                        
                    }} variant="outlined">

                        <div style={{ marginTop: "5px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                            <img style={{ width: "50px", position: "r" }} src="http://fredhaulinginc.com/wp-content/uploads/2016/05/Tobys.png" alt="" />
                            <div>
                                <Typography>
                                    James Johnson
                                </Typography>
                                <div>
                                    <Typography style={{ fontSize: "10px" }}>
                                        24 September
                                    </Typography>
                                </div>
                            </div>
                            <CircleIcon style={{ color: "#0CF000", fontSize: "15px" }} />
                        </div>
                    </Card>
                </LeftBar>
                <Card style={{
                    marginLeft:"10px",
                    marginTop:"30px",
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#F9F9F9"
                }} variant="outlined">
                    <Typography style={{marginTop:"20px",display:"flex", justifyContent:"center", alignItems:"center"}}>Patient Information</Typography>
                   <div style={{marginTop:"20px",width:"250px",display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>

                    <div>
                        <img style={{ width: "70px", position: "r" }} src="https://earthlette.com.au/wp-content/uploads/2016/10/Jem-final-profile-pic-circle2.png" alt="" />
                        </div>
                        <div>
                    <Typography style={{ fontSize: "25px" }} variant="h1">Sara Smith</Typography>

                        </div>
                   </div>
                    <Component >
                        < List1>
                            <Field  >
                                <p>Phone</p>
                                <p>Email</p>
                                <p>Gender</p>
                                <p>Age</p>
                            </Field>
                            <Details >
                                <p>935454546</p>
                                <p>user@gmail.com</p>
                                <p>Female</p>
                                <p>40</p>
                            </Details>
                        </ List1>
                        < List2 >
                        
                            <Field2 >
                                <p>Surgery Type :</p>
                                <p>Surgery Date :</p>
                                <p>Height(cm)   :</p>
                                <p>Weight       :</p>
                                <p>BMI          :</p>
                            </Field2>
                            <Details >
                                <p>Rotater cutt Repair</p>
                                <p>15 August 2020</p>
                                <p>163(ib)</p>
                                <p>90</p>
                                <p>19</p>
                            </Details>
                        </ List2>
                        < List3 >
                            <Field2 >
                                <p>Anesthesiologist</p>
                                <p>Anesthesiologist Phone </p>
                                <p>Anesthesiologist Email</p>
                            </Field2>
                            <Details >
                                <p>Dr. Shubham Jadon</p>
                                <p>410-510-610</p>
                                <p>shubham@h3a.com</p>
                            </Details>
                        </ List3>

                        <p> Surgery Clearence </p>


                        <img  src="https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/success-green-check-mark.png" style={{ width:"100px", height:"100px"}} />

                    </Component>
                    <div style={{ flexWrap:"wrap",marginTop: "20px", display: 'flex', justifyContent: "space-evenly" }}>
                        <Button className={classes.button} style={{  fontSize: "12px",fontWeight:"bolder", color: "#008CCF", width: "200px" }}
                            variant="text">List of prior Surgeries</Button>
                        <Button style={{ backgroundColor: "white", fontSize: "12px", color: "Black" }}
                            variant="text">List of Medical Diagnosis</Button>
                        <Button style={{ backgroundColor: "white", fontSize: "12px", color: "Black" }}
                            variant="text">List of Medications</Button>
                        <Button style={{ backgroundColor: "white", fontSize: "12px", color: "Black" }}
                            variant="text">Airway Evaluation</Button>
                        <Button style={{ backgroundColor: "white", fontSize: "12px", color: "Black" }}
                            variant="text">Anesthesia Clearance and Recommandations</Button>
                    </div>
                    <Card style={{ height: "100vh" }}>
                        <Card style={{ display:"flex", justifyContent:"center", alignItems:"center",marginLeft:"30px", marginTop: "40px", width: "350px", height: "40px", backgroundColor: "#c1e2f3" }}>
                            First Time Surgery</Card>
                        <Card style={{ display:"flex", justifyContent:"center", alignItems:"center",marginLeft:"30px", width: "350px", height: "40px", backgroundColor: "#F9F9F9" }}>
                            No</Card>
                        <Card style={{display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"30px", marginTop: "40px", width: "350px", height: "40px", backgroundColor: "#c1e2f3" }}>
                            Family History of Surgical Complications</Card>
                        <Card style={{display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"30px", width: "350px", height: "40px", backgroundColor: "#F9F9F9" }}>
                            Yes</Card>
                        <Card style={{display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"30px", marginTop: "40px", width: "350px", height: "40px", backgroundColor: "#c1e2f3" }}>
                            If Yes, please provide more details    </Card>
                        <Card style={{ display:"flex", justifyContent:"center", alignItems:"center",marginLeft:"30px", width: "350px", height: "40px", backgroundColor: "#F9F9F9" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. </Card>

                        <TableContainer style={{ marginLeft:"30px", marginTop: "40px", width:"1100px" }} component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead style={{ backgroundColor: "#c1e2f3" }} >
                                    <TableRow>
                                        <TableCell>Surgery Type</TableCell>
                                        <TableCell align="right">Date</TableCell>
                                        <TableCell align="right">Anesthesia</TableCell>
                                        <TableCell align="right">Surgical Complications</TableCell>
                                        <TableCell align="right">Anethestic Complications (nausea,vominting,difficult intubation)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow style={{ backgroundColor: "#F9F9F9" }} >
                                        <TableCell component="th" scope="row">
                                            Shoulder reconstructuion</TableCell>
                                        <TableCell align="right">January 2008</TableCell>
                                        <TableCell align="right">General "Breathing Tube"</TableCell>
                                        <TableCell align="right">No</TableCell>
                                        <TableCell align="right">No</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Card>



            </FinalDiv>

        </>
    )
}
