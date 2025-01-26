document.addEventListener("DOMContentLoaded", function () {
  Swal.fire({
    title: "New Update is HERE!!!",
    html: `
      <div style="text-align: left; line-height: 1.5;">
        . The theme has been successfully updated, hope you enjoy it!<br><br>
        1. Stay tuned for the upcoming updates!<br><br>
        1.1 We will add the Holy Quran for reading.<br><br>
        1.2 A library will be included.<br><br>
        1.3 New reciters will be added to make Quran memorization easier for children.<br><br>
        1.4 A memorization system will be introduced to help children learn.
      </div>
    `,
    icon: "success",
    confirmButtonText: "Got it!",
    background: "#1f2629",
    color: "#ffffff",
    width: 500, // Optional: You can adjust the width of the popup
    padding: "5px", // Optional: Adjust padding for better readability
    customClass: {
      container: "swal2-container",
    },
  });
});
