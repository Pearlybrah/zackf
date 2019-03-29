$(document).ready(() => {
  //quoute array
  let quoteData = [
    "The unexamined life is not worth living - Socrates",
    "Whereof one cannot speak thereof one must be silent - Ludwig Wittgenstein",
    "Entities should not be multiplied unnecessarily - William of Ockham",
    "The life of man (in a state of nature) is solitary, poor, nasty, brutish and short -Thomas Hobbes",
    "I think therefore I am (Cogitoergo sum) - René Descartes",
    "He who thinks great thoughts often makes great errors - Martin Heidegger",
    "We live in the best of all possible worlds - Gottfried Wilhelm Leibniz",
    "What is rational is actual and what is actual is rational - G. W. F. Hegel",
    "There is but one truly serious philosophical problem and that is suicide -  Albert Camus",
    "One cannot step twice in the same river - Heraclitus"
  ];

  //quoute display function in es6
  const newQuote = () => {
    let quote = $(".quote");
    let author = $(".author");
    let splitQuote;
    let quoteDisplay = [];

    let quoteLength = quoteData.length;
    let randomNumber = Math.floor(Math.random() * quoteLength);
    let randomQuote = quoteData[randomNumber];
    splitQuote = randomQuote.split("-");
    quoteDisplay.push(splitQuote);
    quote.append(quoteDisplay[0][0]);
    author.append("-" + quoteDisplay[0][1]);
  };
  newQuote();
});
