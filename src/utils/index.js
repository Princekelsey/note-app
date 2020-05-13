export const dateFormater = (d) => {
  let date = new Date(d);

  if (isNaN(date.getTime())) {
    return d;
  } else {
    let month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    day = date.getDate();

    if (day < 10) {
      day = "0" + day;
    }

    return day + " " + month[date.getMonth()];
  }
};

export const showDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const today = new Date();
  const thisMonth = months[today.getMonth()];
  const thisDate = today.getDate();
  const thisYear = today.getFullYear();
  const thisHour = today.getHours();
  const thisMinute = today.getMinutes();
  return `${thisDate} ${thisMonth} ${thisYear}`;
};

export const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
