import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './style.module.css';
import PhotoCard from './PhotoCard';

class Page2 extends Component {
  constructor(props)
  {
    super(props);
    this.paintImages=this.paintImages.bind(this);
    this.paintCardImages=this.paintCardImages.bind(this);
  }
  componentWillMount(){
    console.log([style.like, "fa fa-lg fa-heart fa-2x"].join(' '));
  }
  paintCardImages(){ 

   const styles = 
{

media: {
  height: 0,
  paddingTop: '56.25%', // 16:9,
  marginTop:'30'
}
  };


    let imgArr =["https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(152).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(40).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(149).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(150).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg"];

  let newcontent = [];
  for(var i=0;i<imgArr.length;i++){ 
   newcontent.push(<PhotoCard image={imgArr[i]}/>);
  }
  return newcontent;
  }
  paintImages(){ 
  
  let imgArr =["https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(152).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(40).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg",
               "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg"];

  //let url = "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(145).jpg" ;  
  let content = [];
  for(var i=0;i<imgArr.length;i++){ 
   content.push(<div class="col-lg-3 col-md-4 col-6" style={{paddingLeft:'5px',paddingRight:'5px'}}>
      <a href="#" class="d-block mb-4 h-100">
            <img class='img-fluid img-thumbnail' src={imgArr[i]} alt=""/>
            <div className={style.overlay}><span><i className={[style.like, "fa fa-lg fa-heart fa-2x"].join(' ')}></i></span></div>
          </a>

    </div>);
  }
  return content;
 }
  render() {
    return (
      <div className="container-fluid">
    <div className="row mt-3"><div className="col-lg-12">
      <div className="card">
  <div className="card-header">
    <b>My Photos</b> <button className="btn btn-dark" style={{float:'right'}} onClick={this.addNewStudent}>Add New Photo(s)</button>
  </div>

  <div className="card-body">
  <div className="row">{this.paintCardImages()}</div>
  
      </div></div></div></div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Page2);
