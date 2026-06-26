// Normalize answer: lowercase, trim, remove trailing s
function normalize(str) {
  return str.toLowerCase().trim().replace(/s$/, '');
}

function checkAnswer(answers, nextPage) {
  const input = document.getElementById('answerInput');
  const errorMsg = document.getElementById('errorMsg');
  const val = normalize(input.value);

  const accepted = Array.isArray(answers) ? answers : [answers];
  const match = accepted.some(a => normalize(a) === val);

  if (match) {
    input.classList.add('correct');
    input.classList.remove('shake');
    errorMsg.classList.remove('show');
    setTimeout(() => { window.location.href = nextPage; }, 500);
  } else {
    input.classList.add('shake');
    input.classList.remove('correct');
    errorMsg.textContent = 'Incorrect. Look more carefully.';
    errorMsg.classList.add('show');
    setTimeout(() => input.classList.remove('shake'), 400);
  }
}

function toggleHint() {
  document.getElementById('hintBox').classList.toggle('open');
}

function toggleExtraHint() {
  document.getElementById('extraHint').classList.toggle('open');
}

function bindEnter(answers, nextPage) {
  document.getElementById('answerInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') checkAnswer(answers, nextPage);
  });
}

// Header map button
function header(pageLabel, subtitle) {
  return `<header>
  <div class="header-title">The <span>30th</span> Degree</div>
  <a href="https://maps.metmuseum.org/?floor=1&lang=en-GB#17/40.779448/-73.963517/-61" target="_blank" class="map-btn">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
    Map
  </a>
</header>`;
}
