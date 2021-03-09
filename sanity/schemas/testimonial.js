import { RiChatQuoteLine as icon } from 'react-icons/ai';

export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  icon,
  fields: [
    {
      name: 'summary',
      title: 'Testimonial Summary',
      type: 'text',
      description: 'Summary',
    },
  ],
  preview: {
    select: {
      name: 'summary',
    },
    prepare: ({ name }) => ({
      title: `${name}`,
    }),
  },
};
