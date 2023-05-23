import travel from "../Images/travel.gif"
import backpack from "../Images/backpack.gif"
import { Link } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom";
import { UseAuth } from "../Context/AuthContext";


export function LoginPage(){
  const {setCredentials, email, setMail, setPassword, password, isAuth, setAuth} = UseAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (e) => {
    setCredentials(e);
    if (isAuth) navigate(location?.state?.from?.pathname)
    
  };
  const logoutClick = () => {
    localStorage.removeItem("token");
    setAuth(false);
  }
    return(
        <>
        <div className="loginPage">
            <div className="logoset">
                <Link to="/HomePage">
                <h1>TrAvLo.Co</h1>
                <img src={travel} alt="travelimg"/>
                <img src={backpack} alt="backpack"/>
                </Link>
            </div>
            {isAuth ? (
            <div className="loggedinCard">
                <div className="profileDetails">
                    <h1>You have been Logged In!!!</h1>
                    <h3>You can access Cart, WishList, and more stuff..</h3>
                    <h3>Click on Logo !!! To Move to HomePage</h3>
                    <button onClick={logoutClick}>Log out</button>
                    
                </div>
            </div>
            ) : (
            <div className="loginCard">
                <h1 style={{color:"rgb(13, 201, 230)"}}>SIGN IN</h1>
                <div className="formLoginData">
                <form>
                    <div>
                        <label> Enter Your Email Address *</label>
                        <input type="text" placeholder="adarshbalika@gmail.com" name="Email" value={email} onChange={(e) => setMail(e.target.value)}/>
                    </div>
                    <div>
                        <label> Enter Your Password *</label>
                        <input type="password" className="pwd" placeholder="********" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" value="Sign In" className="btn primary" onClick={handleClick}>Sign In</button>
                    <button type="submit" value="Test User" className="btn primary" onClick={handleClick}>Login With Test Credentials</button>
                    
                    <p style={{marginLeft:"20px"}}>Don't have an Account?<Link to="/SignUp">  Sign Up</Link></p>
                </form>
                </div>
            </div>
            )}
        </div>
        </>
    )
}