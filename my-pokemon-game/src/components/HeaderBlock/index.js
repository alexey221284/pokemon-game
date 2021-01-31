import s from './style.module.css';
import {ReactComponent as ReactLogo} from '../../assets/logo.svg'

const HeaderBlock = ({ title, hideBackground = false, descr }) => {
    const styleRoot = hideBackground ? { backgroundImage: 'none'} : {};
    return (
        <div className={s.root} style={styleRoot}>
            <div>
                <img src={ReactLogo} alt="React Logo" />
                <ReactLogo />
                { 
                    title && (<h1 className={s.header}>
                    {title}
                </h1>)
                }
                { descr && <p className={s.paragraph}>{ descr }</p>}
            </div>
        </div>
    )
}

export default HeaderBlock;