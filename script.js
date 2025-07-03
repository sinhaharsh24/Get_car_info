document.addEventListener("DOMContentLoaded", () => {
  const imageInput = document.getElementById("image-upload");
  const imagePreview = document.getElementById("image-preview");
  const submitBtn = document.getElementById("submit-btn");
  const responseBox = document.getElementById("response-box");
  const responseText = document.getElementById("response");

  let base64Image = "";

  imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      base64Image = reader.result.split(",")[1]; // Remove data:image/...;base64,
      imagePreview.src = reader.result;
      imagePreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  });

  submitBtn.addEventListener("click", async () => {
    if (!base64Image) {
      alert("Please select an image first.");
      return;
    }

    responseBox.style.display = "block";
    responseText.textContent = "🔍 Analyzing car image...";

    try {
      const res = await fetch("https://get-car-info.vercel.app/analyze-car", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ base64Image })
      });

      const data = await res.json();
      if (data && data.result) {
        responseText.textContent = data.result;
      } else {
        responseText.textContent = "❌ Unable to identify the car.";
      }
    } catch (err) {
      console.error(err);
      responseText.textContent = "❌ Error occurred while analyzing.";
    }
  });
});
