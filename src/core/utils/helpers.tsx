import { useNavigate } from "react-router-dom"

export const navigate =(to:string)=>{
    let navigate=useNavigate()
    return navigate(to)
}