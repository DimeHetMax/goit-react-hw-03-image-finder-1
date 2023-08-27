import React from "react";
import css from "./Button.module.css"
export class Button extends React.Component{
    render(){
        const {onClick} = this.props
        return(
            <button className={css.loadMoreButton} type="button" onClick={onClick}>Load more</button>
        )
    }
}