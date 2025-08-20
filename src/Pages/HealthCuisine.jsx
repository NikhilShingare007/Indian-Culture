import NavBar from "../Components/NavBar"
import IndianCuisineBenifits from "../Components/CuisinePage/IndianCuisineBenifits.jsx"
import Typewriter from 'typewriter-effect';
import { PiGreaterThanThin } from "react-icons/pi";
import './HealthCuisine.css';
export default function HealthCuisine() {
  const handleHome = () => {
    window.location.href = '/'
}
const handleHeritage = () => {
    window.location.href = '/heritage';
}
const handleCuisine = () => {
    window.location.href = '/cuisine';
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
                        typewriter.typeString('Health Benefits of Indian Cuisine...!')
                        .start();
                    }}
                    />
                </h2>               
                <p >
                    <span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={handleHeritage}>Heritage</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={handleCuisine}>Cuisine</span> <PiGreaterThanThin className='greater'/>
                    IndianCuisineBenifits 
                </p>
            </div>
            <div className="cuisine-content">
                <div className="main-container">
                  <p>
                    Indian cuisine isn’t just about delicious flavors—it’s also packed with numerous health benefits due to its use of natural, nutrient-rich ingredients, medicinal spices, and diverse cooking techniques. Ayurveda, the ancient Indian science of life, has long emphasized the importance of a balanced diet for maintaining good health. Let’s explore the key health benefits of Indian food.
                  </p> 
                  <p>
                    Indian cuisine is considered healthy due to its high fiber content from lentils and vegetables, a variety of antioxidants from spices like turmeric and cumin, potential for heart-healthy fats from coconut oil (in South Indian dishes), and its emphasis on fresh ingredients, which contribute to overall nutritional value and can support digestion, weight management, and potentially reduce the risk of chronic diseases like cancer and heart disease;.                   
                  </p>
                  <p>
                    Ancient ingredients contain functional components like antioxidants, fibers, and probiotics. These components help in providing medicinal benefits and have healing properties that have been used for several years in our country.
                    Wisdom of traditional Indian food can be easily seen through its process of preparing food, and its preservation techniques.
                    For example, turmeric, an ancient spice, used in most Indian food is good for inflammation, digestion, and heart diseases.
                  </p>
                </div> 
            </div>    
        </div>
           
        <div>
            <IndianCuisineBenifits />
        </div>

    </div>
  )
}
