import './App.css';
import About from './components/About';
import VideoCarousel from './components/Carousel';
import Footer from './components/Footer';
import AnimatedTitle from './components/Title';

function App() {
  return (
    <div>

<AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

      <About
      heading="Welcome to Adventure World"
      description="Step into the most immersive adventure of your life."
      subDescription="Join players from around the globe in a unified economy of fun and challenges."
      imageSrc="img/about.webp"
      />

      <div className='flex justify-center items-center h-screen w-full bg-white'>
        <p className='text-center text-4xl text-black uppercase font-extrabold'> your more content goes here </p>
        
      </div>
    </div>
  );
}

export default App;
