import Navbar from "./navbar";
import "./body.css";

function Body() {
  return (
    <body>
      <main>
        <section className="article-section">
          <article className="article">
            <h1 id="cabecera">Acelera tu carrera digital.</h1>
            <h4 className="text-cabecera">
              En una época de cambios y desarrollo tecnológico, tu formación no
              puede perder el ritmo.
            </h4>
            <p className="text-cabecera">
              Fórmate en el área digital y tecnológica y conviértete en uno de
              los perfiles más deseados. Bootcamps presenciales y online para
              novatos y techies, con las mejores tasas de empleabilidad y el
              reconocimiento de expertos.
            </p>
          </article>

          <article className="article" id="foto1"></article>
        </section>
        <section></section>
      </main>
    </body>
  );
}

export default Body;
