import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
 
  h1{
      display: flex;
      margin-bottom: 1rem;
      align-items: center;      
  }
  form {
      display: flex;
      flex-direction: column;
      input{
          border-style:solid;
          border-color:black;          
          width: 30rem;
          font-size: 1.3rem;          
        }       
        div{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        a{
            text-align: right;            
            color:black;
            font-style:border;
        }
        button[type="submit"]{ 
            font-size: 1.5rem;
            border-style: none;
            padding: 0.5rem 1.5rem;
            border-radius: 1rem;
            background-color: rgb(157,157,156);
            width: fit-content;
            margin-bottom:0.5rem;
            &:hover {
                cursor: pointer;
                transition: all 200ms ease;
                transform: scale(1.1);
                color:black;
                background-color: rgb(205,147,62);
            }            
    }        

`;