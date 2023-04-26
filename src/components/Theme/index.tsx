import React, { ReactNode } from 'react'
import { Header } from '../Header'
import * as Sty from './style'

type Props = {
    children: ReactNode
}

export const Theme = ({children}: Props) => {
    return(
        <Sty.Container>
            <Sty.Area>
                <Header />

                <Sty.Steps> 
                    <Sty.Sidebar>
                        ,,,
                    </Sty.Sidebar>
                    <Sty.Page>
                        {children}
                    </Sty.Page>
                </Sty.Steps>
            </Sty.Area>
        </Sty.Container>
    )
}