import { AiOutlineApartment as Icon } from 'react-icons/ai';

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: Icon,
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      description: 'What is the name of the category?',
    },
  ],
};
