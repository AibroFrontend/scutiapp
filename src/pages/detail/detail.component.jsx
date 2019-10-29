import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import PopularPostsBottom from '../../components/popular-posts-bottom/ppb.component';


import '../../pages/homepage/homepage.styles.scss';


const Detail = ({title, description, id, publicationDate, history,bookImage, match}) => (


  
<div className="post">
  

<div className="w3-card-4 w3-margin w3-white">
<div className="w3-center">
  <br/>
      <h3><b>{title}</b></h3>
      <span className="w3-opacity">{publicationDate}</span>
      
    </div>
    <br/>
    <img src={bookImage} alt="Nature" />
    

    <div className="w3-container">
      <ReactMarkdown source={description} escapeHtml={false}/>

      
    </div>
  </div>
  <hr/>

  <PopularPostsBottom history={history}/>      
      
  </div>



)

export default withRouter(Detail);