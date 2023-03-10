import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* This element will render either <About/> when the url is "/about" or <Contact/> when the url is "/contact" or null if it is "/" */}
      <Outlet />
      <div className="flex flex-wrap justify-around bg-grey py-10 ">
        <Card
          imgSrc="https://avatars.githubusercontent.com/u/11613311?v=4"
          name="Hitesh Choudhary"
          description="I’m Hitesh Choudhary, Teacher by 💗 and programmer by profession."
        />
        <Card
          imgSrc="https://avatars.githubusercontent.com/u/94738352?v=4"
          name="Anurag Tiwari"
          description="Engineer by Profession and Teacher by Hobby. 💗 to write code and teach!"
        />
        <Card
          imgSrc="https://avatars.githubusercontent.com/u/84690382?v=4"
          name="Vasu K"
          description="Learning Full Stack Web Development 💗"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
