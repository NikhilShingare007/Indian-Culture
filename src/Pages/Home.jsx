import './Home.css'
import NavBar from '../Components/NavBar'
import ImageSlider from '../Components/ImageSlider';
import SetDate from '../Components/SetDate.jsx';
import Typewriter from 'typewriter-effect';
import { Page4Buttons } from '../Data/Page4Buttons.jsx';

export default function Home() {


  return (
    <div className='Home-container'>
      <div className="nav">
        <NavBar />
      </div>
       <div className="page1">
          <div className="Slide-Img">
            <ImageSlider />
          </div>
       </div>
      <div className="page2">
        <div className="page2-content">
            <h2> 
              <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('✅ Vibrant Festivals & Traditions of India...!')
                    .start();
                }}
                />
            </h2>
            <div className="page-2-container">

                <div className="page2-left">
                  <p>India is a land of festivals, where every celebration reflects the countrys rich cultural heritage, religious diversity, and spirit of togetherness. From grand processions to lively dance performances, from elaborate rituals to delicious feasts, Indian festivals bring people together in joy and devotion.</p>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Explore</span>
                  </button>
                </div>
                <div className="page2-right">
                  <img src="src/images/BG/page2-1.jpg" alt="" />
                </div>
              </div>

          </div>
      </div>

       <div className="set-date-container">
        <SetDate />
      </div>
      <div className="page3">
        <div className="page3-content">
            <h2> 
              <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('✅ Architectural Marvels in India...!')
                    .start();
                }}
                />
            </h2>
            <div className="page-3-container">
              <div className="page3-left">
                <img src="src/images/BG/page3-1.jpg" alt="" />
              </div>
              <div className="page3-right">
                <p>India is architectural heritage is a reflection of its rich history, cultural diversity, and artistic excellence. From grand temples and majestic forts to intricate cave carvings and colonial-era structures, Indian architecture tells the story of ancient civilizations, mighty empires, and spiritual traditions.</p>
                <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Explore</span>
                  </button>
              </div>
            </div>
        </div>
      </div>

      <div className="page4">
        <div className="page4-content">
            <h2> 
              <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('✅ Explore more...!')
                    .start();
                }}
                />
            </h2>
            <div className="page-4-container" id='scroll-bar-4'>
              {
                Page4Buttons.map((button,index) => (
                  <article className="card" key={index}>
                      <div className="temporary_text">
                          <img src={button.img} alt="" />
                      </div>
                  <div className="card_content">
                      <span className="card_title">{button.title}</span>
                          <span className="card_subtitle"></span>
                          <p className="card_description">{button.discription}</p>
                      
                  </div>
                  </article>
                ))
              }
              
            </div>
             </div>
            </div>

       
      </div>

  )

}
