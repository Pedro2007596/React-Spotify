import CardSb from "./components/CardSb"
import Container from "./components/Container"
import ConteudoPrincipal from "./components/ConteudoPrincipal"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
    <Header/>
      <Container>
       <Sidebar>
        <CardSb/>
       </Sidebar>
        <ConteudoPrincipal/>
      </Container>
    </>
  )
}

export default App
