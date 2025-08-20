import NavBar from '../Components/NavBar'
import './Heritage.css'
import { PiGreaterThanThin } from "react-icons/pi";
import Typewriter from 'typewriter-effect';

export default function Heritage() {
    const handleHome = () => {
        window.location.href = '/'
    }
    const handleCuisine = () => {
        window.location.href = '/cuisine'
    }
  return (
    <div>
        <div className="nav">
            <NavBar />
        </div>

        <div className="page-1"> 
            <div className="heading">
                <h2>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Indian Heritage: A Legacy of Culture and Tradition...!')
                        .start();
                    }}
                    />
                </h2>               
                <p ><span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> Heritage</p>
            </div>
            <div className="content">
                <div className="content-left">
                    <img src="src/images/BG/leftheritage.webp" alt="" />
                    <p>India is a land of diverse cultures, traditions, and history that spans thousands of years. From ancient temples to vibrant festivals, from classical dance forms to exquisite handicrafts, Indian heritage is a treasure trove of artistic and cultural brilliance.</p>
                </div>
                <div className="content-right">
                    <h3>India’s Glorious Heritage : </h3>

                    <p>
                    India heritage is a vibrant tapestry woven with history, culture, traditions, and diversity. Spanning thousands of years, it reflects the influence of various dynasties, religions, and civilizations that have shaped the nation. From awe-inspiring monuments like the Taj Mahal, Ajanta & Ellora Caves, and the temples of Khajuraho to the majestic forts and palaces of Rajasthan, India architectural wonders stand as timeless symbols of its glorious past.

                            The country is a spiritual hub, being the birthplace of Hinduism, Buddhism, Jainism, and Sikhism. Ancient traditions, yoga, and festivals like Diwali, Holi, and Navratri bring people together, celebrating unity in diversity. India classical arts, including Bharatanatyam, Kathak, and Carnatic music, continue to thrive, while its vibrant handicrafts and textiles showcase the unmatched skills of its artisans.

                            With a legacy of wisdom found in scriptures like the Vedas and epics like the Ramayana and Mahabharata, Indian heritage is not just about the past—it is a living tradition that continues to inspire and evolve.
                   </p>
                </div>
            </div>

        </div>
        <div className="page-2">
            <div className="heading">
                <h2>
                    {
                         <Typewriter
                         onInit={(typewriter) => {
                             typewriter.typeString('India’s Glorious Heritage Categorized into the following types  : ')
                             .start();
                         }}
                      />
                      }  
                    </h2>
            </div>
            <div className="page-2-content">
                <div className="page-2-left">
                    <h3>1.  Historic Monuments & Architecture</h3>
                    <p>India is home to magnificent architectural wonders like the Taj Mahal, Qutub Minar, Sun Temple, and Ajanta-Ellora Caves, reflecting the artistic genius of our ancestors.</p>
                    <h4>For example :</h4>
                    <ul>
                        <li>
                            <p>1. UNESCO World Heritage Sites (Taj Mahal, Qutub Minar, Hampi, etc.)</p>
                        </li>
                        <li>
                            <p>2. Temples, Forts, and Palaces (Khajuraho, Jaipur Palaces, Sun Temple)</p>
                        </li>
                    </ul>
                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Explore</span>
                  </button>
                </div>
                <div className="page-2-right">
                    <img src="src/images/HeritagePage/jalmahal.jpg" alt="" />
                </div>
            </div>
        </div>
        
        <div className="page-3">
            <div className="page-3-content">
                <div className="page-3-right">
                        <img src="src/images/HeritagePage/madhubani.jpg" alt="" />
                </div>
                <div className="page-3-left">
                    <h3>2.  Indian Art & Craft</h3>
                    <p>India’s art and craft traditions are centuries old, deeply rooted in its diverse cultures and regional influences. They reflect the country’s history, mythology, and daily life.</p>
                    <h4>For example :</h4>
                    <ul>
                        <li>
                            <p>1. Traditional Paintings</p>
                        </li>
                        <li>
                            <p>2. Classical Dance Forms (Bharatanatyam, Kathak, Odissi)</p>
                        </li>
                    </ul>
                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Explore</span>
                    </button>
                </div>
        
            </div>
        </div>
        <div className="page-2">
            <div className="page-2-content">
                <div className="page-2-left">
                    <h3>3.  Indian Cuisine</h3>
                    <p>Indian cuisine is diverse, flavorful, and deeply rooted in tradition. It varies by region, influenced by geography, climate, and history.</p>
                    <p>Indian cuisine blends tradition, taste, and health, making it one of the most loved cuisines worldwide! 🍽️</p>
                    <h4>For example :</h4>
                    <ul>
                        <li>
                            <p>1. Tamil Nadu – Dosa 🥞🥥</p>
                        </li>
                        <li>
                            <p>2. Maharashtra – Vada Pav 🍔🔥</p>
                        </li>
                    </ul>
                    <button className="learn-more" onClick={handleCuisine}>
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Explore</span>
                  </button>
                </div>
                <div className="page-2-right">
                    <img src="src/images/HeritagePage/food.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className="page-3">
            <div className="page-3-content">
                <div className="page-3-right">
                        <img src="src/images/HeritagePage/yoga.jpg" alt="" />
                </div>
                <div className="page-3-left">
                    <h3>4.  Spirituality & Yoga</h3>
                    <p>India, the birthplace of yoga and spirituality, has practiced meditation and self-realization for over 5,000 years. Yoga, mentioned in the Rigveda and systematized by Patanjali (200 BCE), promotes physical, mental, and spiritual well-being. Rishikesh and Varanasi are key spiritual centers, and June 21 is celebrated as International Yoga Day. 🕉️</p>
                    <h4>For example :</h4>
                    <ul>
                        <li>
                            <p>1. Role of Yoga & Meditation (Ayurveda, Vipassana, Patanjali)</p>
                        </li>
                        <li>
                            <p>2. Spiritual Destinations (Varanasi, Rishikesh, Bodh Gaya)</p>
                        </li>
                    </ul>
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
  )
}
