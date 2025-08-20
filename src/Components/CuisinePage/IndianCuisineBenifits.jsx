
import HealthBenifitsCuisine from '../../Data/HealthBenifitsCuisine';
import './IndianCuisineBenifits.css'
const IndianCuisineBenifits = () => {
  return (
    <div >
      {
            HealthBenifitsCuisine.map((item, index) => (
                <div className="health-page-1" key={index}>
                    
                    <div className="content">
                        <h2>{item.title}</h2>
                        <div className="info">
                            <div className="content-left">
                                
                                <p>{item.description}</p>
                                <h3>Key Ingredients:</h3>
                                <ul>
                                    {item.keyIngredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="content-right">
                            
                                <h3>Health Benefits:</h3>
                                <ul>
                                    {item.healthBenefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            ))}
    </div>
  );
};

export default IndianCuisineBenifits;