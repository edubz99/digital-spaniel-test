import { GrNotes as icon } from 'react-icons/gr';

export default {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Case Study Name',
      type: 'string',
      description: 'Name of the case study',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', // Auto generate from name,
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Summary about the case study',
    },
    {
      name: 'order',
      title: 'Slide Order',
      type: 'number',
      description: 'Define order of appearance in the slider',
    },
  ],
};
