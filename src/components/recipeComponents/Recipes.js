import React from 'react';
import styles from './recipe.module.css';

const Recipes = ({title,calories,image}) => {
    return(
        <div className={styles.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt="" className={styles.image}/> 
        </div>
    )
}

export default Recipes;