import './Input.css'

export default function InputGroup(props){
    return(
        <div className="text-field">
            <label className="extra-light" htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} placeholder={props.label} required></input>
        </div>
    )
}