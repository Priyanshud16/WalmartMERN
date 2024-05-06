import React, { useState,useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase,Box, colors, List, ListItem,styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom'
import { getProducts } from '../../Redux/action/ProductsAction';

const ListWrapper=styled(List)`
position:absolute;
background:#ffffff;
color:black;
margin-top:40px;
cursor:pointer
`

function SearchBar() {
  const [text,setText]=useState('')
  const {products}=useSelector(state=>state.getProducts)
  
  console.log(products);
const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(getProducts())
  },[dispatch])
  const getText=(text)=>{
setText(text)
  }
  return (
    <div style={{marginLeft:"350px",background:"white",width:"38%",borderRadius:"10px",height:"40px",display:"flex"}}>

      <InputBase placeholder='Search everything at walmart online and in store' value={text} onChange={(e)=>getText(e.target.value)} style={{width:"100%",marginLeft:"20px"}}/>
      <Box style={{color:"black",padding:"5px"}}>
        <SearchIcon/>
      </Box>
      {
        text && 
        <ListWrapper>
          {
            products.filter(product=>product.title.toLowerCase().includes(text.toLowerCase())).map(product=>(
              <ListItem>
                <Link to={`products/${product.id}`} style={{textDecoration:"none",color:"black"}} onClick={()=>setText('')}>
                {product.title}
                </Link>
                
              </ListItem>
            ))
          }
        </ListWrapper>
      }
    </div>
  )
}

export default SearchBar