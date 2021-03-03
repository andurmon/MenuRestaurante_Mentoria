import React from 'react'
import '../styles/Button.css';

const Button = (props) => {
const { category, onSelectCategory } = props;

const selectCategory = (ev) => {
ev.preventDefault();

if (onSelectCategory) {
onSelectCategory(category);
}
}

return (
<div className="item-card">
<a href="#" data-filter={category} onClick={selectCategory}>
{category}
</a>
</div>
)
}

export default Button; 

// item-card {
//     scroll-snap-align: center;/*animación para que funcione el scroll de arriba y centra el scroll*/
//     margin-top: 1px;
//     border-radius: 30px;
//     background: white;
//     text-decoration: none;
//     outline: none;
//     color: black;
//     margin: 4px;
//     padding: 8px;
//     }
    
//     .item-card a{
//     border-radius: 30px;
//     text-decoration: none;
//     outline: none;
//     color: inherit;
//     text-transform: capitalize;
//     }
    
//     .item-card:hover {
//     background: red;
//     color: white;
//     }
    
//     .item-card.active {
//     background: red;
//     color: white;
//     }