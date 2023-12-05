"use client";

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStateProps{
    error: Error
}
const ErrorPage:React.FC<ErrorStateProps> = ({error}) => {
    useEffect(()=>{
        console.error(error);
    })
    return ( 
        <EmptyState title="Uh oh" subtitle="Something went wrong."/>
     );
}
 
export default ErrorPage;