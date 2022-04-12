import qrcode from '../../assets/img/qr-code.png';
import './rightStyled.css'
export default function RightSide(){
    return(
        <>
            <div className="right">
                <img src={qrcode} alt="Imagem QRCode"/>
                <h2>Entrar Com o Código <br/> QR</h2>
                <p>Escaneie isso com o <strong>app movel do DeskCode</strong> para fazer login imediatamente</p>
             </div>
        </>
    )
}