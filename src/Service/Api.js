import axios from 'axios'

export const authenticateSignup= async({data})=>{
const URL="http://localhost:3000"
    try {
     const data2 =await  axios.post(`${URL}/signup`,data)
console.log(data2);
    } catch (error) {
        console.log("Error while Calling Signup Api",error);
    }
}


export const PayUsingPaytm=async(data)=>{
    console.log(data);
    const URL="http://localhost:3000"
    try {
     let res= await  axios.post(`${URL}/payment`,data )
     return res.data
    } catch (error) {
        console.log('Error While Calling Payment API',error.message);
    }
}