import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AddVideohistoryApi, deleteVideoApi } from '../services/allApi';


function Videocard({ video, setDeletevideoStatus,ispresent }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);

        const time = new Date()
        console.log(time);

        let formatteddate = new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(time)
        console.log(formatteddate);


        const reqbody = {
            Caption: video?.caption,
            Url: video?.embededLink,
            time: formatteddate
        }
        const result = await AddVideohistoryApi(reqbody)
        console.log(result);

    }

    const handledelete = async (id) => {
        const result = await deleteVideoApi(id)
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
            setDeletevideoStatus(result.data);
        }

    }

    const videoDrag = (e, video) => {
        console.log(video);
        e.dataTransfer.setData("videodetails", JSON.stringify(video))

    }
    return (
        <div>
            <Card style={{ width: '100%' }} draggable onDragStart={(e) => videoDrag(e, video)} className='mt-4'>
                {!ispresent && <Card.Img onClick={handleShow} variant="top" src={video?.imageUrl} className='w-100' height={'300px'} />
                }                <Card.Body className='d-flex justify-content-between'>
                    <Card.Title>{video?.caption}</Card.Title>
                    {!ispresent && <Button variant="danger" onClick={() => handledelete(video?.id)} ><FontAwesomeIcon icon={faTrash} /></Button>
                    }                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{video?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="514" src={`${video?.embededLink}?autoplay=1`} title="Ethu Kari Raavilum | Bangalore Days | Video Songs | NivinPauly | Dulquar Salman | Nazriya | Parvathi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Videocard
