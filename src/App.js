import 
Paragrafo from './components/paragrafo/paragrafo.js';
import Button from './components/botao/botao'

function App() {
  return (
    <>
      <Paragrafo title='Texto usando props!' color='red' />

    <Button label={'Alerta!'} />
    </>
  );
}

export default App;
