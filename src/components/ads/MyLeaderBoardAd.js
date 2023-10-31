import React, { useEffect } from 'react';

const MyLeaderBoardAd = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
 {/*  titleAi horizontal display ad  */}
<ins class="adsbygoogle"
     style={{ display: "inline-block"}}
     data-ad-client="ca-pub-4140581065150949"
     data-ad-slot="7523840609"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
    </div>
  );
};

export default MyLeaderBoardAd;
