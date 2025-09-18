
import Header from "./header/Header";
import Home from "./landing/home/Home";

import About from './landing/about/About'
import Skills from "./landing/skills/Skills";
import Projects from "./landing/projects/Projects";
import Contact from "./landing/contact/Contact";

export default function Main() {
    
    return (

        
        <>
        <div  className="bg-[#FAFAFA] md:px-16">
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
        </>
    )

}