import React, {useState} from 'react'
import {Button,Modal,InputGroup,FormControl} from "react-bootstrap"
import {useDispatch} from 'react-redux'
import {Tour,deleteTour} from "../../Redux/Actions/actions"

function Example({userId}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch= useDispatch()
  const [title , setTitle ] = useState('')
  const [description , setDescription] = useState('')
  const [urlImages , setUrlImages] = useState('')


  const AddingNewTrip = () => { 
    dispatch(Tour({title,description,url_images:urlImages}));
    handleClose()
    window.location.reload()
      }
  const deletPost = () =>{
    dispatch(deleteTour(userId))
    handleClose()
    window.location.reload()
  }
  return (
    <div>
    <Button className ="ButtonBlue" variant="primary" onClick={handleShow}>
    Add new trip
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>

    <InputGroup className="mb-3">
<InputGroup.Text id="basic-addon1"> Title </InputGroup.Text>
<FormControl
placeholder="Enter the name of the trip"  onChange ={(e) => setTitle(e.target.value)}
aria-label="name of trip"
aria-describedby="basic-addon1"
/>
</InputGroup>

<InputGroup className="mb-3">
<InputGroup.Text id="basic-addon1"> Description </InputGroup.Text>
<FormControl
placeholder="Enter the description of the trip" onChange ={(e) =>  setDescription(e.target.value)}
aria-label="Username"
aria-describedby="basic-addon1"
/>
</InputGroup>

<InputGroup className="mb-3">
<InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
<FormControl
placeholder="Enter URL image of places" onChange = {(e) => setUrlImages(e.target.value)}
aria-label="Username"
aria-describedby="basic-addon1"
/>
</InputGroup>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="warning" onClick={()=> deletPost()}>
        delete
      </Button>
      <Button variant="primary" onClick={() => AddingNewTrip()}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  </div>



    
  );
}



export default Example ;