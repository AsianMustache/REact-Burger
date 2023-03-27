import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from "../BurgerConstructor/BurgerConstructor.module.css";
import compositions from '../../utils/data';

function BurgerConstructor () {
    return (
        
        
        <main>
            
            <section className={style.burgerLayout}>
                <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
                <div className={style.ingredientsList}>
                    <a className="text text_type_main-default text_color_inactive mt-5 mb-10">Булки</a>
                    <a className="text text_type_main-default text_color_inactive mt-5 mb-10">Соусы</a>
                    <a className="text text_type_main-default text_color_inactive mt-5 mb-10">Начинки</a>
                </div>
                    <h2 className="text text_type_main-medium">Булки</h2>
                <div className={style.bread}>
                    {
                    compositions.filter(
                        function (items) {
                            return items.type == 'bun'}).map((compositions) => 
                                <div key={compositions._id} className="text text_type_main-default mt-6 mr-6 mb-10 ml-4"> 
                                    <img src={compositions.image} className="mb-1" alt={compositions.name} />                                     
                                    <span className={style.priceIcon}>{compositions.price}<CurrencyIcon type="primary" /></span>                                    
                                    <span>{compositions.name}</span>
                                </div>
                             )
                    }
                   
                </div>

            </section>
        </main>
    )
}

export default BurgerConstructor