import React from 'react'
import classes from "./Header.module.scss"
import VButton from '@/components/VButton/VButton'
type Props = {}

const Header = (props: Props) => {

    const handleClickScroll = () => {
      const element = document.getElementById('join_req');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <div className={classes['header']}>
    <div className={classes['wrapper']}>
      <h1>Работа в ЧЗО</h1>
      <h3>Прогулки, охота и уборка отходов. <br />
      Стань частью дружного коллектива.</h3>
      <a style={{textDecoration:'none'}} onClick = {handleClickScroll} >
        <VButton text={"Оставить заявку"} font={40} padding={{a:25, b:70}}></VButton>
      </a>
    </div>
  </div>
  )
}

export default Header