import React from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends React.Component{
    render(){
        return(
            <ul className="gallery">
                <ImageGalleryItem/>
            </ul>
        )
    }
}