const getFormattedTime = time => {
  let minutes = Math.floor(time / 60),
    seconds = time % 60;
  
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  
  return `${minutes} : ${seconds}`;
};

const getFormattedRatingPosition = time => `${getRatingPosition(time)}-е место`;

const getRatingPosition = time => {
  let scores = getScores();
  
  if (!scores.length) {
    return 1;
  }
  
  for (let i = 0; i < scores.length; i++) {
    if (time < scores[i].time) {
      return i + 1;
    }
  }
  
  return scores.length + 1;
};

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const removeElements = (array, indexes) => {
  indexes.sort((a, b) => (a - b));
  
  for (let i = indexes.length - 1; i >= 0; i--)
    array.splice(indexes[i], 1);
};

const getScores = () => {
  let scoresSource = localStorage.getItem('scores');
  return scoresSource
    ? JSON.parse(scoresSource).sort((a, b) => (a.time - b.time))
    : [];
};

export {getFormattedTime, shuffleArray, removeElements, getFormattedRatingPosition, getScores};