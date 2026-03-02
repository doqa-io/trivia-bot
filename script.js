// ── Helper: print to chat window & console ─────
const chat = document.getElementById("chat");

function say(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bubble = document.createElement("div");
      bubble.classList.add("chat-bubble");
      bubble.textContent = message;
      chat.appendChild(bubble);
      chat.scrollTop = chat.scrollHeight;
      console.log(message);
      resolve();
    }, delay);
  });
}

// ── Bot data ────────────────────────────────────
let botName = "doqaBot";
let botLocation = "Biganos, France";
let favoriteLanguage = "gherkin";

// ── Run conversation ────────────────────────────
(async () => {
  await say("Hello! I'm your coding fun fact guide!", 0);
  await say("My name is " + botName + " and I live on " + botLocation + ".", 600);
  await say("My favorite programming language is " + favoriteLanguage + ".", 600);

  let codingFact = favoriteLanguage + " is best used with LLMs";
  await say(codingFact, 600);

  codingFact = favoriteLanguage + " well written, happy team";
  await say(codingFact, 600);

  codingFact = "Don't touch my BDD, provide " + favoriteLanguage;
  await say(codingFact, 600);

  await say("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".", 600);
})();