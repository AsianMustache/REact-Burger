import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from "../AppHeader/AppHeader.module.css";


function AppHeader() {
    return (
        <nav className={style.header}>
            <Logo />
            <div className="constructor">         
                <BurgerIcon type="primary" />
                <p className="text text_type_main-default">Конструктор</p>
            </div>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
        </nav>
    )
}

export default AppHeader
