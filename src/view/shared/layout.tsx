import * as React from "react";
import {Link} from "react-router-dom";
import {Routes} from "../routes";

export const Layout = (props:{children:any}) =>
    <div>
        <Header/>
        {props.children}
    </div>;

const Header = () =>
    <nav>
        <li><Link to={Routes.home}>Home</Link></li>
        <li><Link to={Routes.about}>About US</Link></li>
    </nav>;