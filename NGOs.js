import React from 'react';
import { Link } from 'react-router-dom';
import vatsaImage from './images/vatsa.jpeg';
import muktiImage from './images/mukti.jpeg';
import doorImage from './images/door.jpeg';
import nanhiImage from './images/nanhi.jpeg';
import smileImage from './images/smile.jpeg';
import ashaImage from './images/asha.jpeg';
import prathamImage from './images/pratham.jpeg';
import helpImage from './images/help.jpeg';

const ngos = [
  {
    id: 'vatsalya-trust',
    name: 'Vatsalya Trust',
    image: vatsaImage,
    description: 'Vatsalya Trust works for the welfare of orphaned children, providing them with shelter, education, and opportunities for a better future.',
    foundationDate: '1995',
    contact: {
      email: 'info@vatsalyatrust.org',
      phone: '+91-22-2836000'
    },
    link: 'https://vatsalyatrustmumbai.org/'
  },
  {
    id: 'mukti-foundation',
    name: 'Mukti Foundation',
    image: muktiImage,
    description: 'Mukti Foundation focuses on education and health care, with a special emphasis on HIV/AIDS awareness and treatment in Maharashtra.',
    foundationDate: '1985',
    contact: {
      email: 'contact@muktifoundation.org',
      phone: '+91-22-2784000'
    },
    link: 'https://www.muktifoundation.org/'
  },
  {
    id: 'door-step-school',
    name: 'Door Step School',
    image: doorImage,
    description: 'Door Step School provides educational services to children from marginalized communities, aiming to bring school to the doorsteps of those who cannot access it.',
    foundationDate: '1989',
    contact: {
      email: 'info@doorstepschool.org',
      phone: '+91-22-2857000'
    },
    link: 'https://www.doorstepschool.org/'
  },
  {
    id: 'nanhi-kali',
    name: 'Nanhi Kali',
    image: nanhiImage,
    description: 'Project Nanhi Kali is an initiative that provides primary education to underprivileged girls in India.',
    foundationDate: '1996',
    contact: {
      email: 'support@nanhikali.org',
      phone: '+91-22-2873000'
    },
    link: 'hi.html'
  },
  {
    id: 'smile-foundation',
    name: 'Smile Foundation',
    image: smileImage,
    description: 'Smile Foundation is a national-level development organization directly benefitting over 1.5 million children and their families every year through more than 400 welfare projects.',
    foundationDate: '2002',
    contact: {
      email: 'info@smilefoundationindia.org',
      phone: '+91 11 4312 3700'
    },
    link: 'https://www.smilefoundationindia.org/'
  },
  {
    id: 'asha-foundation',
    name: 'Asha Foundation',
    image: ashaImage,
    description: 'Asha Foundation aims to provide education, healthcare, and sustainable livelihoods to underprivileged communities in India.',
    foundationDate: '1991',
    contact: {
      email: 'info@ashafoundation.org',
      phone: '+91 11 2345 6789'
    },
    link: 'https://www.ashafoundation.org/'
  },
  {
    id: 'pratham-education',
    name: 'Pratham Education Foundation',
    image: prathamImage,
    description: 'Pratham Education Foundation is dedicated to ensuring that every child has access to quality education.',
    foundationDate: '1994',
    contact: {
      email: 'info@pratham.org',
      phone: '+91 11 2653 3131'
    },
    link: 'https://www.pratham.org/'
  },
  {
    id: 'help-age-india',
    name: 'HelpAge India',
    image: helpImage,
    description: 'HelpAge India is dedicated to the care and support of the elderly.',
    foundationDate: '1978',
    contact: {
      email: 'info@helpageindia.org',
      phone: '+91 11 2331 3301'
    },
    link: 'https://www.helpageindia.org/'
  }
];

function NGOs() {
  return (
    <div className="container">
      {ngos.map((ngo, index) => (
        <div className="card" key={index}>
          <img src={ngo.image} alt={ngo.name} />
          <h2>{ngo.name}</h2>
          <p>{ngo.description}</p>
          <Link to={`/ngo/${ngo.id}`} className="btn">View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default NGOs;
