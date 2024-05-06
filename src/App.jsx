import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import HomePage from './Component/Home/Home'
import { Box } from '@mui/material'
import { border } from '@chakra-ui/react'
import DataProvider from './Context/DataProvider'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailsView from './Component/Home/Details/DetailsView'
import Cart from './Component/Cart/Cart'
function App() {
  

  return (
    <DataProvider>
      <BrowserRouter>
     <Header/>
     <Box style={{marginTop:"80px",width:"100%"}}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
     <Route path='/products/:id' element={<DetailsView/>}/>
   <Route path='/cart' element={<Cart/>}/>
     </Routes>
     </Box>
     </BrowserRouter>
    </DataProvider>
  )
}

export default App
