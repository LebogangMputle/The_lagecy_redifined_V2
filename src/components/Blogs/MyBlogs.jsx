import React from 'react';
import './MyBlogs.css';

const MyBlogs = () => {
  const blogs = [
    {
      title: "Blog 1",
      description: "Description for Blog 1",
      image: "/assets/blog1.png", // Relative path from public folder
    },
    {
      title: "Blog 2",
      description: "Description for Blog 2",
      image: "/assets/blog2.PNG",
    },
    {
      title: "Blog 3",
      description: "Description for Blog 3",
      image: "/assets/blog3.jpeg",
    },
    {
      title: "Blog 4",
      description: "Description for Blog 4",
      image: "/assets/blog4.jpeg",
    },
    {
      title: "Blog 5",
      description: "Description for Blog 5",
      image: "/assets/blog5.jpeg",
    },
  ];
  

  return (
    <section className="blogs-section">
      <h1 className="blogs-title">My Blogs</h1>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyBlogs;
