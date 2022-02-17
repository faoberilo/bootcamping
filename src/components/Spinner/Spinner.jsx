import { Container } from "./styles";
import React from "react";

function Spinner({spin}){

    const [visible, setVisible]= React.useState(false)

    React.useEffect(()=>{        
        if(spin==="off"){
            setVisible(false)
            return
        }
        setVisible(true)
    },[spin])

    return (
        <Container>
            {visible && (<div className='spinner'></div>)}
        </Container>
    )
}

export default Spinner;