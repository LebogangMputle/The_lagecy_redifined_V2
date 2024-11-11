import './Insights.css';
import officeImage from '../../assets/people-office-work-day.jpg';

const Insights = () => {
  return (
    <div className='insights'>
        <h2>Insights</h2>
        <div className='grid-container'>
            <div className='company-insights'>
                <img src={officeImage} alt="People working in an office" className="insight-image" />
                <p>Small Micro Medium Enterprises (SMME) due to the nature of their business operations
and the lack of appropriate skills and well defined business processes are typically
categorised as high risk. This means that growth and funding opportunities for most
may be difficult to reach as this would require them to first meet the requirements set by
funding and other development agencies.</p>
                <p>In South Africa (SA), the SMME sector is responsible for the employment of between
50% and 60% of the total labor force with a contribution of approximately 34% to the
Gross Domestic Product (Rasdien, 2023). SA SMMEs experience difficulties in
remaining afloat; they have among the worst sustainability rates in the world (Olawale &amp;
Garwe, 2010; SEDA, 2010; Bruwer, 2018). Up to 75% of SMMEs close their doors after
being in operation for only three years (Adelakun, 2014; Mthabela, 2015). A survey
conducted by (Juan-Pierré Bruwera and Ashwin Petersen) on 120 SMMEs revealed that
41.7% had high school education and only 39.1% had post-school education. These
research findings articulate the dire need for the appropriate business coaching and
skills development within the SMME sector.</p>

                <p>For any business to thrive, there needs to first be proper formalised business processes
in place as a foundation which will enable proper risk management throughout thus
dealing with potential risks that could potentially hamper on the achievement of set
business objectives. There are other core business skills that we offer but we believe
that risk management is a significant integral part of any business and the lack of it can
result in business failure. At Legacy we bridge this gap through skills training,
consulting and on the job business mentoring and coaching.</p>
            </div>
        </div>
    </div>
  );
};

export default Insights;
