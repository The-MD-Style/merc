import React from 'react'
import classes from './Footer.module.scss'
import logo from '../../assets/images/merc-logo.png'
import SectionContainer from '@/Containers/SectionContainer/SectionContainer'

import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <SectionContainer>
        <div className={classes['footer']}>

        <Image
            src={logo}
            width={95}
            height={95}
            alt="Mercenaries Наёмники"
          />


          <ul className={classes['wrapper']}>
              <li>© 2011 Mercenaries International Contract Agency | Сервер DayZ Stalker RP Haven Soul.</li>
              <li>IP DayZone: 185.207.214.195:2302</li>
              <li>IP NewHorizon: 185.207.214.195:2303</li>
              <li> <br /></li>
              <li>Вся информация на сайте вымышлена и является частью игровой вселенной DayZ Stalker RP.</li>
          </ul>
        </div>
    </SectionContainer>
  )
}

export default Footer;