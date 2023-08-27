import React from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css"
export class ImageGallery extends React.Component{
    render(){
        const {imagesArray}= this.props
        return(
            <ul className={css.gallery}>
                {imagesArray.map(({id,webformatURL, tags,largeImageURL})=> <ImageGalleryItem key={id} url={webformatURL} alt={tags} largeImageURL={largeImageURL}/>)}
               
            </ul>
        )
    }
}