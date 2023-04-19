import { BrowserRouter } from "react-router-dom";
import { RotationProvider } from "./RotationContext"; // Import the RotationProvider

import { About, Hero, Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <RotationProvider> {/* Wrap your application with the RotationProvider */}
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <div className='bg-lake-pattern bg-cover bg-no-repeat bg-center '>
            <About />
          </div>
        </div>
      </RotationProvider>
    </BrowserRouter>
  );
}

export default App;
