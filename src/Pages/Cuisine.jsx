import NavBar from "../Components/NavBar"
import Typewriter from 'typewriter-effect';
import { PiGreaterThanThin } from "react-icons/pi";
import './Cuisine.css'
export default function Cuisine() {
    const handleHome = () => {
        window.location.href = '/'
    }
    const handleHeritage = () => {
        window.location.href = '/heritage';
    }
    const handleHealth = () => {
        window.location.href = '/healthCuisine';
    }
    const handleFest = () => {
        window.location.href = '/festFood';
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
                        typewriter.typeString('Indian Cuisine: A Culinary Journey Through Flavors...!')
                        .start();
                    }}
                    />
                </h2>               
                <p ><span onClick={handleHome}>Home</span> <PiGreaterThanThin className='greater'/> <span onClick={handleHeritage}>Heritage</span> <PiGreaterThanThin className='greater'/> Cuisine</p>
            </div>
            <div className="content">
                <div className="content-left">
                    <img className="left-img" src="src/images/CuisinePage/misal pav.webp" alt="" />
                    <p>Indian cuisine is one of the most diverse and flavorful culinary traditions in the world. Rooted in ancient history and influenced by various cultures, it offers a blend of aromatic spices, diverse cooking techniques, and a vast variety of ingredients. From rich curries to crispy snacks and delectable sweets, Indian food is known for its complexity and depth of flavor.</p>
                </div>
                <div className="content-right">
                    <h3>Historical Influence : </h3>
                    <p>
                    Indian cuisine has evolved over thousands of years, influenced by various dynasties, traders, and invaders. The Aryans introduced the concept of simple, sattvic (pure) food, while the Mughals brought rich, creamy gravies, kebabs, and biryanis. The Portuguese introduced ingredients like potatoes, tomatoes, and chilies, which are now essential in Indian cooking. The British popularized tea, making it an integral part of Indian culture.
                   </p>
                    <h3>Global Influence and Popularity : </h3>
                    <p>Indian cuisine has gained worldwide fame, with Indian restaurants found in every major city across the globe. Dishes like Chicken Tikka Masala, Naan, and Biryani have become international favorites. Many Western chefs and food lovers embrace Indian spices and cooking techniques in their dishes.                   </p>
                </div>
            </div>
        </div>
        
        <div className="cuisine-page-2">
            <div className="cuisine-page-2-content">
                <div className="cuisine-page-2-left-Cuisine">
                    <h3>1.  Key Ingredients and Spices</h3>
                    <p>Spices are the heart of Indian cuisine, used not just for flavor but also for their medicinal properties in Ayurveda.</p>
                    <h4>Some essential spices include :</h4>
                    <ul>
                        <li>
                            <p>1. Turmeric (anti-inflammatory, adds color)</p>
                        </li>
                        <li>
                            <p>2. Cumin (earthy aroma, aids digestion)</p>
                        </li>
                        <li>
                            <p>3. Coriander (citrusy flavor, cooling effect)</p>
                        </li>
                        <li>
                            <p>4. Cardamom (fragrant, used in desserts and chai)</p>
                        </li>
                        <li>
                            <p>5.Mustard Seeds (nutty, used in tempering dishes)</p>
                        </li>
                        <li>
                            <p>6.Asafoetida (Hing) (strong aroma, enhances flavor in lentil dishes)</p>
                        </li>
                        <li>
                            <p>7. Fenugreek (bitter taste, used in curries and breads)</p>
                        </li>
                    </ul>
                    <p>Staple ingredients vary by region. Rice, wheat, lentils, dairy, and legumes form the backbone of Indian meals. Vegetables like eggplant, okra, and gourds, along with fruits such as mangoes, bananas, and coconuts, are widely used.</p>
                </div>
                <div className="cuisine-page-2-right-cuisine">
                    <img src="src/images/CuisinePage/spices.webp" alt="" />
                </div>
            </div>
        </div>
        <div className="page-3">
            <div className="page-3-content">
                <div className="page-3-right">
                        <img src="src/images/CuisinePage/cooking.webp" alt="" />
                </div>
                <div className="page-3-left">
                    <h3>2.  Cooking Techniques</h3>
                    <p>Indian cooking employs a variety of techniques, such as:</p>
                    <ul>
                        <li>
                            <p>1. Tadka (Tempering): Spices are fried in hot oil or ghee to release their aroma and then added to dishes.</p>
                        </li>
                        <li>
                            <p>2. Dum (Slow Cooking): Used in biryanis, where ingredients cook together in a sealed pot.</p>
                        </li>
                        <li>
                            <p>3. Bhuna (Sautéing): Spices and ingredients are fried slowly to deepen their flavors.</p>
                        </li>
                        <li>
                            <p>4. Tandoor (Clay Oven Cooking): Used for making naan, tandoori chicken, and kebabs.</p>
                        </li>
                        <li>
                            <p>5. Fermentation: Used in making dosa, idli, and yogurt-based dishes.</p>
                        </li>
                    </ul>
                </div>
        
            </div>
        </div>
        <div className="cuisine-page-2">
            <div className="cuisine-page-2-content">
                <div className="cuisine-page-2-left-Cuisine">
                    <h3>3.  Meal Structure and Eating Habits</h3>
                    <p>A traditional Indian meal consists of a balanced combination of flavors and textures. It typically includes:</p>
                    <ul>
                        <li>
                            <p>1. Grains: Rice, roti, or paratha</p>
                        </li>
                        <li>
                            <p>2. Lentils: Dal, sambhar, or rajma</p>
                        </li>
                        <li>
                            <p>3. Vegetables: Stir-fried, curried, or pickled</p>
                        </li>
                        <li>
                            <p>4. Protein: Paneer, chicken, fish, or mutton</p>
                        </li>
                        <li>
                            <p>5. Side Dishes: Chutneys, pickles, and yogurt-based raita</p>
                        </li>
                        <li>
                            <p>6. Sweets: Gulab jamun, rasgulla, or kheer</p>
                        </li>
                        <li>
                            <p>7. Beverages: Masala chai, lassi, or filter coffee</p>
                        </li>
                    </ul>
                </div>
                <div className="cuisine-page-2-right-cuisine">
                    <img src="src/images/CuisinePage/Meal.webp" alt="" />
                </div>
            </div>
        </div>
        <div className="page-3">
            <div className="page-3-content">
                <div className="page-3-right">
                        <img src="src/images/CuisinePage/Health Benefits.webp" alt="" />
                </div>
                <div className="page-3-left">
                    <h3>4.  Health Benefits of Indian Cuisine </h3>
                    <p>Indian cuisine isn’t just about delicious flavors—it’s also packed with numerous health benefits due to its use of natural, nutrient-rich ingredients, medicinal spices, and diverse cooking techniques. Ayurveda, the ancient Indian science of life, has long emphasized the importance of a balanced diet for maintaining good health. </p>
                    <ul>
                        <li>
                            <p>1. Lentils & Pulses: High in protein, perfect for vegetarians.</p>
                        </li>
                        <li>
                            <p>2. Curd/Yogurt: Probiotic, aids digestion.</p>
                        </li>
                        <li>
                            <p>3. Ghee: Rich in good fats, enhances brain function.</p>
                        </li>
                        <li>
                            <p>4. Coconut & Nuts: Energy-boosting, good for heart health.</p>
                        </li>
                        <li>
                        <h5 onClick={handleHealth}>Let’s explore the key health benefits of Indian food. ↗️</h5>
                        </li>
                    </ul>
                    
                </div>
        
            </div>
        </div>
        <div className="cuisine-page-2">
            <div className="cuisine-page-2-content">
                <div className="cuisine-page-2-left-Cuisine">
                    <h3>5.  The Role of Food in Festivals</h3>
                    <p>Food in Indian festivals is much more than just a meal—it is a symbol of love, devotion, and cultural pride. It brings people together, strengthens traditions, and enhances the joy of celebrations. Each festival has its own signature dishes, making every occasion unique and special.</p>
                    <p>some examples : </p>
                    <ul>
                        <li>
                            <p>1. Diwali: Sweets like Ladoo, Kaju Katli, and Jalebi.</p>
                        </li>
                        <li>
                            <p>2. Holi: Gujiya, Thandai (flavored milk with nuts & spices).</p>
                        </li>
                        <li>
                            <p>3. Eid: Biryani, Sheer Khurma (vermicelli dessert).</p>
                        </li>
                        <li>
                            <p>4. Navratri: Sattvic fasting food like Sabudana Khichdi.</p>
                        </li>
                        <li>
                            <p>5. Onam (Kerala): The grand Sadya, a 26-dish vegetarian feast.</p>
                        </li>
                        <li>
                        <h5 onClick={handleFest}>Let’s explore the diff. foods on diff. Occasion. ↗️</h5>
                        </li>

                    </ul>
                </div>
                <div className="cuisine-page-2-right-cuisine">
                    <img src="src/images/CuisinePage/Meal.webp" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
