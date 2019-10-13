import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import {
    Container,
    Typography,
    CardMedia,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CircularProgress,
  } from '@material-ui/core';
  import { makeStyles } from '@material-ui/core/styles';
  import RecipeCard from '../components/RecipeCard'
   
  


export default function Kitchen({ history }) {

    const [recipes, setRecipes] = useState([{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10}, { title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10}])
    return (
        <Layout navTitle={'Kitchen'} history={history}>
            <Container style={{ marginTop: 75 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around'}}>
            {recipes ? recipes.map(recipe => (             
                 <RecipeCard recipe={recipe} />
            )) : null }
                </div>
            </Container>
        </Layout>
    )
}
