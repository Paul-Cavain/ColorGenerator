import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Input from "./Input";
import Square from "./Square";


function App() {
  const [color, setColor] = useState("");
  const [colorHex, setColorHex] = useState("");
  return(
    
    <section className="App">
      <Header />
      <Square 
        color={color}
        colorHex = {colorHex}
      />
      <Input 
        color = {color}
        setColor = {setColor}
        setColorHex = {setColorHex}
      />
      <Footer />
    </section>
  )
}
export default App