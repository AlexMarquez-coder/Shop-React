// Helper that loads images from data objects and set them in figures
let iterator = 1;
let classToBeAdded = "";
function getToBerenderedFigures(drinks) {
    let drinksToBerendered = drinks.map ( drink => {
        switch (iterator) {
            case 1:
                classToBeAdded = "galleryCard__figure galleryCard__figure--big";
                break;
            case 2:
                classToBeAdded += "galleryCard__figure galleryCard__figure--middle";
                break;
            case 3:
                classToBeAdded += "galleryCard__figure galleryCard__figure--middle";
                break;
            default:
                classToBeAdded = classToBeAdded += "galleryCard__figure galleryCard__figure--small";
                break;
        }
        iterator += 1;
    
        return (
            <figure key={drink.img} className={classToBeAdded}>
                <img className="galleryCard__img" src={drink.image} alt={drink.alt} />
            </figure>
      );
    });
    iterator = 1;
    return drinksToBerendered;
}

export default getToBerenderedFigures;