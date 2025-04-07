 import style from "./App.module.css"
import {Menu} from './components/menu'

function App() {
  return (
    <>
      <Menu option01="Sessao 1" option02='Sessao 2' option03='contato'/>
      <main>
        <section id="s1">
          <h2>sessao 1</h2>
        </section>
        <section id="s2">
          <h2>sessao 2</h2>
        </section>
      </main>
    </>
  );
}

export default App;
