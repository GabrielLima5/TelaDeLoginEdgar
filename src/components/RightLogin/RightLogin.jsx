import CardLogin from '../CardLogin/CardLogin'
import './RightLogin.css'

export default function RightLogin(props){
    return(
        <div className="right-login">
            <div className="image">
                <img src={require("../../images/edgar.jpg")} alt="Logo Edgar" />
            </div>
            <CardLogin label="LOGIN" />
        </div>
    )
}