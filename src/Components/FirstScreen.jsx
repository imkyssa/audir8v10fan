import React from 'react'
import scrollDown from "./Assets/scrolldown.gif"


export default function FirstScreen() {
    return (
        <div className='first'>
            <div className='firstBottom'>
                <p data-aos-offset="0"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="description">
                    Hızla değişen bir dünyada, zorluklara hazırlıklı bir arkadaşa
                    ihtiyacınız var. İlerici tasarım ve yenilikçi teknolojiler ile.
                    İlerleme somut hale geldi.
                </p>
                <div className='stats'>
                    <div className='stat'
                        data-aos-offset="0"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <p className='statTop'>3.6s</p>
                        <p className='statBot'>0-100 km/s</p>
                    </div>
                    <div className='stat withborder'
                        data-aos-offset="0"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <p className='statTop'>+330km/s</p>
                        <p className='statBot'>Maks. Hız</p>
                    </div>
                    <div className='stat'
                        data-aos-offset="0"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <p className='statTop'>+598km</p>
                        <p className='statBot'>Sürüş Menzili</p>
                    </div>
                </div>
                <img className='scroll' src={scrollDown} alt="ScrollDown" />
            </div>
        </div>
    )
}
