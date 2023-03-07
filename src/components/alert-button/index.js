const AlertButton = ({label}) =>{
    return(
        <button className="btn" onClick={() => alert(`A label desse botão é ---> "${label}"`)}>{label}</button>
    )
}

AlertButton.defaultProps = {
    Text: 'Clique aqui',
    color: 'blue'
};


export default AlertButton