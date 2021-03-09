// import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import project from './project';
import caseStudy from './case-study';
import testimonial from './testimonial';
import customer from './customer';
import category from './category';

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    project,
    caseStudy,
    customer,
    testimonial,
    category,
  ]),
});
