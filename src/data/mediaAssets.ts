// Centralized real photograph imports from src/assets/images
// Exactly matching the directory structure and discovered files

// 1. Google Student Ambassador (google-gsa) - 3 images
import gsa01 from '../assets/images/achievements/ google-gsa/01.png';
import gsa02 from '../assets/images/achievements/ google-gsa/02.png';
import gsa03 from '../assets/images/achievements/ google-gsa/03.png';

// 2. Google Cloud Arcade Facilitator (google-cloud-arcade) - 3 images
import arcade01 from '../assets/images/achievements/google-cloud-arcade/01.png';
import arcade02 from '../assets/images/achievements/google-cloud-arcade/02.png';
import arcade03 from '../assets/images/achievements/google-cloud-arcade/03.png';

// 3. Microsoft Build: Localhost (microsoft-build-localhost) - 3 images
import msBuild01 from '../assets/images/achievements/microsoft-build-localhost/01.png';
import msBuild02 from '../assets/images/achievements/microsoft-build-localhost/02.png';
import msBuild03 from '../assets/images/achievements/microsoft-build-localhost/03.png';

// 4. Open Source Campus Lead (open-source-campus-lead) - 2 images
import osLead01 from '../assets/images/achievements/open-source-campus-lead/01.png';
import osLead02 from '../assets/images/achievements/open-source-campus-lead/02.png';

// 5. Open Source Contributor (open-source-contributor) - 2 images
import osContrib01 from '../assets/images/achievements/open-source-contributor/01.png';
import osContrib02 from '../assets/images/achievements/open-source-contributor/02.png';

// 6. SIT SIH Top 10 Team (sit-sih-top10) - 3 images
import sih01 from '../assets/images/achievements/sit-sih-top10/01.png';
import sih02 from '../assets/images/achievements/sit-sih-top10/02.png';
import sih03 from '../assets/images/achievements/sit-sih-top10/03.png';

// 7. Software Engineering & Algorithmic Mentor (hms-mentorship) - 3 images
import mentor01 from '../assets/hms-mentorship/01.png';
import mentor02 from '../assets/hms-mentorship/02.png';
import mentor03 from '../assets/hms-mentorship/03.png';

// 8. Google GSoC Meetup @ Google Ananta (google-gsoc-meetup) - 3 images
import gsoc01 from '../assets/images/events/google-gsoc-meetup/01.jpg';
import gsoc02 from '../assets/images/events/google-gsoc-meetup/02.jpg';
import gsoc03 from '../assets/images/events/google-gsoc-meetup/03.jpg';

// 8. Microsoft Bengaluru Database Session (microsoft-bengaluru-database) - 3 images
import msDb01 from '../assets/images/events/ microsoft-bengaluru-database/01.png';
import msDb02 from '../assets/images/events/ microsoft-bengaluru-database/02.png';
import msDb03 from '../assets/images/events/ microsoft-bengaluru-database/03.png';

// Profile
const profilePhoto = '/images/profile.jpg';

export const MEDIA_ASSETS = {
  profile: profilePhoto,
  resumePdf: '/Divyaprada_G_Resume.pdf',
  achievements: {
    gsa: [gsa01, gsa02, gsa03],
    arcade: [arcade01, arcade02, arcade03],
    msBuild: [msBuild01, msBuild02, msBuild03],
    osLead: [osLead01, osLead02],
    osContrib: [osContrib01, osContrib02],
    sih: [sih01, sih02, sih03],
    mentor: [mentor01, mentor02, mentor03],
  },
  events: {
    gsocMeetup: [gsoc01, gsoc02, gsoc03],
    msDatabase: [msDb01, msDb02, msDb03],
    mentorship: [mentor01, mentor02, mentor03],
  }
};
