import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

function App(){
    return(
           <h1>Hello, React!</h1>
    )
}

/*const App = () => {
    return <h1>Hello, React</h1>
}*/

createRoot(rootElement).render(
  <App />
);