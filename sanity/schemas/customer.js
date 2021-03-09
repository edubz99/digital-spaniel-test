import { BsPerson as icon } from 'react-icons/bs';

export default {
  name: 'customer',
  title: 'Customers',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      description: 'Name of the customer',
    },
    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
      description: "Name of the customer's company",
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'Position of customer',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the customer',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    },
  ],
};
