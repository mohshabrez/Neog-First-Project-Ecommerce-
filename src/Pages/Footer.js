import github from "../Images/github.png"
import linkedin from "../Images/linkedin.png"
import insta from "../Images/insta.png"
import whtsapp from "../Images/whtsapp.png"
import twitter from "../Images/twitter.png"
export function Footer(){
    return(
        <>
        <div className="footer">
            <h2>TrAvLo.Co</h2>
            <p>Shop easily Trekkers and Travel Freaks</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>© 2023 TrAvLo.Co</p>
        </div>
         <div className="socialLinks">
            <img src={github} alt="Github"/>
            <img src={linkedin} alt="linkedin"/>
            <img src={insta} alt="InstaGram"/>
            <img src={whtsapp} alt="Whatsapp"/>
            <img src={twitter} alt="Twitter"/>
        </div>
        </>
        
    )
}