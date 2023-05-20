import React from "react";
import Blog from "./Blog/Blog";
import News from "./News/News";
import Others from "./Others/Others";

const Blogs = () => {
    return (
        <div>
            <Blog />
            <News />
            <Others />
        </div>
    );
};

export default Blogs;