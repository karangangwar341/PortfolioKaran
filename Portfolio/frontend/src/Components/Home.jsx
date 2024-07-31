import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Description from './Description'
import Work from './Work'
import SkillSection from './Skills'
import MyComponent from './ContactForm'
import AboutMe from './Aboutme'
import Services from './Services'
import Chatbot from './Chatbot/Chatbot'



const Home = () => {
  
  return (
    <div className=' bg-deep-purple w-screen h-full '>
      <style>
            {`
              ::-webkit-scrollbar {
                width: 0px; /* Safari and Chrome */
              }
              ::-webkit-scrollbar-thumb {
                background: transparent;
              }
            `}
          </style>
       
        <div className='flex'>
        <Description/>
      
        </div >
        <AboutMe/>
        
        <SkillSection/>
        <div className='h-96'>

        </div>
       
        <Header/>
        <Services/>
        <div className='h-44'></div>
        <div id='contactForm'>
        <MyComponent/>
        <Chatbot/>
          </div>  

<div className='h-44'>
</div>
     
        <Footer/>
    </div>
  )
}

export default Home