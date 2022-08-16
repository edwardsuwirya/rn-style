const pallete = {
    white: '#fff',
    orange: 'rgb(252,80,40)',
    grey: 'rgb(92,93,95)'
}

export const theme = {
    background: require('../../assets/img/background.jpg'),
    colors: {
        foreground: pallete.grey,
        primary: pallete.orange,
        secondary: pallete.white
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24
    },
    radius: {
        s: 5,
        m: 10,
        l: 15
    },
    text: {
        title: {
            fontSize: 32,
            fontWeight: 'bold',
            color: pallete.grey
        },
        subtitle: {
            fontSize: 16,
            color: pallete.grey
        },
        subtitle2: {
            fontSize: 24,
            color: pallete.grey
        }
    }
}