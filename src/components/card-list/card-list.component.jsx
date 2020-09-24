import React from 'react';
import './card-list.styles.css';
import { Card } from "../card/card.component";
// mapleyerek kedileri aldi
export const CardList = ( props ) => (
    <div className="card-list">
    {  
        props.cats.map((cat) => ( 
            <Card key={ cat.id } cat={ cat } />
        )
        )
    }   
    </div>
)