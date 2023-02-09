import "./GalleryCard.css";
import getToBerenderedFigures from "./helpers/galleryCardHelper";

const GalleryCard = (props) => {
    return (
        <article className="galleryCard">
            {getToBerenderedFigures (props.items)}
        </article>
    )
}

export default GalleryCard;