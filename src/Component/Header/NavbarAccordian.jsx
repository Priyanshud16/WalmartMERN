import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  return (
    <div>
      <Accordion style={{width:"280px",borderRadius:"30px",background:"rgb(0, 79, 154)",position:'fixed',top:"5px",marginLeft:"15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"

          id="panel1-header"
        >
     <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png" style={{height:"30px"}} alt="" />   <p style={{color:"white"}}>How do you want our Items</p>  
        </AccordionSummary>
        <AccordionDetails>
         <div  style={{display:"flex",justifyContent:"space-around"}}>
            <div><img style={{height:"50px"}} src="https://i5.walmartimages.com/dfw/4ff9c6c9-486e/k2-_4be6f532-b0b2-4480-bb65-d53586e87193.v1.png" alt="" /></div>
            <div><img style={{height:"50px"}} src="https://i5.walmartimages.com/dfw/4ff9c6c9-944a/k2-_333618e2-7327-4081-990e-7870dd062248.v1.png" alt="" /></div>
            <div><img style={{height:"50px"}} src="https://i5.walmartimages.com/dfw/4ff9c6c9-4637/k2-_c8d39665-dac4-474a-9fb7-ab5feeb647b5.v1.png" alt="" /></div>
         </div>

         <div style={{background:"white",height:"100px",marginTop:"20px",borderRadius:"10px"}}>
            <div style={{display:"flex"}}>
          <img  style={{height:"15px",paddingTop:"18px"}} src="https://i5.walmartimages.com/dfw/4ff9c6c9-5249/k2-_71d3c250-050a-40b0-8fd7-c84c1df83204.v1.png" alt="" /> <p style={{fontSize:"12px",textAlign:"center",paddingTop:"10px",fontWeight:"bolder"}}>Add an address for shipping and delivery</p>
            </div>
            <div style={{height:"15px"}}>
         <span style={{textAlign:"center",marginLeft:"10px"}}>Sacramento, CA 95829</span>   
            </div>

            <button style={{marginTop:"10px",width:"200px",height:"25px",borderRadius:"20px",border:"none",background:"rgb(0,113,220)",color:"white",marginLeft:"25px"}}>Add Address</button>
         </div>
        
        <div style={{height:"80px",marginTop:"20px",background:"white"}}>
          <div style={{display:"flex"}}>
            <img style={{height:"18px",marginTop:"12px"}} src="https://i5.walmartimages.com/dfw/4ff9c6c9-14f0/k2-_8ce34043-6050-4f39-afb2-3e76a554f8a3.v1.png" alt="" /> <p>Sacramento Supercenter</p>
          </div>
          <div style={{height:"15px"}}>
          <span style={{textAlign:"center",marginLeft:"10px",fontSize:"12px"}}>8915 GERBER ROAD,Sacramento,CA 95829</span>  
          </div>
        </div>
        </AccordionDetails>
      </Accordion>
     
      {/* <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion> */}
    </div>
  );
}
