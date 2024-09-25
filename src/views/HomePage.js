import React from "react";
import "../styles.css";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Navigate, redirect, useNavigate } from "react-router-dom";

function HomePage() {
    const foodItems = [
        {
            title: "Pancake",
            description: "Delicious pancakes of all kinds at Little Lemon Restaurant.",
            image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg",
        },
        {
            title: "Burger",
            description: "Juicy burgers with fresh ingredients, made to perfection.",
            image: "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1639567.jpg&fm=jpg",
        },
    ];

    const navigate = useNavigate();

    return (
        <div>
        <div className="homepage">
            <div className="horizontal_card">
                <p style={{fontWeight:"bold", fontSize:"3em"}}>%30 Discount at every sunday.</p>
            </div>
            <div className="main_page_center_cards">
                    <Card sx={{ width: "25vw", maxHeight:"33vh" }}>
                        <CardMedia
                            image="https://png.pngtree.com/png-vector/20220830/ourmid/pngtree-business-man-greets-with-a-thumbs-up-png-image_6131631.png"
                            sx={{ height: "20vh", backgroundSize:"contain" }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Quick Reservation
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                You can make a reservation and have a delicious night.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: "25vw", maxHeight:"33vh" }}>
                        <CardMedia
                            sx={{ height: "20vh", backgroundSize:"contain" }}
                            image={"https://www.mcgill.ca/oss/files/oss/styles/hd/public/eatables-3873462_1920.jpg?itok=u-zzZg1P&timestamp=1560998397"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Many Kinds of Foods
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                We have all cuisines from all around the world.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: "25vw", maxHeight:"33vh" }}>
                        <CardMedia
                            sx={{ height: "20vh", backgroundSize:"cover" }}
                            image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Natural Food
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Our foods are prepared with locally growed productions.
                            </Typography>
                        </CardContent>
                    </Card>
            </div>
            <div style={{display:"flex", marginBottom:"7vh"}}>
            <Button sx={{backgroundColor:"#ffab5b", width:"10vw", height:"10vh", color:"black"}} onClick={() => {navigate("/reservation")}}>
                Make Reservation
            </Button>
            </div>

        </div>
            <footer style={{backgroundColor:"black", width:"100%", height:"8.5vh", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                <img src="https://cdn-icons-png.flaticon.com/512/3137/3137034.png" width={50} style={{marginLeft:"3vw"}}/>
                <p style={{color:"white", fontWeight:"1.5em", fontSize:"1.2em", marginRight:"3vw"}}>Little Lemon Copyright</p>
            </footer>
        </div>
    );
}

export default HomePage;
