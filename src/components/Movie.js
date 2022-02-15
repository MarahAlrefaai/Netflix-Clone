import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ModalMovie from './ModalMovie';
import { useState } from 'react';

export default function Movie(props) {
    const [show, setShow] = useState(false);
    const [chosenMovie, setchosenMovie] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
function handleShowModal(data){
    
    handleShow();
    setchosenMovie(data)
}
    return (
        <>
            <h1>Movies List:</h1>

            {
                
                 
                        <>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.dataOfMovie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title>{props.dataOfMovie.title}</Card.Title>
                                    <Button variant="primary" onClick={()=>{handleShowModal(props.dataOfMovie) }}>Show Modal</Button>
                                </Card.Body>
                            </Card>
                           {
                          chosenMovie &&  <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie}/>
                           } 
                        </>    
            }</>)}