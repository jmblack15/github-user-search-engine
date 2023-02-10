import { Container } from "@mui/material";
import { Searcher } from "./Components/Searcher";

function App() {

  return (
    <Container sx={{
      backgroundColor: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Searcher />
    </Container>
  )
}

export default App
