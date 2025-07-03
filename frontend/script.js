const imageInput = document.getElementById("image-upload");
const imagePreview = document.getElementById("image-preview");
const responseBox = document.getElementById("response-box");
const responseText = document.getElementById("response");
const submitBtn = document.getElementById("submit-btn");

let base64Image = "";

// Preview image when uploaded
imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    base64Image = reader.result.split(",")[1]; // remove data:image/... part
    imagePreview.src = reader.result;
    imagePreview.style.display = "block";
    responseBox.style.display = "none"; // Hide response until new result
  };

  reader.readAsDataURL(file);
});

// Submit image for analysis
submitBtn.addEventListener("click", async () => {
  if (!base64Image) {
    alert("Please upload an image first.");
    return;
  }

  responseText.textContent = "🔍 Analyzing car image...";
  responseBox.style.display = "block";

  try {
    const res = await fetch("http://localhost:5000/analyze-car", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ base64Image })
    });

    const data = await res.json();

    if (data.result) {
      responseText.textContent = `✅ Result: ${data.result}`;
    } else {
      responseText.textContent = "⚠️ No result found.";
    }

  } catch (err) {
    console.error("Error:", err);
    responseText.textContent = "❌ Error connecting to server.";
  }
});
