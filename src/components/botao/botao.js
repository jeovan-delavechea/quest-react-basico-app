import './botao.css'

const mensagem = (label) =>{
    alert(`A label desse botão é ---> "${label}"`)
}

const Button = ({label}) =>{
    return(
        <button className="btn" onClick={() => mensagem(label)}>{label}</button>
    )
}

export default Button