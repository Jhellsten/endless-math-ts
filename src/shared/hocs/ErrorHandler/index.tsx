import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Alert } from 'react-native'

import styles from './styles'
// import { hideError } from '../../actions/error'
import themes from '@themes'

type errorState = {
    UIError: boolean
}

type errorProps = {
    errorMessage: string,
    hideError: () => boolean,
    error: any
}

class ErrorHandler extends React.Component<errorProps & any, errorState> {
    constructor(props: errorProps) {
        super(props)
        this.state = { UIError: false }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { UIError: true }
    }

    componentDidCatch(error, info) {
        this.setState({
            UIError: true,
        })
        // You can also log the error to an error reporting service
    }

    clickHandler = () => {
        this.setState({ UIError: false })
    }

    renderAlert = () => {
        Alert.alert('Huomio', this.props.errorMessage, [
            {
                text: 'OK',
                onPress: this.props.hideError,
            },
        ])
    }

    render() {
        if (this.state.UIError) {
            // You can render any custom fallback UI
            return (
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.text}>Something went wrong!</Text>
                        <TouchableOpacity onPress={this.clickHandler} style={styles.button}>
                            <Text style={[styles.text, { color: themes.mint.primary }]}>Go back!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    {this.props.error && this.renderAlert()}
                    {this.props.children}
                </View>
            )
        }
    }
}

const mapDispatchToProps = dispatch => ({
    // hideError: () => dispatch(hideError()),
})

const mapStateToProps = state => ({
    // errorMessage: state.error.errorMessage,
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler)
