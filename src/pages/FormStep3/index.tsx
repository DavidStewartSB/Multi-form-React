import React, { ChangeEvent, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Theme } from '../../components'
import { FormActions, useForm } from '../../contexts/FormContext'
import * as Sty from './style'

export const FormStep3 = () => {
    const history = useHistory()
    const {state, dispatch} = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, [])

    function handleNextStep(){
        history.push('/step3')   
     }
    
    function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }
    function handleGithubChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setGitHub,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <Sty.Container>
               <p>Passo {state.currentStep}/3</p>
               <h1>Legal! {state.name}, onde te achamos?</h1>
               <p>Informe suas redes, para entrar-mos em contato</p>

               <hr />

               <label htmlFor="">
                    Qual seu e-mail?
                    <input type="email" 
                        value={state.email}
                        onChange={handleEmailChange}
                    />
               </label>

               <label htmlFor="">
                    Qual seu GitHub
                <input type="url" 
                    value={state.github}
                    onChange={handleGithubChange}/>
                </label>

            <Link className='backButton'to='/step2'> Voltar</Link>
            <button onClick={handleNextStep}>Next</button>
            </Sty.Container>

         
        </Theme>
    )
}