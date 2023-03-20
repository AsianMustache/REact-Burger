import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from "../AppHeader/AppHeader.module.css";


function AppHeader() {
    return (    
        
        <nav className={style.header}>
            
            <div className={style.constructorBurger}>         
                <BurgerIcon type="primary" />
                <p className="text text_type_main-default mt-4 mb-4 ml-2">Конструктор</p>
            </div>
            <div className={style.orderList}>
                <ListIcon type="secondary" />
                <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
            
            </div>
            <Logo />
            <ProfileIcon type="secondary" />    
            <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
        </nav>
    )
}

export default AppHeader
