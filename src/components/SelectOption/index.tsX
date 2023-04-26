import * as Sty from './styles'

type Props = {
    title: string
    description: string
    icon: string
    selected: boolean
    onClick: () => void
} 

export const SelectOption = ({title, description, icon, selected, onClick}: Props) => {
    return(
        <Sty.Container onClick={onClick} selected={selected}>
            <Sty.Icon>{icon}</Sty.Icon>
            <Sty.Info>
                <Sty.Title>{title}</Sty.Title>
                <Sty.Description>{description}</Sty.Description>
            </Sty.Info>
        </Sty.Container>
    )
}