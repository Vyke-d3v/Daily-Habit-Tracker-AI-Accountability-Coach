import logo from '../assets/full-logo.png'

function Header (){
    return (
        <>
                <header>
                    <img src={logo} alt="Logo icon" />
                    <h1>Echocoach.ai</h1>
                    <a href="habits">HABITS </a>
                </header>
        </>
    )
}

export default Header;