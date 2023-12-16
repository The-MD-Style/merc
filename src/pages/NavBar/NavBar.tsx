import React from 'react';
import classes from './NavBar.module.scss';
import logo from '../../assets/images/logo.svg'
import VButton from '@/components/VButton/VButton';

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className={classes['navbar']}>
        <div className={classes['logo']}>
            <img src={logo.src} alt="mercenaries logo" />
            <p>
                <span>I</span>nternational <br/><span>C</span>ontract <br/><span>A</span>gency
            </p>
        </div>
        <VButton text={'Войти'} icon={'search'} ></VButton>
    </div>
  )
}

export default NavBar;