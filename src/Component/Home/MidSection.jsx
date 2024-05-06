import { Grid } from '@mui/material';
import React from 'react';

const imageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

function MidSection() {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Grid container spacing={2}>
                {imageURL.map((ele, index) => (
                    <Grid item key={index} lg={4} md={4} sm={12} xs={12}>
                        <img src={ele} alt="" style={{ width: "100%", display: "block" }} />
                    </Grid>
                ))}
            </Grid>
            <img src={url} style={{ width: "100%", marginTop: "20px", display: "block" }} alt="covid" />
        </>
    );
}

export default MidSection;
