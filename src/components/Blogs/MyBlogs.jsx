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
      shortDescription: "The building blocks: It's the month of love, so we're going to talk about relationships! Relationships are beautiful; they provide social support, belonging and can be a source of hapiness and fulfilment. they also help you learn and grow and can create a sense of purpose. When we think about relationships we often think of romantic partnerships or close personal connections. But as business owners, it is important to think of how running a good business is like nurturing a relationship. Lets talk about what helps- and what blocks- a good business or relationship.",
      fullDescription: "The building blocks: It's the month of love, so we're going to talk about relationships! Relationships are beautiful; they provide social support, belonging and can be a source of hapiness and fulfilment. they also help you learn and grow and can create a sense of purpose. When we think about relationships we often think of romantic partnerships or close personal connections. But as business owners, it is important to think of how running a good business is like nurturing a relationship. Lets talk about what helps- and what blocks- a good business or relationship. 'leaderhsip steers the ship' Every successful relationship has the key functions that make iy work. Similarly, in any given business, functions such as trust, compromise, support and flexibility- to name just a few- can keep the ship running smoothly. if these functions are the sails, effective leaderhsip is the rudder that steers the ship. leadership plays a critical role because it sets the tone for communication, decision-making and problem-solving, and influences the dynamics or power and trust. Good leadership skills can help foster a  positive and productive relationship, while poor leadership can contribute to conflict and dysfunction. in internal auditing, there is a term known as 'tone at the top'; the idea that the tone set by the senior leaders affects the overall culture and behavior of the organization and influences how employees at all levels approach their work. As a business owner or leader, if you are passionate about what you do, and if you love humanity, you will understand that you are in a position to serve and work alongside others. putting yourself in your employees' shoes to create the right control environment because your employess are just as important to your business as you are. So, when you approach running your business from the standpoint of servanthood, you'll be motivated to create an environment where your employees can be themselves. Employess typically thrive in this kind of environment. creating a sense of belonging is a positive effect that will cascade down to other channels or segments of your business, which is crucial for improving your company's overall productivity. 'leadergsip is holding hands and letting go' A servant leadership approach creates a workplace culture where employees are empowered to take initiative and contribute to the growth of the company, which leades to increased motivation, productivity and ultimately, success. Sadly, a lot of small business owners get into mode because they have not yet mastered the art of having a servant leadership mindset. Instead of an even balance of leadership that invites proactivity and input, many owners take on a more controlling, self-reliant approach without even realizing it. of course, this is understandable; you've built your business from the ground up and you've put everything you have into it- it's your baby. But this may mean that you tend to treat your employees like toddlers too, instead of encouraging to take initiative. this displays a lack of trust, making it hard to create an environment where the business can grow. And if you dob't recognize this soon enough, your company lies stagnant because your staff are not channeled to be proactive players. instead your should create a cycle where you give birth to something, and train it to crawl, walk and run triumphantly without you needing to constantly watch over it. Involving your employees on decision-making processes and providing them opportunities of ownership in their work can make them more committed and accountable. When there's open communicatopn, trust and mutual respect, collaboratopm between leaders and employees will tranform your company's productivity. Additionally when leaders and employees work together, they can bring different perspectives, skill sets and expiriences to the table, leading to more creative and effective solutions. This will allow for the birthing of something new, which will in turn pave the way for movement towards tre expansion and growth. Every good relationship needs some degree of release and flexibility. create a functional system where there is encouragement and support and then let go and trust. In essence, the relationship between a business owner and their employees determines the success of a company. As the owner, it helps to approach the business from a servant kleadership perspective, valuing your employees and fostering an environment where they feel supported and empowered. By doing so, yoy can create a positive workplace culture of encouragement, productivity and success. At the same time, remember that trust and compromise are essential components of any healthy relationship. When both parties work together, your business can thrive and achieve its full potential. Ultimately, romanticize your leaderhsip style and the results will be a successful and fulfilling relationship for all involved!",
      image: Screenshot // Reference from public folder
    },
    {
      title: "Compliance is key",
      shortDescription: "Hey there, business owners! For the next two months we will be tackling the issue of compliance and the importance of ensuring that your business or business idea complies with the relevant legislation within which it operates. Yes, we know it might not be the most exciting aspect of running a business, but it's crucial to prioritize it in order to avoid any legal complications and fines.",
      fullDescription: "Hey there, business owners! For the next two months we will be tackling the issue of compliance and the importance of ensuring that your business or business idea complies with the relevant legislation within which it operates. Yes, we know it might not be the most exciting aspect of running a business, but it's crucial to prioritize it in order to avoid any legal complications and fines. Let's take a moment to imagine what it would be like to run your business without taking into consideration and applying the relevant laws and regulations that provide guidance. It's not a pretty picture. Your business could face hefty fines, legal action, and reputational damage, all of which could be detrimental to your success. Plus, the headache and stress of dealing with legal complications could take away from the time and resources you need to focus on growing your business. So, what does compliance involve? It includes aligning your business operations or processes in a manner that it takes into consideration all the laws, rules, and regulations that govern your industry, location, and operations. This includes registering your business, complying with employment laws, paying taxes, ensuring workplace health and safety, and protecting customer data privacy. For small businesses, compliance is especially important. Small businesses often have limited resources, so it's essential to prioritize compliance to avoid any unnecessary costs or setbacks. And because small businesses are often more deeply rooted in their communities, compliance can help build trust and respect with customers and stakeholders. Benefits of compliance As tedious as compliance can be, it also had its own benefits such as: • For potential investors of funders, compliance is non-negotiable meaning if you are complying your chances of attracting opportunities that will enable your growth are increased. • Tax compliance ensures that you are considered for funding opportunities, tax breaks as well as other business support incentives. • Avoiding legal penalties. • Improves business operations and safety as well as higher employee retention. At the end of the day, compliance is an investment in your business's success. It might not be the most exciting investment, but it's one that will pay off in the long run. If you need assistance with legal compliance for your small business, Legacy Redefined is your one-stop house. Contact us to learn more about how we can help you to integrate compliance within your business operations and processes.",
      image: Screenshot2,
    },
    {
      title: "The essential role for risk management",
      shortDescription: "When entrepreneurs embark on a their journey of starting a business, it's natural to focus on dreams and aspirations. After all, thats the glamour and drive of starting a business. But there is a critical aspect that can make or break your glorious venture-risk management. Way to often, many of us start our business without understanding the potential pitfalls that lie ahead. Realistically, the significance of risk management cannot be stated enough, especially for small and informal businesses.",
      fullDescription: "When entrepreneurs embark on a their journey of starting a business, it's natural to focus on dreams and aspirations. After all, thats the glamour and drive of starting a business. But there is a critical aspect that can make or break your glorious venture-risk management. Way to often, many of us start our business without understanding the potential pitfalls that lie ahead. Realistically, the significance of risk management cannot be stated enough, especially for small and informal businesses. For starters, did you know that less that half of businesses that startup have a chance of survivng beyond the first five years of operation? According to the university of the western Cape, South Africa startups face an alarming failure rate of 70%-80% within the first five years than anywhere else in the world.However, this number can be greatly reduced with effective risk management. Small businesses tend to overlook certainareas of risk that might have a significant impact on their operations. These can include cybersecurity risks, supply chain vulnerabilities, potential legal disputes and economic fluctuations. Most commonly, businesses stumble due to financial challenges such as cash crush, lack of demand or fierce competition. the good news is that you can tip the odds in your favor by deploying a savvy risk management strategy to spot these pitfalls before they snag your success. if you're a small manufacturing business, for example, you might benefit from monitoring your cash flow regularly and setting up financial reserves, you can anticipate periods of reduced income and ensure you have the funds to cover operational expenses. Moreover, it's only operational factors that need close consideration; we need to take a careful look at the potential shifts in laws and regulations as it is just as vital. in fact, being aware of the laws and regulations pertaining to your business is a crucial step you should take even before getting started with your business. Admittedly, risk management does require a good degree of know-how to implement it effectivily. A well-crafted risk management strategy involves a combination of undertsanding your business' unique weak spots, keeping an eye on whats happening around you, analyzing finances and anticipating potential shifts in the market and industry. It's essentially about being proactive about identifying and staying ahead of risks before they materialize. But the payoff in terms of long-term success and stability can be well worth the effort. But if you're into working out tghese processes just yet, that's okay! This where Legacy Redefined comes in to assist. We offer training for business like yours. our aim is to empower you the skills to handke and identify your own risks. We'll walk you throught the right moves to make. With our support, you can establish solid plans and shield your busniess frompotential harm. In essence, the journey to success is paved with informed choices. Being two steps forward will allow you to land on your feet when you're caught off guard. And while the road may require effort, dedication and ongoing education, the rewards-seeing your dreams come to life- is well worth the pursuit",
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
