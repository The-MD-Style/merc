import React from 'react'
import * as Yup from "yup";
import classes from './Form.module.scss'
import { ErrorMessage, Field, Formik, FormikHelpers, FormikValues } from 'formik'
import axios from 'axios';
type Props = {}

const Form = (props: Props) => {
    

    const show = `${classes['successful']} ${classes['successful-show']}`;
    const hide = `${classes['successful']}`


  return (
    <div className={classes['form']} id='join_req'>

        
        <div className={`${classes['successful']}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill='#2cac48' height="16" width="16" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>   Ваша заявка успешно отправлена
        </div>

        <h1>Заявка</h1>

        <Formik 
        initialValues={
            {
                SteamID:"",
                DailyOnline: "",
                Discord: "",
                SteamProfile: "",
                NickName: "",
                Team: "",
                Time: ""
            }
        } 

        onSubmit={(values) => {
            const data = axios.post('https://merc-api-site.vercel.app/api/form/send', values);
            
            data.then((value) => {
                console.log(value.status);
              });
            
          }}>
        {({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
            <div className={classes['inputs']}>
                <fieldset>
                    <label htmlFor="SteamID">Ссылка на профиль в Steam</label>
                    <Field
                        type="text"
                        id="SteamProfile"
                        name="SteamProfile"
                        className={classes["input"]}
                        required
                        placeholder={'steamcommunity.com/id/'}
                        />
                        <ErrorMessage
                        name="SteamProfile"
                        component="div"
                        className={classes["error"]}
                        />
                </fieldset>
                <fieldset>
                    <label htmlFor="DailyOnline">Сколько часов можете играть?</label>
                    <Field
                        type="text"
                        id="DailyOnline"
                        name="DailyOnline"
                        className={classes["input"]}
                        required
                        placeholder={'Пока мама разрешает'}
                        />
                        <ErrorMessage
                        name="DailyOnline"
                        component="div"
                        className={classes["error"]}
                        />
                </fieldset>
                <fieldset>
                    <label htmlFor="Team">Где хотите играть — на юге или севере?</label>

                    <Field
                        as="select"
                        name="Team"
                        id="Team"
                        className={classes["input"]}
                        required
                        >
                        <option value="">Выбери сервер</option>
                        <option value="Юг">Юг</option>
                        <option value="Север">Север</option>
                        </Field>
                        <ErrorMessage
                        name="Team"
                        component="div"
                        className={classes["error"]}
                        />
                </fieldset>
                <fieldset>
                    <label htmlFor="SteamID">SteamID 64</label>
                    <Field
                        type="text"
                        id="SteamID"
                        name="SteamID"
                        className={classes["input"]}
                        required
                        placeholder={'76569999999999999'}
                        />
                        <ErrorMessage
                        name="SteamID"
                        component="div"
                        className={classes["error"]}
                        />
                </fieldset>
                <fieldset>
                    <label htmlFor="Discord">Discord</label>
                    <Field
                        type="text"
                        id="Discord"
                        name="Discord"
                        className={classes["input"]}
                        required
                        placeholder={'eblan#0000'}
                        />
                        <ErrorMessage
                        name="Discord"
                        component="div"
                        className={classes["error"]}
                        />
                </fieldset>
                <fieldset>
                    <label htmlFor="NickName"><a style={{textDecoration:'none'}} onClick={()=> confirm('Ты чушпан')}>Позывной</a></label>
                    <Field
                        type="text"
                        id="NickName"
                        name="NickName"
                        className={classes["input"]}
                        required
                        placeholder={'Чёрт'}
                        />
                        <ErrorMessage
                        name="NickName"
                        component="div"
                        className={classes["error"]}
                        />
                </fieldset>
                <fieldset>
                    <label htmlFor="Time">Часовой пояс в сравнении с МСК</label>
                    <Field
                        type="text"
                        id="Time"
                        name="Time"
                        className={classes["input"]}
                        required
                        placeholder={'+1'}
                        />
                        <ErrorMessage
                        name="Time"
                        component="div"
                        className={classes["error"]}
                        />
                </fieldset>
            </div>

            <fieldset className={classes['buttonField']}>
            <button type="submit" >
                Отправить
            </button>
            </fieldset>
        </form>)}
        </Formik>

        
    </div>
  )
}

export default Form