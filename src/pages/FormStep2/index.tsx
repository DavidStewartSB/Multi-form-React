import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { SelectOption, Theme } from '../../components'
import { useForm, FormActions } from '../../contexts/FormContext'
import * as Sty from './style'

export const FormStep2 = () => {
    const history = useHistory()
    const {state, dispatch} = useForm()

   useEffect(() => {
    if(state.name === '') {
        history.push('/')
    } else {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    }
   }, [])

   function handleNextStep() {
        history.push('/step3')
    }

   const setLevel = (level: number ) => {
    dispatch({
        type: FormActions.setLevel,
        payload: level
    })
   }

    return(
        <Theme>
            <Sty.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente</p>
                <hr />

                <SelectOption 
                    title="Sou iniciante"
                    description='Sou programador a menos de 2 anos'
                    icon='👶'
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption 
                    title="Sou Programador"
                    description='Já programo 2 anos ou mais'
                    icon='🧠'
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link className="backButton" to="/">Voltar</Link>
                <button onClick={handleNextStep}>Next</button>
            </Sty.Container>
        </Theme>
    )
}