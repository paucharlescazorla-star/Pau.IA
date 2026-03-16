
const chat=document.getElementById("chat");

function addMessage(text,cls){
const div=document.createElement("div");
div.className=cls;
div.textContent=text;
chat.appendChild(div);
chat.scrollTop=chat.scrollHeight;
}

function async function sendMessage() {
  const message = document.getElementById("input").value;

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.textContent = "IA: " + data.reply;
  chatBox.appendChild(msgDiv);
}{
const input=document.getElementById("messageInput");
const text=input.value.trim();
if(!text)return;

addMessage(text,"user");
input.value="";
}

function generateImage(){
const prompt=document.getElementById("imagePrompt").value.trim();
if(!prompt)return;

const result=document.getElementById("imageResult");
result.innerHTML="";

const img=document.createElement("img");
img.src="https://via.placeholder.com/400x300.png?text="+encodeURIComponent(prompt);
img.style.maxWidth="100%";
result.appendChild(img);
}
