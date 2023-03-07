const StyleText = ({title, color, textTransform}) => {
    return <p className="paragrafo" style={{ color, textTransform}}>{title}</p>
}

StyleText.defaultProps = {
    color: 'green',
    textTransform: 'lowercase',
    title: 'texto sem estilos'
}

export default StyleText