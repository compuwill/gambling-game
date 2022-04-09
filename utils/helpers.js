module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },

  format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
      return word;
  },

  format_url: url => {
      return url
        .replace('http://', '')
        .replace('https://', '')
        .replace('www.', '')
        .split('/')[0]
        .split('?')[0];
  },

  cal_percentage: (lose, win) => {
    var percent = (( (parseInt(win)) / ((parseInt(lose)) + (parseInt(win))) ) * 100 ).toFixed(2);
    return `${percent}`;;
  },

  make_uppercase: phrase => {
    var result = phrase.toString().toUpperCase();
    return `${result}`;
  },

  ifEquals: (arg1, arg2, options) => {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
  }

 }