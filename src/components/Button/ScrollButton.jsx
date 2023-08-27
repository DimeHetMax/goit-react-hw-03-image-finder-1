import React from "react";
import css from "./Button.module.css"
export class ScrollButton extends React.Component{
    render(){
        const {onScroll,showScrollButton}= this.props
        return(
            <div>         
                {showScrollButton && (
                <button
                    className={css.loadMoreButton}
                    onClick={onScroll}
                >
                    &#8593;
                </button>
                )}
            </div>
        )
    }
}