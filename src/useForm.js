import { useState } from "react";

export const HandleForm = (initialState) =>{
 const [state,setState] = useState(initialState)
 const HandleSubmit = (event) => {
   setState({
    ...state,
    [event.target.name]:event.target.value
   })
 }
 return [state,HandleSubmit]
}