
/*   bookingForm.addEventListener("submit", function (e) {
        // If you are using an AJAX service like Formspree, use e.preventDefault()
        // For now, let's simulate the visual transition:
        // bookingForm.style.display = 'none';
        // successMessage.style.display = 'block';
        // Note: If using standard POST, the page will reload.
        // To show this without a reload, you'd use a fetch() call.
      }); */

bookingForm.addEventListener('submit', async function (e) {
    //e.preventDefault();
    const data = new FormData(bookingForm);

    try {
      const res = await fetch(bookingForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      const result = await res.json(); // Parse the response body

      if (res.ok) {
        bookingForm.style.display = 'none';
        successMessage.style.display = 'block';
      } else {
        // This will tell you EXACTLY what Formspree doesn't like
        alert(result.error || 'Something went wrong.');
      }
    } catch (error) {
      alert('Network error. Please check your connection.');
    }
  }); 

  /* <!-- Option A: Add onclick back directly -->
<button type="button" class="btn-primary"
  onclick="document.getElementById('booking').scrollIntoView({behavior:'smooth'})">
  Book now
</button>

<!-- Option B: Give it an id and fix the script -->
<button type="button" id="book-now-btn" class="btn-primary">Book now</button>
<script>
  document.getElementById('book-now-btn').addEventListener('click', () => {
    document.getElementById('booking').scrollIntoView({behavior:'smooth'});
  });
</script> */

bookingForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const data = new FormData(bookingForm);

  const res = await fetch(bookingForm.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  const result = await res.json(); // Parse the response body

  if (res.ok) {
    bookingForm.style.display = 'none';
    successMessage.style.display = 'block';
  } else {
    alert(result.error || 'Something went wrong.');
  }
});