import {
  ImFacebook as Facebook,
  ImTwitter as Twitter,
  ImLinkedin2 as Linkedin,
} from 'react-icons/im';
import { FaInstagram as Instagram } from 'react-icons/fa';
import homeLandingImage from '../assets/images/spaniel2x.png';

export const headerNavData = [
  { title: 'Services', link: '/services' },
  { title: 'Work', link: '/work' },
  { title: 'About', link: '/about' },
  { title: 'Blog', link: '/blog' },
  { title: 'Contact', link: '/contact' },
];

export const homeLandingData = {
  image: homeLandingImage,
  tags: ['Brand', 'Dev', 'Ecom', 'Marketing'],
  title: 'We unleash',
  subtitle: 'business potential',
  summary:
    'We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.',
  ctaTitle: "Let's talk",
  ctaLink: 'contact',
};

export const detailsSectionsData = [
  {
    sectionTitle: 'What are',
    subtitle: 'we capable of',
    summary:
      'By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.',
    ctaTitle: 'Our process',
    ctaLink: 'our-process',
    menus: [
      ['Brand', 'Brand Strategy', 'Logo & Name', 'Identity & Collateral'],
      ['Marketing', 'Digital', 'Marketing Research'],
      ['Development', 'eCommerce', 'Web Development', 'Mobile Apps'],
    ],
  },
  {
    sectionTitle: "We're a brands",
    subtitle: 'best friend',
    ctaTitle: "Let's talk",
    ctaLink: 'lets-talk',
    menus: [
      ['Explore', 'Services', 'Work', 'About', 'Blog', 'Careers'],
      ['Services', 'Brand', 'Development', 'Marketing'],
      [
        'Questions?',
        'Call Us',
        'O121 345 678',
        'Email Us',
        'info@digitalspaniel.co.uk',
      ],
    ],
  },
];

export const socialsData = [
  { title: 'Facebook', icon: Facebook() },
  { title: 'Twitter', icon: Twitter() },
  { title: 'Instagram', icon: Instagram() },
  { title: 'Linkedin', icon: Linkedin() },
];

export const galleryImages = [
  { src: '../assets/images/gallery/office01@2x.png', category: 'about' },
  { src: '../assets/images/gallery/office02@2x.png', category: 'careers' },
  { src: '../assets/images/gallery/office03@2x.png', category: 'about' },
  { src: '../assets/images/gallery/office04@2x.png', category: 'careers' },
];
