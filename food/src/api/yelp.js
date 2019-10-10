import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zazhju8xKSYulN5K71nAl9S-PDzHTvDfqgM8RV2yNNu-gA_JieCqOJ_jB0vOdlr2pabvQ0_HdAFKROAa8b_6bq5tIn2d7WxxJDOjRxillVjALwO7V1Wufd3q86Z6XXYx'
    }
});