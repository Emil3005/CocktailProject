<div className="Content">
            {items.map(item =>(
                <h2 key={item.idDrink}>
                    <ul className='vertical'>
                        <li>
                        <ul className ='horizontal'>
                        <li className='Title'> {item.strDrink} </li>
                        <li>
                        <img src={item.strDrinkThumb} alt="" className="CocktailPicture"/> </li>
                                <ul className='Ingredients'>
                                <li> Ingredient1  = {item.strIngredient1}</li>
                                <li> Ingredient2  = {item.strIngredient2}</li>
                                <li> Ingredient3  = {item.strIngredient3}</li>
                                <li> Ingredient4  = {item.strIngredient4}</li>
                                <li> Ingredient5  = {item.strIngredient5}</li>
                                <li> Ingredient6  = {item.strIngredient6}</li>
                                </ul>
                        </ul>
                        </li>
                    </ul>
                </h2>
            ))}
        </div>