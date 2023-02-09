import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Productpage from "../pages/Productpage"
import "./App.css"
const App = () => {

    const [collectionForProductPage, setCollectionFromProductPage] = useState([]);
    const onGalleryCardClicked = (collection) => {
        setCollectionFromProductPage(collection);
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage onGalleryCardClicked={onGalleryCardClicked}/>} />
                <Route path="/product/;type" element={<Productpage collection={collectionForProductPage}/>} />
            </Routes>

        </>
    );
}

export default App;