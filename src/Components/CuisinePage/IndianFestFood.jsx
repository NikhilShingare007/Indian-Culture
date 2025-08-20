import FestivalFoodRoles from '../../Data/FestivalFoodRoles';

export default function IndianFestFood() {
  return (
    <div className="festival-food-container">
      {FestivalFoodRoles.map((item, index) => (
        <div className="health-page-1" key={index}>
          <div className="content">
            <h2>{item.title}</h2>
            <div className="info">
              <div className="content-left">
                <p>{item.description}</p>
                <h3>Examples:</h3>
                <ul>
                  {item.examples.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="content-right">
                <h3>Significance:</h3>
                  <p>{item.significance}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}