import mockImage from '../public/no-image.png';

export const configuration = {
  apiURL: 'https://api.rawg.io/api',
  apiKey: '740c0dcb13be4611956db5e9382dab07',
  mockImage,
  sortFilterLabels: [
    {
      value: 'rating',
      label: 'Rating ASC'
    },
    {
      value: '-rating',
      label: 'Rating DESC'
    },
    {
      value: 'released',
      label: 'Released ASC'
    },
    {
      value: '-released',
      label: 'Released DESC'
    }
  ]
};
