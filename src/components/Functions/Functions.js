// This functio make firt leter to be uppercase
export const upperCaseFirstLeterString = (str) => {
  if (str !== "") return str[0].toUpperCase() + str.slice(1);
};
// This function dos not allow to insert empty spaces
export const anonimName = (str) => {
  const words = str.split(" ");
  const isAnonim = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " " && words[i] !== "") {
      isAnonim.push(upperCaseFirstLeterString(words[i]));
    }
  }
  if (isAnonim.length > 0) {
    return isAnonim.join(" ");
  } else {
    return "Anonim";
  }
};
// make function for displayng hour and minutes with 2 digits and assign it to const
export const timeProcesHouers = (time) => {
  if (time < 10) {
    return "0" + time;
  } else if (time > 12) {
    return `0${time - 12}`;
  } else if (time === 24) {
    return "00";
  } else {
    return time;
  }
};
export const timeProcesMinutes = (time) => {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
};
// function that returns if time is in pm or am
export const PM_AM = (time) => {
  if ((time = 12)) {
    return "AM";
  } else if (time >= 12) {
    return "PM";
  }
};
