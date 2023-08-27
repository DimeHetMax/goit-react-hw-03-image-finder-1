import React from "react";
import { FaSearch } from 'react-icons/fa';
import css from "./Searchbar.module.css"

export class Searchbar extends React.Component{
    state={
        query: "",
    }
    handleQueryChange = (event)=>{
        this.setState({ query: event.target.value.toLowerCase() });
    }
    handleSearchbar = (event) =>{
        event.preventDefault()
        if(this.state.query.trim() === ""){
            return
        }
        this.props.onSubmit(this.state.query);
        this.setState({query: ""})
      }
    render(){
        return (
            <header className={css.searchbar}>
              <form className={css.form} onSubmit={this.handleSearchbar}>
                <div className={css.inputContainer}>
                  <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.query}
                    onChange={this.handleQueryChange}
                  />
                  <button
                    type="submit"
                    className={css.button}
                    onClick={this.handleSearchbar}
                  >
                    <FaSearch />
                  </button>
                </div>
              </form>
            </header>
          );
    }
}