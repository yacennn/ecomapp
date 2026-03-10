import Header from "./components/Header";
// eslint-disable-next-line no-unused-vars
import style from"./App.module.css";
import Footer from "./components/Footer";
import Home from "./section/Home";
import AboutUs from "./section/AboutUs";
import Contact from "./section/Contact";
import Products from "./section/Products";


export default function App(){
  return(
    <>
     <Header/>
     <main>
        <Home/>
        <Products/>
        <AboutUs/>
        <Contact/>
     </main>
     <Footer/>
    </>
  )
}