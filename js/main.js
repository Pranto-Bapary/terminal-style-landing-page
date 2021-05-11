const about = document.getElementById('about')
const contact = document.getElementById('contact')
const portfolio = document.getElementById('portfolio')
const aboutContent = document.getElementById('about-content')
const contactContent = document.getElementById('contact-content')
const portfolioContent = document.getElementById('portfolio-content')

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        background: 'linear-gradient(90deg,#ff00f0,#0050ff)',
        width: '400px',
        height: '400px',
        top: 50,
        left: 50,
        mount: aboutContent
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me',
        background: 'linear-gradient(90deg,#ff00f0,#0050ff)',
        width: '400px',
        height: '400px',
        top: 150,
        left: 250,
        mount: contactContent
    })
})

portfolio.addEventListener('click', () => {
    const portfolioBox = new WinBox({
        title: 'Portfolio',
        background: 'linear-gradient(90deg,#ff00f0,#0050ff)',
        url: "https://pranto-bapary.github.io/portfolio",
        width: '400px',
        height: '400px',
        top: 250,
        left: 350,
    })
})