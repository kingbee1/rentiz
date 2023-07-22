import { RxLinkedinLogo } from 'react-icons/rx'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <div className='container footer__container'>
            <div className='footer__1'>
                <h1>Rentiz</h1>
                <h4>123, ABudabi makaroni we pinign, sjfhd, San Fransisco.</h4>
                <ul className='footer__1-socials'>
                    <li><RxLinkedinLogo /></li>
                    <li><BsTwitter /></li>
                    <li><BsInstagram /></li>
                    <li><AiFillGithub /></li>
                </ul>
            </div>

            <div className='footer__2'>
                <h2>Project</h2>
                <h4>Houses</h4>
                <h4>Rooms</h4>
                <h4>Flats</h4>
                <h4>Apartments</h4>
            </div>

            <div className='footer__3'>
                <h2>Company</h2>
                <h4>How can we work?</h4>
                <h4>Capital</h4>
                <h4>Security</h4>
            </div>

            <div className='footer__4'>
                <h2>Movement</h2>
                <h4>Who are we?</h4>
                <h4>Support us</h4>
            </div>

            <div className='footer__5'>
                <h2>Help</h2>
                <h4>Privacy</h4>
                <h4>Terms and Conditions</h4>
                <h4>Blog</h4>
                <h4>FAQs</h4>
            </div>
        </div>
        <div className="copyright">
            <small>Copyright &copy; Kingbee Services. 2023. All rights reserved.</small>
        </div>

    </footer>
  )
}

export default Footer
