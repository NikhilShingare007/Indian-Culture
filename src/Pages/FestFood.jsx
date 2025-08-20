import NavBar from "../Components/NavBar"
import IndianFestFood from "../Components/CuisinePage/IndianFestFood.jsx"
import Typewriter from 'typewriter-effect';
import { PiGreaterThanThin } from "react-icons/pi";
export default function FestFood() {
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
                        typewriter.typeString('The Role of Food in Indian Festivals...!')
                        .start();
                    }}
                    />
                </h2>               
                <p >
                    <span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={handleHeritage}>Heritage</span> <PiGreaterThanThin className='greater'/> 
                    <span onClick={handleCuisine}>Cuisine</span> <PiGreaterThanThin className='greater'/>
                    Festive Foods and Indian Cuisine 
                </p>
            </div>
            <div className="cuisine-content">
                <div className="main-container">
                  <p>
                  In Indian festivals, food plays a central role, serving as a tangible expression of celebration, community, and cultural heritage, with each dish often holding deep symbolic meaning tied to the specific festival, signifying prosperity, happiness, and togetherness through shared meals; essentially, food is more than just nourishment, it is a way to connect with tradition and history during festive occasions.                   </p> 
                  <p>
                    Food is a powerful element in festivals and celebrations, transcending mere sustenance to become a symbol of cultural identity, tradition, and communal joy. In every corner of the globe, the culinary aspects of festivals are deeply embedded in artistic practices and hold a wealth of significance.
                    These unique dishes often embody historical narratives, religious beliefs, and regional diversity.
                  </p>
                  <h3>The Symbolism of Various Dishes</h3>
                  <ul>
                    <li>Sweets: Often given as gifts, they symbolise good luck and happiness. Mithai like Gulab Jamun and Jalebi are integral to any festive spread.</li>
                    <li>Spicy Dishes: Represent the zest for life and the warmth of Indian hospitality. Dishes like samosas and pakoras are perfect examples.</li>
                    <li>Rice Dishes: Often central to feasts, symbolising abundance and nourishment. Biryani and Pulao are staples at many celebrations.</li>
                  </ul>
                </div> 
            </div>  
        </div>
        <div className="fest-food">
        
        <IndianFestFood />
        </div>
    </div>
  )
}
