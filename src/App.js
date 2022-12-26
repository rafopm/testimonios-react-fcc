import "./App.css";
import data from "./data";
import Testimonio from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        {data.map((persona) => (
          <Testimonio
            key={persona.codigo}
            nombre={persona.nombre}
            pais={persona.pais}
            imagen={persona.imagen}
            cargo={persona.cargo}
            empresa={persona.empresa}
            testimonio={persona.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;