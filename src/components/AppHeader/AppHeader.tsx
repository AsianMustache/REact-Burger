import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from "../AppHeader/AppHeader.module.css";


function AppHeader() {
    return (    
    <header>    
        <nav className={style.header}>
            <div className={style.navMenu}>  
                <div className={style.constructorBurger}>         
                    <BurgerIcon type="primary" />
                    <p className="text text_type_main-default mt-4 mb-4 ml-2"><a href="#constructor">Конструктор</a></p>
                </div>
                <div className={style.orderList}>
                    <ListIcon type="secondary" />
                    <p className="text text_type_main-default text_color_inactive ml-2 mr-5"><a href="#list">Лента заказов</a></p>            
                </div>
                <a href="/" title="Космический бургер с доставкой"><Logo></Logo></a>
                <div className={style.personalAccount}>
                    <ProfileIcon type="secondary" />    
                    <p className="text text_type_main-default text_color_inactive"><a href="#account">Личный кабинет</a></p>
                </div>
            </div> 
        </nav>
    </header>
    )
}

export default AppHeader
