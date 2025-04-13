import { useEffect,useState } from "react";
import {axiosInstance} from "../utils";

export function useFetch(url){
    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const [error,setError] = useState(null)

    useEffect (()=>{
        const FetchData = async () => {
            setIsPending(true);
            try {
                const req =await axiosInstance(url);
                console.log(req)
                setData(req);
            }catch (error) {
                console.log(error);
                setError(error);
            }finally {
                setIsPending(false);
            }
        }
        FetchData ();
    },[url])
    return {data,isPending,error};
}