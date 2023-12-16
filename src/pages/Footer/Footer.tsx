import React from 'react'
import classes from './Footer.module.scss'
import logo from '../../assets/images/merc-logo.png'
import SectionContainer from '@/Containers/SectionContainer/SectionContainer'

type Props = {}

const Footer = (props: Props) => {
  return (
    <SectionContainer>
        <div className={classes['footer']}>
            <img src={logo.src} alt="" />
                <ul className={classes['wrapper']}>
                    <li>© 2011 Mercenaries International Contract Agency | Сервер DayZ Stalker RP Haven Soul.</li>
                    <li>IP DayZone: 185.207.214.195:2302</li>
                    <li>IP NewHorizon: 185.207.214.195:2302</li>
                    <li> <br /></li>
                    <li>Вся информация на сайте вымышлена и является частью игровой вселенной DayZ Stalker RP.</li>
                </ul>
        </div>
    </SectionContainer>
  )
}

export default Footer;