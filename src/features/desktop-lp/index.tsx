import React, {useEffect} from 'react';
// import LpHeader from './components/LpHeader';
// import InviteOptions from './components/InviteOptions';
// import DownloadButtons from './components/DownloadButtons';
// import {inviteDetails} from "../../services/inviteDetails";
import { Box , Image} from 'wix-style-react'

function DesktopLP() {

  // useEffect(() => {
  //   inviteDetails.get({inviteCode: "YVDKFT"})
  //     .then((data) => {
  //       alert(JSON.stringify(data));
  //       console.log('Get invite Details', 'success', JSON.stringify(data));
  //     }).catch((error) => {
  //     console.log('Get invite Details', 'error', JSON.stringify(error));
  //   });
  // });

  return (
     <Image src="./assets/lp_background_spaces.jpg" />
  );
}

export default DesktopLP;

