import './App.css';
import { useState } from 'react';
import Cart from './Cart';
import Login from './Components/Login';
import {Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Signup from './Components/Signup';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#home">New in stock</a>

      <Routes>
      <Route path="Login" element={<Login />}>Login</Route>
      </Routes>
      <Link to="Login">Login</Link>

      <Routes>
      <Route path="Signup" element={<Signup />}>Signup</Route>
      </Routes>
      <Link to="Signup">Signup</Link>

    </div>
    <br></br>
    <div class="row">
  <div class="column">
    <div class="card">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 3</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 4</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </div>
  </div>
</div>
<br></br>
<div class="row">
  <div class="column">
    <div class="card">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 3</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 4</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </div>
  </div>
</div>
<br></br>
<div class="row">
  <div class="column">
    <div class="card">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 3</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 4</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </div>
  </div>
</div>
  </div>
  );
}

export default App;
