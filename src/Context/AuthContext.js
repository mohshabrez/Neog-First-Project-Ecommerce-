import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"


export const AuthContext = createContext();


export function AuthProvider({children}){
    const [email, setMail] = useState("")
    const [ password, setPassword] = useState("")
    const [isAuth, setAuth] = useState(false)

    useEffect(()=> {
        localStorage.getItem("token") ? setAuth(true) : setAuth(false);
    },[isAuth])
    
   

    const setCredentials = async (e) => {
        e.preventDefault()

        let validateData = {
            email: "",
            password: "",
            name:""
        }

        if (e.target.value === "Test User") {
            validateData = {
                ...validateData,
                email: "adarshbalika@gmail.com",
                password: "adarshbalika",
                name:"Adarsh Balika"
            }
            setMail("");
            setPassword("");
            
        }
        if (e.target.value === "Sign In") {
            validateData = {
                ...validateData,
                email: email,
                password: password,
                
            }
            setMail("");
            setPassword("");
            
        }

        try {
            const res = await axios.post("/api/auth/login", JSON.stringify(validateData));
            localStorage.setItem("token", await res.data.encodedToken);
            setAuth(localStorage.getItem("token") ? true : false);
            
        }

        catch (err) {
            const errorType = "Auth"
            console.error(errorType, err)
            
        }
    }
    const registerUser = async (e) => {
        try {
            e.preventDefault();
            await axios.post("/api/auth/signup", JSON.stringify({ email, password }));
            setPassword("");
            setMail("");
            
        }
        catch (err) {
            const errorType = "signUp";
            console.error(errorType, err)
        }
    }


    return(
        <AuthContext.Provider value={{ registerUser, setCredentials, email, password, setMail, setPassword, isAuth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}


export const UseAuth = () => useContext(AuthContext)