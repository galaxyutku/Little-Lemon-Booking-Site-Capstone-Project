import React from "react";
import "../styles.css";
import { Divider } from "@mui/material";
import { Text } from "@chakra-ui/react";

function AboutUsPage() {
    return (
        <div className="aboutUsPage">
            <div className="form_card">
                <div style={{ padding: "3vw" }}>
                    <Text fontSize={"2em"}>About Us</Text>
                    <br />
                    <Divider />
                    <Text sx={{ marginTop: "5vh"}} fontSize={"1em"}>
                        Welcome to Little Lemon, where every dish is a celebration of flavor and freshness! Nestled in the heart of our vibrant community, we take pride in serving up a delightful menu inspired by the sunny Mediterranean coast. Our chefs craft each meal with care, using locally sourced ingredients and a touch of love to create unforgettable dining experiences.
                        <br /><br />
                        At Little Lemon, we believe that food is more than just sustenance; it’s a way to bring people together. Whether you're enjoying a cozy dinner with family, celebrating a special occasion, or simply indulging in a casual lunch, our warm and inviting atmosphere is designed to make you feel at home.
                        <br /><br />
                        From our zesty lemon-infused dishes to our carefully curated selection of wines, every element of our restaurant is crafted with passion and dedication. Join us for a taste of the Mediterranean and discover why Little Lemon is a cherished gem in our community. We can’t wait to serve you!
                    </Text>
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;
