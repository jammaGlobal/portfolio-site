import "./blog.scss"
import {
    blogPosts,
} from "../data";
import BlogCard from "./BlogCard"

export default function Blog(){
    return(
        <div className="blog" id="blog">
            <div className="container">
                <div className="blog-section">
                    <h2>blog</h2>

                    <div className="grid">
                            {blogPosts.map((blogPost, index) => (
                                <div className="wrapper" >
                                    <BlogCard key={index}
                                    
                                    heading={blogPost.title}
                                    paragraph={blogPost.para}
                                    imgUrl ={blogPost.img}
                                    projectLink={blogPost.link}

                                    ></BlogCard>
                                </div>
                                

                            ))}
                    </div>

                </div>
            </div>
        </div>
    )
}