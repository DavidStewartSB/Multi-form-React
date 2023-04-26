import {useForm, FormActions} from '../../contexts/FormContext'
import {useHistory} from 'react-router-dom'
import { Theme } from '../../components'
import * as Sty from './styles'
import { ChangeEvent, useEffect, useState } from 'react'

export const FormStep1 = () => {
    const history = useHistory()
    //state tem os dados (é a variavel), dispatch pode-se usar os dados (é uma "função")
    const {state, dispatch} = useForm()

    const [isChecked, setChecket] = useState()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    })

    function handleNextStep() {
        if(state.name !== '') {
            history.push('/step2')
        }
        else {
           alert("Preencha seu nome")
        }
    }
    function handleNameChange(e: ChangeEvent<HTMLInputElement>){
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }
    return(
        <Theme>
            <Sty.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Vamos Começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>
                <hr />

                <label htmlFor=""> 
                    Seu nome Completo 
                    <input 
                        type="text" 
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Next</button>

            </Sty.Container>
        </Theme>
    )
}