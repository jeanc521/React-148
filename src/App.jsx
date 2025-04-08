 import style from "./App.module.css"
import {Menu} from './components/menu'
import img01 from './assets/images/download.jfif'

function App() {
  return (
    <>
      <Menu option01='Sessao 1' option02='Sessao 2' option03=' Mapa e contato'/>
      <main>
        <section id="s1">
          <h2>sessao 1</h2>
         {/* {<img src={img01} alt='o amor esta no ar' width={200} height={'auto'}/>} */}
         {cards.map((intem, index) => {
          return (
            <div key={index}>
              <h5>{item.text}</h5>
              <img src={item.img} alt={item.text} width={200} height={"auto"} />
            </div>
          )
         })}
        </section>
        <section id="s2">
          <h2>sessao 2</h2>
        </section>
      </main>
    </>
  );
}

export default App;
