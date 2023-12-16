"use client"

import SectionContainer from '@/Containers/SectionContainer/SectionContainer'
import React, { useEffect, useState } from 'react'
import classes from "./page.module.scss"
import axios from 'axios'
type Props = {}

type forms = {
    _id: string
    SteamID: string,
    DailyOnline: string,
    Discord: string,
    SteamProfile: string,
    NickName: string,
    Team: string,
    Time: string,
    __v: number
}

const page = (props: Props) => {

    const [Forms, setForms] = useState<forms[]>([]);


    const deleteForm = (id:string) => {
      axios.delete(`https://merc-api-site.vercel.app/api/form/${id}`)
    }


    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://merc-api-site.vercel.app/api/form');
          const json = await response.json();
          setForms(json);
        };
    
        fetchData();
      }, [deleteForm]);
    
    
      
    return (
        <SectionContainer>
          <div className={classes['wrapper']}>
            {Forms.map((item) => (
            <ul key={item._id}>
                  <li>SteamID - <b>{item.SteamID}</b></li>
                  <li>Средний онлайн - <b>{item.DailyOnline}</b></li>
                  <li>Discord - <b>{item.Discord}</b></li>
                  <li>Профиль в <a href={item.SteamProfile}>Steam</a> - <b>{item.SteamProfile}</b></li>
                  <li>Позывной - <b>{item.NickName}</b></li>
                  <li>Сервер - <b>{item.Team}</b></li>
                  <li>Часовой пояс от МСК - <b>{item.Time}</b></li>
                  <li className={classes['trash']} onClick={()=> deleteForm(item._id)} ><svg xmlns="http://www.w3.org/2000/svg" height="30" fill='red' width="25" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></li>
            </ul>
            ))}
          </div>
      
      </SectionContainer>
  )
}

export default page