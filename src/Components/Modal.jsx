import * as React from 'react';
import Modal from '@mui/material/Modal';
import { images } from './images';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function BasicModal({ open, item, setItem, handleClose }) {

    //İleri Geri Fonksiyonu
    const Arrows = (e) => {
        let index = images.findIndex(e => e.url === item.url)
        if (e.target.value === "back") {
            index -= 1
        } else {
            index += 1
        }
        let Item = images[index] || images[0]
        setItem(Item)
    }

    return (
        <div>
            {item && <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='modalContent'>
                    <span className='closeBtn'>
                        <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                    </span>
                    <div className="modalDescription">
                        <h2 data-aos-offset="0"
                            data-aos="fade-up"
                            data-aos-delay="200">{item.title}</h2>
                        <p data-aos-offset="0"
                            data-aos="fade-rigt"
                            data-aos-delay="300">{item.description}</p>
                    </div>
                    <div data-aos="zoom-in"
                        data-aos-delay="400"
                        className="slider">
                        <button value="back" onClick={(e) => Arrows(e)}><span>⟪</span></button>
                        <img src={item.url} alt={item.title} />
                        <button onClick={(e) => Arrows(e)} value="next"><span>⟫</span></button>
                    </div>
                </div>
            </Modal>}
        </div>
    );
}