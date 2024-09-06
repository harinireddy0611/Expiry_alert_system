import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div className='home'>
       <div className="content">
        <h2> Welcome to Remindax</h2>
        <p>Your medicine expiry alert system.</p>
      </div>
      <div className='img'>
      <img src="https://cdn.prod.website-files.com/623f5732526276cc2ecfab04/663c1e44efa46b61b305c01a_Graphic%20Hero%20(1).png" loading="lazy" sizes="(max-width: 479px) 81vw, (max-width: 767px) 83vw, (max-width: 991px) 41vw, (max-width: 1919px) 42vw, 40vw" srcset="https://cdn.prod.website-files.com/623f5732526276cc2ecfab04/663c1e44efa46b61b305c01a_Graphic%20Hero%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/623f5732526276cc2ecfab04/663c1e44efa46b61b305c01a_Graphic%20Hero%20(1)-p-800.png 800w, https://cdn.prod.website-files.com/623f5732526276cc2ecfab04/663c1e44efa46b61b305c01a_Graphic%20Hero%20(1)-p-1080.png 1080w, https://cdn.prod.website-files.com/623f5732526276cc2ecfab04/663c1e44efa46b61b305c01a_Graphic%20Hero%20(1).png 1280w" alt="illustration of expiration reminder app functions" class="image-14"/>
      </div>
    </div>
  );
}

export default Home;
