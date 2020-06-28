import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import style from './style.module.css';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

export default function DialogModal(props) {
  const classes = useStyles();
  const images = ["https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(152).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(40).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(149).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(150).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg"];

  const [show, setShow] = React.useState(false);
  const [cardimage, setcardImage] = React.useState(null);

  const handleClose = () => { 
     setShow(false);
     setcardImage(null);
  }
  const handleShow = () => setShow(true);

  const onRightClick =(name)=>{ 
    //console.log(images[images.indexOf(name)+1]);
    setcardImage(images[images.indexOf(name)+1]);
  }

  const onLeftClick =(name)=>{ 
    setcardImage(images[images.indexOf(name)-1]);
  }
  

  return (
    <>
      <CardMedia
        className={classes.media}
        image={props.image}
        title=""
        onClick={handleShow}
      />
    <Modal show={show} dialogClassName={style.modalWidth} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:'0rem'}}>
         <span><i className={[style.leftArrow,"fa fa-lg fa-chevron-left fa-2x"].join(' ')} onClick={()=>onLeftClick(cardimage != null?cardimage:props.image)}></i></span>
        <CardMedia
        className={classes.media}
        image={cardimage != null?cardimage:props.image}
        title=""
      />
       <span><i className={[style.rightArrow, "fa fa-lg fa-chevron-right fa-2x"].join(' ')} onClick={()=>onRightClick(cardimage != null?cardimage:props.image)}></i></span>
      </Modal.Body>
      </Modal>
    </>
  );
}
