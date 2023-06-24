import Input from '../Input/Input'
import Button from '../Button/Button'

import './CardLogin.css'

export default function CardLogin(props){
    return(
        <div className="card-login">
            <h1>{props.label}</h1>
            <Input type="text" id="user" label="Usuário" />
            <Input type="password" id="password" label="Senha" />
            <span className="forgot-password">Esqueceu sua senha?</span>
            <Button label="Login" />
        </div>

    )
}