import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import CommentsContainer from './CommentsContainer';

const WatchVideo = () => {
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(closeMenu());
      },[])
      const [searchParams] = useSearchParams();
      console.log("JHello",searchParams.get("v"));
      return (
        <div>
        <div className='px-5'><iframe
              width="950"
              height="600"

    src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?rel=0&autoplay=1"}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    allowFullScreen
                  ></iframe></div>
                  <CommentsContainer/>
                  </div>
        
  )
}

export default WatchVideo;