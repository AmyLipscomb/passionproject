import React from "react";
const Home = () => {

    return (
        <body>
        <header>
            <h1>Amy's Es<span class="sen">sen</span>tials</h1>
            
    
          {/* <!--Changed the 'div' tag to a navigation tag--> */}
            <nav>
                <ul>
                    {/* <!--I learned how important the 'li'tag is. Including this tag, allowed the links on the right side of the header, to work properly. So, when you click on the links, you will be directed to the paragrah that correlates to the topic you selected.--> */}
                    <li>
                    <a href="#books">Books</a>
                    &nbsp;
                </li>
                <li>
                    <a href="#movies">Movies</a>
                    &nbsp;
                </li>
                <li>
                    <a href="#selfcare">Selfcare</a>
                </li>
                </ul>
            </nav>
        </header>
        </body>

    )


}

export default Home;

       // <div className="container">
        //     <body>
        //         <p className="mainPageTitle"> Amy's Essentials</p>
        //     </body>
        // </div>