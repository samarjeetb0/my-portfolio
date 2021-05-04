import React from "react";
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Hi, I am Samar</h1>
                <Typed className="typed-text" strings={["Web Design","Web Development","Azure","AWS"]}
                typeSpeed={40} backSpeed={60} loop/>
                <a href="#" className="btn-main-offer">
                    Contact Me
                </a>
            </div>
        </div>
    )
}

export default Header;

// import React from "react";
// import { Jumbotron, Button } from 'reactstrap';

// function Header({ title, name }) {
//     return (
//         <Jumbotron fluid>
//             <h1>Hello, world! {title} : {name}</h1>
//             <p>
//                 This is a simple hero unit, a simple jumbotron-style component for calling
//                 extra attention to featured content or information.
//             </p>
//             <p>
//                 <Button variant="primary">Learn more</Button>
//             </p>
//         </Jumbotron>
//     );
// }
// export { Header };