import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Productpage.css"

const Productpage = (props) => {
    useEffect(() => {
        window.scrollBy(0,0);
    });
    const toBeRendered = props.collection.map(item => {
        console.log(item);
        return (
        <li key={item.name} className="productpage__listItem">
            <img src={item.image} alt={item.alt} />
            <p>{item.name}</p>
            <p>{item.description}</p>
            <button>Add to Cart</button>
        </li>);
    });

    const {type} = useParams("type");
    if(type === "domperignon"){
        document
        .getElementsByTagName('meta')
        .namedItem('description')
        .setAttribute('content','Add Dom Perignon to cart!')
    }

    return (
        <>
            <article className="productpage">
                <ul className="productpage__list">
                    {toBeRendered}
                </ul>
            </article>
        </>
    )
}

export default Productpage;