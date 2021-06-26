import React, { Component } from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'

// import Button from '../../shared/Components/Button'
import CustomIcon from '../../shared/components/CustomIcon/CustomIcon'
import styles from "./HomeScreen.style"
import { APP_ROUTE } from '@shared-constants'
import themes from '@themes'

import { StyledContainer } from '../../shared/components/StyledViews/index'
import Button from '@shared-components/Button/Button'
import * as NavigationService from "react-navigation-helpers";
import { SettingsStateType } from 'reducers/settings'
interface IProps {
  theme: typeof themes.pink,
}

interface IState {}

class HomeScreen extends Component<IProps, IState> {
    render() {
        const { theme } = this.props
        return (
            <StyledContainer theme={this.props.theme}>
                <Image source={theme.logo} />
                <CustomIcon icon={'gem'} size={30} />
                <Button
                    text='Aloita pelaaminen'
                    style={[styles.buttonStyle, { backgroundColor: theme.primary }]}
                    onPress={() => NavigationService.navigate(APP_ROUTE.GAMES)}
                    icon
                    iconName={'gem'}
                    iconSize={30}
                    iconColor={theme.decorative}
                    iconNoMargin
                />
                <Button
                    text='Asetukset'
                    style={[styles.settingsButton, { backgroundColor: theme.primary }]}
                    onPress={() => NavigationService.navigate(APP_ROUTE.SETTINGS)}
                />
            </StyledContainer>
        )
    }
}

const mapStateToProps = (state: {settings: SettingsStateType}) => ({
    theme: state.settings.theme
})

export default connect(mapStateToProps)(HomeScreen)
