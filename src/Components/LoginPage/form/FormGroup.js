import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styledForm.css';

export default function FormGroup(){
    const [userEmail,setUserEmail] = useState("");
    return(
        <>
            <form className="form" 
                onSubmit={(event)=>{
                    event.preventDefault();
                }}
            >
                <>
                    <label htmlFor="email">Email Ou Telefone</label>
                    <input type="text" className="input" id='email' value={userEmail} onChange={(event)=>setUserEmail(event.target.value)} autoComplete="off"/>
                </>
                <>
                    <label htmlFor="password">Senha</label>
                    <input type="password" className="input" id='password' autoComplete="off"/>
                </>
                <>
                    <a href="/" target="_blank">Esqueceu Sua Senha?</a>
                </>
                <>
                    <Link to={`/chat/${userEmail}`}>
                        <input type="submit"/>
                    </Link>
                </>                
            </form>
        </>
    )
}