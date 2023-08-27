import React from "react";
import { RotatingLines } from  'react-loader-spinner'

export class Loader extends React.Component{
    render(){
        return(
            <RotatingLines
                strokeColor="#0056b3"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={true}
            />
        )
    }
}