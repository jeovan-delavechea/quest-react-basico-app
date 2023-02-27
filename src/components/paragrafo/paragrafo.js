import './paragrafo.css'

const Paragrafo = ({title, color}) => {
    return <p className="paragrafo" style={{ color }}>{title}</p>
}

export default Paragrafo