import './LeftLogin.css'

export default function LeftLogin(props){
    return(
        <div className="left-login">
            <h1 className="title">{props.text1} <br/> {props.text2} <span className="bold">{props.company}</span></h1>
            <img src={require("../../images/edgar.jpg")} alt="Logo Edgar" />
        </div>
    )
}