const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// let apiQuotes;

// Show Loading
const showLoadingSpinner = function () {
  loader.classList.remove('hidden');
  quoteContainer.classList.add('hidden');
};

// Hide Loading
const removeLoadingSpinner = function () {
  quoteContainer.classList.remove('hidden');
  loader.classList.add('hidden');
};

// Get Quotes from API
const getQuotes = async function () {
  showLoadingSpinner();
  const apiUrl = 'https://icanhazdadjoke.com/';
  const options = {
    headers: {
      Accept: 'application/json',
    },
  };
  try {
    const res = await fetch(apiUrl, options);
    if (!res) throw new Error('Oops');

    const data = await res.json();
    quoteText.textContent = data.joke;
    removeLoadingSpinner();
  } catch (err) {
    console.error(err);
  }
};

// Tweet Quote
const tweetQuote = function () {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

  // Open twitter window in a new tab
  window.open(twitterUrl, '_blank');
};

// On Load
getQuotes();

// Event Listener
newQuoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', tweetQuote);
