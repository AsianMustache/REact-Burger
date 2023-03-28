import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon, CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import style from "../BurgerConstructor/BurgerConstructor.module.css";
import compositions from '../../utils/data';


function BurgerConstructor () {
    const [current, setCurrent] = React.useState('one')
    
    return (
        
        
        <main>
           <div className='custom-scroll'>
                <section className={style.burgerLayout}>
                    <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
                    
                    <div style={{ display: 'flex', marginBottom: '40px' }}>
                        <Tab value="one" active={current === 'Булки'} onClick={setCurrent}>
                        Булки
                        </Tab>
                        <Tab value="two" active={current === 'Соусы'} onClick={setCurrent}>
                        Соусы
                        </Tab>
                        <Tab value="three" active={current === 'Начинки'} onClick={setCurrent}>
                        Начинки
                        </Tab>
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
                    <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
                    <div className={style.bread}>
                        {
                        compositions.filter(
                            function (items) {
                                return items.type == 'sauce'}).map((compositions) => 
                                    <div key={compositions._id} className="text text_type_main-default mt-6 mr-6 mb-10 ml-4"> 
                                        <img src={compositions.image} className="mb-1" alt={compositions.name} />                                     
                                        <span className={style.priceIcon}>{compositions.price}<CurrencyIcon type="primary" /></span>                                    
                                        <span>{compositions.name}</span>
                                    </div>
                                )
                        }
                    
                    </div>
                </section>
            </div>
        </main>
    )
}

export default BurgerConstructor