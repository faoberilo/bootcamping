import { Container } from "./styles";
import React from "react";

function Message({type, msg}){

    const [visible, setVisible]= React.useState(false)

    React.useEffect(()=>{
        
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)
        
        const timer = setTimeout(()=>{
            setVisible(false)
        },3000)

        return ()=> clearTimeout(timer)
    },[msg])

    return (
        <Container>
            {visible && (
                <div className={`message ${type}`}>{msg}</div>
            )}
        </Container>
    )
}

export default Message;