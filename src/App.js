import StyleText from './components/style-text/index';
import AlertButton from './components/alert-button/index'

function App() {
  return (
    <>
      <StyleText title='Texto usando props!' color='red' textTransform='uppercase' />

    <AlertButton label={'Alerta!'} />
    </>
  );
}

export default App;
