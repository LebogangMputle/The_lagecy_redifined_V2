import React from 'react'
import './Insights.css'
import sampleVideo from "../../assets/video.mp4"

const Insights = () => {
  return (
    <div className='insights'>
        <h1>Acknowledgement & Insights</h1>
        <div className='grid-container'>
            <div className='company-insights'>
                <h2>Company Insights</h2>
                <p>Our company is dedicated to fostering growth and success within the business community. We specialize in providing comprehensive education and training programs tailored to meet the needs of businesses and institutions of all sizes. Our curriculum is designed to empower entrepreneurs, business leaders, and employees with the knowledge and skills necessary to thrive in today’s competitive marketplace.</p>
                <p>Through our expert-led courses, workshops, and seminars, we cover a wide range of topics including business strategy, marketing, finance, leadership, and innovation. Our hands-on approach ensures that participants not only learn theoretical concepts but also gain practical experience that can be immediately applied to their own business ventures.</p>
                <p>In addition to our educational offerings, we partner with businesses to provide customized consulting services aimed at overcoming specific challenges and achieving strategic objectives. Our team of experienced consultants works closely with clients to identify opportunities for improvement, develop actionable plans, and implement effective solutions.</p>
                <p>We believe in the power of collaboration and are committed to helping businesses succeed. By leveraging our expertise and resources, we aim to create a thriving business ecosystem where all members can achieve their full potential.</p>
            </div>
            <div className='video-section'>
                <h2>Video Presentation</h2>
                <div className='video-box'>
                    <video controls>
                        <source src={sampleVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Insights
