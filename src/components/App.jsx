import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { ScrollButton } from "./Button/ScrollButton";
import { Loader } from "./Loader/Loader";
import { API } from "../API";

export class App extends React.Component{
  state = {
    totalHits:null,
    images:[],
    query: "", 
    page: 1,
    showScrollButton: false,
    isLoading: false,
  }
  handleQuery=(value) =>{
    // const inputString = "1232783535/cat";
    // const parts = inputString.split('/')
    // console.log(parts[1]);
    this.setState({query:value, page:1,images:[]})
  }
  onLoadMoreButton = ()=>{
    this.setState(prevState =>{
      return{page: prevState.page + 1}
    })
  }
  handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  handleScroll = () => {
    if (window.scrollY > 300) {
      this.setState({ showScrollButton: true });
    } else {
      this.setState({ showScrollButton: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  componentDidUpdate(prevProps, prevState){
    const {query,page} = this.state
   
    if(prevState.query !== query || prevState.page !== page){
      this.setState({isLoading: true})
      API(query, page).then(data =>
          this.setState(prevState =>{
              return(
                { 
                  images: [...prevState.images, ...data.hits],
                  totalHits: data.totalHits,
                }
              ) 
          })
      ).catch().finally(()=>{this.setState({ isLoading: false,})})
    }
  }
  render(){
    const {images,totalHits,showScrollButton, isLoading} =this.state
    const lastPictures = totalHits > images.length;
    return(
      <div className="container">
        <Searchbar onSubmit={this.handleQuery}/>
        
        {isLoading && (<div className="loaderContainer"><Loader/></div>)}
       
        <ImageGallery imagesArray={images}/>
        <div className="buttonContainer">
            {images.length > 0 && lastPictures &&(<Button onClick={this.onLoadMoreButton}/>)}
            
            {this.state.showScrollButton && (
             <ScrollButton onScroll={this.handleScrollToTop} showScrollButton={showScrollButton}/>
            )}
        </div>
      </div>
    )
  }
}

