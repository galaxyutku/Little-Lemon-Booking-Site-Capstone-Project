import React from "react";
import "../styles.css";
import { Divider } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Text } from "@chakra-ui/react";

function ContactPage() {
    return (
        <div className="contactPage">
            <div className="form_card">
                <div style={{ padding: "3vw" }}>
                    <Text fontSize={"2em"}>Contact</Text>
                    <br />
                    <Divider />
                    <Text sx={{ marginTop: "5vh"}} fontSize={"1em"}>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                            <EmailIcon style={{ marginRight: "0.5rem" }} />
                            <span>Email: info@littlelemonrestaurant.com</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                            <PhoneIcon style={{ marginRight: "0.5rem" }} />
                            <span>Phone: (123) 456-7890</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <LocationOnIcon style={{ marginRight: "0.5rem" }} />
                            <span>Address: 123 Citrus Avenue, Sunnyville, ST 12345</span>
                        </div>
                    </Text>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
