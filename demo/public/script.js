document.getElementById("cibilForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const pan = document.getElementById("pan").value;

  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if (!panRegex.test(pan)) {
    alert("Please enter a valid PAN number.");
    return;
  }

  // Redirect user to the real credit bureau page
  window.location.href = "https://www.paisabazaar.com/cibil-credit-score";
});
