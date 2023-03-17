import {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
    
function Signout() {
    const usenavigate=useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
        toast.success('Déconnecté');
        usenavigate('/');
        window.location.reload();
    },[]);

    return (
        <div></div>
    )
}

export default Signout