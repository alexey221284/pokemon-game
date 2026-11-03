import s from './Footer.module.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <div className={s.wrapper}>
                <h3>Спасибо за визит</h3>
                <p>© {currentYear} by Zhumaev Timofey</p>
            </div>
        </footer>
    )
}

export default Footer