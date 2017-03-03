import * as React from "react";
import './App.css';
// note: React.Component<props, state>

export class App extends React.Component<{},any> {
    constructor() {
        super();

    }

    render(){
        return(
            <div>
                <h1>Helloo0 React i am back...</h1>
            </div>
        )
    }
}