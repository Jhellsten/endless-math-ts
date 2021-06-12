import styled from 'styled-components/native'
import theme from '@themes'

const StyledContainer = styled.View`
    align-items: center;
    background-color: ${props => props.theme.primary};
    display: flex;
    flex: 1;
    justify-content: center;
`

const StyledText = styled.Text`
    color: ${props => props.theme.secondary || theme.mint.secondary};
    font-size: 20px;
    margin-bottom: 5%;
}
`

export { StyledContainer, StyledText }
