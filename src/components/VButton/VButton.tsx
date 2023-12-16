import React from 'react'
import classes from './VButton.module.scss'
import { Icons } from '@/assets/icons'
import VIcon from '../VIcon/VIcon'
import login from '../../assets/svg/login.svg'
type Props = {
    text: string,
    icon?:Icons
    font?:number;
    padding?: {a:number, b:number}
}

const VButton = (props: Props) => {
  return (
    <button className={classes['button']}
    style={{
      background: 'black',
      color: '#FFF',
      textAlign: 'center',
      fontFamily: 'Geometria',
      fontSize: props.font? props.font + 'px' : '20px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      padding: props.padding? props.padding?.a +'px '+props.padding?.b +'px' :'16px 37px',
      borderRadius: '20px',
      cursor: 'pointer',
    }}>
      {props.icon?<svg xmlns="http://www.w3.org/2000/svg" fill='white' color='white' height="16" width="16" viewBox="0 0 512 512"><path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>:''}
      {props.icon?<span style={{color:'black'}}>-</span>:''}
      {props.text}
      {/* {props.icon?<VIcon name={props.icon}></VIcon> + props.text:''} */}
    </button>
  )
}

export default VButton;