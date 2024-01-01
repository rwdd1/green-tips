import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Selection from "./components/Selection";
import Tip from "./components/Tip";
import "../src/css/reset.css"
import "../src/css/main.css"

export default function App() {
    const [currentTip, setCurrentTip] = useState(null);

    return (
        <>
            <Header />
            {
            (!currentTip) 
            ? 
            <Selection toggleTip={setCurrentTip}/> 
            : 
            <Tip toggleTip={setCurrentTip} currentTip={currentTip}/> 
            }
            <Footer />
        </>
    );
}
