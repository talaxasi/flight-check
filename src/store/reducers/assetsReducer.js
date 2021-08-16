const image1 = require('../../images/city1.jpg');
const image2 = require('../../images/city2.jpg');
const image3 = require('../../images/city3.jpg');
const image4 = require('../../images/city4.jpg');
const image5 = require('../../images/city5.jpg');
const image6 = require('../../images/city6.jpg');

const initialState = [
    image1, image2, image3, image4, image5, image6
];

export const assetsReducer = (state = initialState) => {
  return state;
}