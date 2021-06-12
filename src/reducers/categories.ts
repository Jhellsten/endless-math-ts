const initialState = {
    categories: [
        {
            title: 'Yhteenlaskut',
            operator: '+'
        },
        {
            title: 'Vähennyslaskut',
            operator: '-'
        },
        {
            title: 'Kertolaskut',
            operator: '*'
        },
        {
            title: 'Jakolaskut',
            operator: '/'
        },
        {
            title: 'Kuva arvoitukset',
            operator: ''
        }
    ]
}

const categories = (state = initialState, action) => {
    return { ...state }
}

export default categories
