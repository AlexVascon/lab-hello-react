
import './App.css';

function App() {
  return (
    <div>
    <div className='top-page'>
      <div className='logo-left'>
        <img src="./images/ironhack-logo-xs.png" alt="" />
      </div>
      <div className='menu-right'>
        <img src="./images/menu-top-xs.png" alt="" />
      </div>
      <div className='top-text'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
        <div className='button'>
        <h4>Awesome!</h4>
        </div>
      </div>
    </div>
    <div className='bottom-icons'>
      <div className='icon'>
        <img src="./images/icon1.png" alt="" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className='icon'>
        <img src="./images/icon2.png" alt="" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state</p>
      </div>
      <div className='icon'>
        <img src="./images/icon3.png" alt="" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components</p>
      </div>
      <div className='icon'>
        <img src="./images/icon4.png" alt="" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers</p>
      </div>
    </div>
    </div>
  );
}

export default App;
