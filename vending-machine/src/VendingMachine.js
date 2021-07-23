import {React} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

import NavBar from "./NavBar";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Soda from "./Soda";

const VendingMachine = () => {

    return (
        <div className="VendingMachine">
            <BrowserRouter>
                <NavBar />
                <Route exact path="/chips">
                    <Chips />
                </Route>
                <Route exact path="/soda">
                    <Soda />
                </Route>
                <Route exact path="/sardines">
                    <Sardines />
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;

