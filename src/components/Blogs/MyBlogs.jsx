import { useState } from 'react';
import Screenshot from '../../assets/Screenshot.png';
import Screenshot2 from '../../assets/Screenshot2.png';
import Screenshot3 from '../../assets/Screenshot3.png';
// import blog4 from '../../assets/blog4.jpeg';
// import blog5 from '../../assets/blog5.jpeg';
import './MyBlogs.css';

const MyBlogs = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);

  const blogs = [
    {
      title: "Romanticize your leadership style",
      shortDescription: "Short description for Blog 1",
      fullDescription: "Full description for Blog 1. This is where the longer version of the blog description will go.",
      image: Screenshot // Reference from public folder
    },
    {
      title: "Blog 2",
      shortDescription: "Short description for Blog 2",
      fullDescription: "Full description for Blog 2. This is where the longer version of the blog description will go.",
      image: Screenshot2,
    },
    {
      title: "Blog 3",
      shortDescription: "Short description for Blog 3",
      fullDescription: "Full description for Blog 3. This is where the longer version of the blog description will go.",
      image: Screenshot3,
    },
    // {
    //   title: "Blog 4",
    //   shortDescription: "Short description for Blog 4",
    //   fullDescription: "Full description for Blog 4. This is where the longer version of the blog description will go.",
    //   image: blog4,
    // },
    // {
    //   title: "Blog 5",
    //   shortDescription: "Short description for Blog 5",
    //   fullDescription: "Full description for Blog 5. This is where the longer version of the blog description will go.",
    //   image: blog5,
    // },
  ];

  const toggleReadMore = (index) => {
    if (expandedBlog === index) {
      setExpandedBlog(null); // Collapse the description if it's already expanded
    } else {
      setExpandedBlog(index); // Expand the clicked blog
    }
  };

  return (
    <section className="blogs-section">
      <h1 className="blogs-title">My Blogs</h1>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3>{blog.title}</h3>
            <p>
              {expandedBlog === index ? blog.fullDescription : blog.shortDescription}
            </p>
            <button className="read-more-button" onClick={() => toggleReadMore(index)}>
              {expandedBlog === index ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyBlogs;
