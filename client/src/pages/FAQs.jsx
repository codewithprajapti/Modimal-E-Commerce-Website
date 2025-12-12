import React from 'react';
import Accordian from '../components/ui/Accordian';

export default function FAQs() {
  const faqs = [
    {
      question: 'How do I contact your Customer Service?',
      anwser:
        ' Our modimal Customer Service Team is available Monday through Friday, 9 am - 5 pm ET, excluding holidays. You can reach us via email at hello@modimal.com (preferred and our fastest response), via chat using the icon in the right bottom cornern of our website, or via voicemail at +1(929) 460-3208. We will make sure to get back to you within 24 business hours.',
    },
    {
      question: 'When will my order ship?',
      anwser:
        'Orders are shipped on business days (Monday through Friday, excluding major holidays). Most orders are processed and shipped within 2 - 3 business days, depending on availability. However, please allow for extended order processing time during peak periods, such as major holidays.',
    },
    {
      question: 'What type of payment methods do you offer?',
      anwser:
        'We accept all major credit cards, PayPal, Amazon Pay, Klarna and Catch. ',
    },
    {
      question: 'Which size will fit me best?',
      anwser:
        'We offer product and body measurements on each of our products pages, just click on “Size Guide” to find your best fit. Measuring guides are included.',
    },
    {
      question: 'How do I take care of my modimal pieces?',
      anwser: `Each piece is different, so we recommend looking at the care instructions on the label of your piece before washing. All of our pieces are “machine cold wash” which saves over 2,000 pounds of CO2 per year vs. washing in hot water—every little bit counts, and we strongly believe in doing our part. We advise a temperature of 30 degrees Celsius / 85 Fahrenheit or lower when washing.
      Please do not tumble dry. Tumble drying reverses the bonding process used in many of our pieces, reheating the glue which will cause the seams of your piece to break. It can also reduce the lifespan of products as the tumbling action is rough, causing fibers to break and elastic to warp. As a general rule, please don’t use fabric softener—it can damage the performance properties of our fabrics.
      Do not bleach. Do not dry clean. Do not iron.`,
    },
    {
      question: 'Where and how do you manufacture your products?',
      anwser: `We conducted a worldwide search—seriously—for the best suppliers to manufacture our pieces. We found fantastic teams to partner with in Portugal, the US, China, Turkey and Italy.
      What makes them the best? They’re perfectionists and innovators, and we like that (because we are too). They also feel strongly about ethics and the environment, along with the happiness of their workers, something that matters deeply to us at modimal. We require each supplier to sign our Commitment to People (as well as our Commitment to Planet) contract, demonstrating their commitment to high standards across manufacturing and taking care of workers, making each piece of modimal crafted with love and for the planet.`,
    },
    {
      question: 'How do you find and evaluate your suppliers?',
      anwser:
        'We find our suppliers through trusted recommendations from our existing partners, reputable innovators and sustainability pioneers as well as the various trade shows we visit. Before working with any supplier, we conduct extensive due diligence on their stance on both ethics and environment. Our due diligence consists of in person visits and conversations with both management and factory workers about their happiness, their hours, their pay and their safety. If you have any questions about our suppliers, please ask us: hello@modimal.com',
    },
    {
      question: 'How do your suppliers support their workers? ',
      anwser: `We only partner with factories and mills that put their workers first. We make sure they offer regular training, on-site services, employee benefits, clean and sanitary working environments and more. We visit all our factories and mills before working with them, and throughout our relationships, reviewing first hand how they support their employees.
        We require our factories and mills to sign our Commitment to People (as well as our Commitment to Planet) contract. The contract is in line with the International Labor Oganisation’s conventions, there is absolutely no subcontracting, discrimination or working above 60 hours per week, all overtime must be paid in a timely manner and at a premium rate. Our suppliers are required to advocate for education and sustainable solutions to eradicate child labor within their local region. We ask that all our suppliers work to incorporate diversity and inclusivity into the workplace, starting with unbiased hiring practices.`,
    },
  ];
  return <div className='border-0 px-20 flex flex-col gap-5'>
    {faqs.map((faq,index)=>{
        return <Accordian faq={faq}/>
    })}
  </div>;
}
