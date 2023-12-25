const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;

  if (str) {
    str = str.toString();
  }
  if (addition) {
    addition = addition.toString();
  }

  let additionString = '';

  if (!separator) {
    separator = '+';
  }
  if (!repeatTimes) {
    repeatTimes = 1;
  }
  if (!additionRepeatTimes) {
    additionRepeatTimes = 1;
  }

  if (addition) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i === additionRepeatTimes - 1) {
        additionSeparator = '';
      }

      additionString += addition + additionSeparator;
    }
  }


  let finalString = '';

  for (let i = 0; i < repeatTimes; i++) {
    if (i === repeatTimes - 1) {
      separator = '';
    }

    finalString += str + additionString + separator;
  }

  return finalString;
}

module.exports = {
  repeater
};
