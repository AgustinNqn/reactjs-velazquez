const Button = (props) => {
    console.log(props)
    return <button style={{background: props.fondo, color: props.textColor, texto: props.text, display: 'flex', alignItems: 'center', gap: 50}}>Boton</button>
}

export default Button