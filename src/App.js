import { GlobalStyle } from './globalStyle';
import One from './pages/One';
import Two from './pages/Two';
import Three from './pages/Three';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <GlobalStyle />
      <One />
      <Navbar />
      <Two />
      <Three />
    </>
  );
}

export default App;