import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { API } from "../API";

export class App extends React.Component{
  state ={
   array:[], 
   query: "", 
   page: 1,
  }
  handleForm=(value) =>{
    this.setState({query:value})
  }
  componentDidUpdate(prevProps, prevState){
    const {query,page} = this.state
    if(this.state.query !== prevState.query){
      API(query, page).then(data => this.setState(prevState =>{
        return(
          { array: [...prevState.array, ...data.hits]}
        )
       
      }))
    }
  }
  render(){
    return(
      <div>
        <Searchbar onSubmit={this.handleForm}/>
        <ImageGallery/>
      </div>
    )
  }
}

