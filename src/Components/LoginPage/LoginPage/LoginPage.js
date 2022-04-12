import RightSide from '../Container-QrCode/Right'
import FormGroup from '../form/FormGroup'
import HeaderLogin from '../header/Header'
import './contentStyle.css'
export default function LoginPage() {
    return (
        <div className="containerAll">
            <div className="container">
                <div className="left">
                    <HeaderLogin />
                    <FormGroup />
                    <div className="cadast">
                        <p>Precisando De Uma Conta <span><a href="/" target="_blank">Registre-se</a></span></p>
                    </div>
                </div>
                <RightSide />
            </div>
        </div>
    )
}