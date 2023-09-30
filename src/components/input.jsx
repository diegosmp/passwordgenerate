export default function Input (props) {   
    return (
        <input 
          className={props.className}
          type={props.type} 
          id={props.id} 
          min={props.min} 
          value={props.passwordSize} 
          onChange={(ev) => props.setPasswordSize(ev.target.value)} 
          placeholder={props.placeholder}
        />
    )
}