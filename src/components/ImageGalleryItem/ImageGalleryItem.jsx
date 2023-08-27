import React from "react";
import Modal from 'react-modal';
import css from "./ImageGalleryItem.module.css"
Modal.setAppElement('#root')
const customStyles = {
    overlay: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(115 141 236 / 75%)',
      },
      content: {
        position: 'relative',
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        border: 'none',
        background: 'transparent',
        overflow: 'visible',
        borderRadius: '4px',
        outline: 'none',
        padding: 0,
        maxWidth: '70vw'
      },
      image: {
        width: '100%',
        height: 'auto',
        display: 'block',
        borderRadius:"20px",
        paddingTop: '40px',
        paddingBottom: '40px', 
      },
  };
export class ImageGalleryItem extends React.Component{
    state ={
        isModalOpen: false
    }
    handleClickOnImage = () =>{
        this.setState({isModalOpen: true})
    }
    closeModal =()=>{
        this.setState({isModalOpen: false})
    }
    render(){
        const {isModalOpen} = this.state
        const {url, alt, largeImageURL}= this.props
        return(
            <li className={css.galleryItem}>
                <img className={css.galleryImage} src={url} alt={alt} onClick={this.handleClickOnImage}/>
                <Modal
                    isOpen={isModalOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >
                <img src={largeImageURL} alt={alt} onClick={this.closeModal} style={{width: "100%", borderRadius: "20px"}}/>
              </Modal>
            </li>
        )
    }
}