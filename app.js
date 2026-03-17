// Contenedor de chat
const chat = document.getElementById("chat");

// Función para añadir un mensaje al chat
function addMessage(text, cls) {
  const div = document.createElement("div");
  div.className = cls;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// Función para enviar un mensaje al backend
async function sendMessage(Hola soc Pau Charles Cazorla) {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (!text) return;

  // Mostrar el mensaje del usuario en el chat
  addMessage(text, "user");
  input.value = "";

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });

    const data = await res.json();

    // Mostrar la respuesta de la IA
    addMessage("IA: " + data.reply, "ai");
  } catch (error) {
    console.error;
    addMessage;
  }
}

// Función para generar imágenes (si tu proyecto lo usa)
function generateImage() {
  const prompt = document.getElementById("imagePrompt").value.trim();
  if (!prompt) return;

  const result = document.getElementById("imageResult");
  result.innerHTML = "";

  const img = document.createElement("img");
  img.src = "https://via.placeholder.com/400x300.png?text=" + encodeURIComponent(prompt);
  img.style.maxWidth = "100%";
  result.appendChild(img);
}
