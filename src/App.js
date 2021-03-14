import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Sale from './pages/Sale';
import {useState} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

const Nav = styled.nav`
    background: #0096;
    height: 25px;
    margin-left: -10vw;
    margin-right: -10vw;
    display: flex;
    align-items: center;
    float: 
    justify-content: space-around;
    padding: 2rem;
    border-bottom-left-radius: 25px;
    border-right: 10px solid #00ffff;
    overflow: hidden;
`

const NavLink = styled(Link)`
  color: #fff;
  display: inline;
  height: 120px;
  width: 100px;
  float: left;
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  padding: 27px 15px;
  /*border-right: 1px solid #bbb;
  

  /* &.active { 
    color: #fff;
  } */}

  &:hover {
    color: #000;
    background-color: #00ffff;
    
  }
`

// const NavBtn = styled.button`
//   background: blue;
//   height: 5vh;

// `

const NavMenu = styled.div`
  display: flex;
  margin-right: -24px;
  margin-top: 85px;

`

function App() {
  
  return (
    
    <>
        <Router>
          <Nav>
            <NavMenu>
              <NavLink to="/Home" >
                Home
              </NavLink>

              <NavLink to="/About" >
                About
              </NavLink>
              
              <NavLink to="/Sale" >
                Sale
              </NavLink>
            </NavMenu>
          </Nav>

            <Switch>
              
              <Route path='/About/Me'>
                <Home/>
              </Route>
              <Route path='/Sale'>
                <About/>
              </Route>
              <Route path='/About'>
                <About/>
              </Route>

              <Route path='/Home'>
                <Home/>
              </Route>

              <Route path='/'>
                <Home/>
              </Route>
              
            </Switch>
          </Router>
      </>
    );

}

export default App;

//1//let rnd = Math.random()*10;
  //2//let userReq = prompt('Which page?');

  //8//const [activePage, setActivePage] = useState(<Home/>);

  //4//let rndPage = <Home/>;

  /*3   if (userReq == 'About') {
    rndPage = <About/>;
  } else {
    rndPage = <Home/>;
  } */

/*5 
  let goHome = () => {
    setActivePage(<Home/>);
  }
  let goAbout = () => {
    setActivePage(<About/>);
  }
  <button onClick = {()=>setActivePage(<Home/>)}>Home</button>
  <button onClick = {()=>setActivePage(<About/>)}>About</button>
 */

/* 7
  let pageUpdateHandler = (page) => {
    //let page = e.target.innerHTML;
    switch (page) {
      case 'Home':
        setActivePage(<Home/>)
        break;
    
      case 'About':
        setActivePage(<About/>)
        break;
    
      default:
        break;
    }
  }
 */

/*6
return (
    <div>
<section>
      <button onClick = {()=>pageUpdateHandler('Home')}>Home</button>
      <button onClick = {()=>pageUpdateHandler('About')}>About</button>
    </section>
      {activePage}
      </div>
    );
*/
