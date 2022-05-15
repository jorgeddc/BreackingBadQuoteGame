import { useState } from "react"


export const useLoading = () => {


    const [state, setState] = useState({
        data:[],
        loading:true,

    })


    setTimeout(() =>{
        setState({  data:[],
            loading:false,})
    },1500)

    return(state)

}
