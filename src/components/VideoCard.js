import React from 'react'

const VideoCard = ({ info }) => {
       const { statistics, snippet } = info;
      const { channelTitle, title, thumbnails } = snippet;
      console.log(thumbnails);
  return (
        <div className='p-2 m-2 w-72 shadow-lg'>
            <img className="rounded-lg" src={thumbnails.medium.url} />
              <ul>
                    <li className="font-bold py-2">{title}</li>
                    <li>{channelTitle}</li>
                    <li>{statistics.viewCount} Views</li>
              </ul> 
    </div>
  )
}

export default VideoCard