import React, { Component } from 'react';

class List extends React.Component {
    render() {
        return (this.props.recipes.map((recipe) => {
            return (<div>
                <li key={recipe.recipe_id} class="container">
                    <div class="card">
                        <img class="card-img-top" src={recipe.image_url} alt="Card image cap"></img>
                        <a href={recipe.f2f_url} class="btn btn-primary">{recipe.title}</a>
                    </div>
                </li>
            </div>);
        })
        );
    }
}

export { List };