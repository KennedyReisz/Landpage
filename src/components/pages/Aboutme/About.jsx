import './About.css'
import logo from '../../../assets/Images/IMG_9442.jpg'

const About = () => {
  return (
    <div className='container-about'>
      <img src={logo} alt=""/>

      <h1>Hello, i'm Kennedy!</h1>

      <h3>O.S: Arch Linux</h3>
      <h3>DE/WM: Bspwm/Awesomewm</h3>
      <h3>From: Brazil / Maringá-PR</h3>
      <h3>Fullstack Developer!</h3>

      <button><a href="/">Home</a></button>
    </div>
  )
}

export default About;