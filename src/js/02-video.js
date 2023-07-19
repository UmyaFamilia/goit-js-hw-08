import Vimeo from '@vimeo/player';

var _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
let startPoint = Number(localStorage.getItem('videoplayer-current-time')) || 0;

player.setCurrentTime(startPoint);

player.on('timeupdate', _.throttle(DontKnowHowToCallIt, 1000));

function DontKnowHowToCallIt(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}
