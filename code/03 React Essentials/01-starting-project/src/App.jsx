import {useState, Fragment} from "react";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
    return (
        <>
            <Header/>
            <main>
                <CoreConcepts/>
                <Examples/>
            </main>
        </>
    );
}

export default App;


// use <> <> instead of <Fragment> </Fragment> for wrapping multiple elements