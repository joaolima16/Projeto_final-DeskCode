import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import LoginPage from './Components/LoginPage/LoginPage/LoginPage';
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/chat" element={<Layout/>}>
          <Route path=":userName" element={<Layout/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
