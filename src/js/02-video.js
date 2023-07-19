import Vimeo from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
let startPoint = Number(localStorage.getItem('videoplayer-current-time')) || 0;

player.setCurrentTime(startPoint);

player.on('timeupdate', throttle(DontKnowHowToCallIt, 1000));

function DontKnowHowToCallIt(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}
