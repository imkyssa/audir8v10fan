import React, { useState } from 'react'
import { images } from "./images";
import TableRowsIcon from '@mui/icons-material/TableRows';
import WindowIcon from '@mui/icons-material/Window';
import IconButton from '@mui/material/IconButton';

export default function Images({ handleOpen }) {
    //İstenilen görünüme göre css için state
    let [divStyle, setDivStyle] = useState({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "1100px",
        flexWrap: "wrap",
        gap: "1rem"
    })

    //İstenilen görünüme göre css için state
    let [imgStyle, setImgStyle] = useState({
        all: "unset",
        width: "200px",
        height: "200px",
        objectFit: "cover"
    })

    //İstenilen görünümü değiştirme fonksiyonu
    let changeAlignment = (value) => {
        console.log(value)
        if (value === "grid") {
            setDivStyle({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "1100px",
                flexWrap: "wrap",
                gap: "1rem",
            })
            setImgStyle({
                all: "unset",
                width: "200px",
                height: "200px",
                objectFit: "cover"
            })
        } else {
            setDivStyle({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "1100px",
                justifyContent: "center",
                gap: "1rem"
            })
            setImgStyle({
                position: "relative",
                margin: "auto",
                all: "unset",
                width: "800px",
                height: "450px",
                objectFit: "cover"
            })
        }
    }

    return (
        <div className="container">
            <div className="pics"
                data-aos-offset="0"
                data-aos="fade-up"
            >
                <div>
                    <h1 data-aos-offset="0"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >Resim Galerisi
                    </h1>

                    <div className="buttons">
                        <span>Görünüm:</span>
                        <IconButton onClick={() => changeAlignment("grid")}><WindowIcon /></IconButton>
                        <IconButton onClick={() => changeAlignment("list")}><TableRowsIcon /></IconButton>
                    </div>
                </div>
                <hr />
                <div style={divStyle} className="pic"
                    data-aos-offset="0"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {images.map((e, i) =>
                        <img data-aos-offset="0"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            style={imgStyle}
                            key={i}
                            onClick={() => handleOpen(e)}
                            alt="resim"
                            src={e.url}
                        />
                    )}
                </div>
            </div>
        </div >
    )
}
