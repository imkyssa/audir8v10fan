import { useState, useEffect } from "react";
import FirstScreen from "./Components/FirstScreen";
import Modal from "./Components/Modal";
import Nav from "./Components/Nav";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Images from "./Components/Image";
import Footer from "./Components/Footer";
const App = () => {
  //Modal için açık kapalı state'leri
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState()

  //Modal Açma Fonksiyonu
  const handleOpen = (e) => {
    setOpen(true)
    setItem(e)
  };

  //Modal Kapatma Fonksiyonu
  const handleClose = () => setOpen(false);
  
  //Animasyon Kütüpanesini içe aktarma fonksiyonu
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Nav />
      <FirstScreen />
      <Modal item={item} setItem={setItem} open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <Images handleOpen={handleOpen} />
      <div data-aos-offset="0"
        data-aos="fade-up"
        data-aos-delay="200"
        className="shop"
      >
        <div className="line"></div>
        <button className="buy">Satın Alın</button>
      </div>
      <Footer />
    </>
  );
}

export default App;
