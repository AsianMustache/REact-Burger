import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from "../BurgerConstructor/BurgerConstructor.module.css";

function BurgerConstructor () {
    return (
        <main>
            <section className={style.burgerLayout}>
                <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
                <div className={style.ingredientsList}>
                    <a className="text text_type_main-default text_color_inactive">Булки</a>
                    <a className="text text_type_main-default text_color_inactive">Соусы</a>
                    <a className="text text_type_main-default text_color_inactive">Начинки</a>
                </div>

            </section>
        </main>
    )
}

export default BurgerConstructor