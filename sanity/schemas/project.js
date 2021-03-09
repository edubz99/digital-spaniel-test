import { AiOutlineFundProjectionScreen as icon } from 'react-icons/ai';

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: 'Name of the project',
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
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Summary about the project',
    },

    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      category0: 'categories.0.name',
      category1: 'categories.1.name',
      category2: 'categories.2.name',
      category3: 'categories.3.name',
    },
    prepare: ({ title, media, ...categories }) => {
      const filteredCategories = Object.values(categories).filter(Boolean);
      return {
        title,
        media,
        subtitle: filteredCategories.join(', '),
      };
    },
  },
};
