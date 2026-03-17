// pages/api/chat.js

export default function handler(req, res) {
  try {
    // 🔥 RESPUESTA SIMPLE PARA PROBAR
    return res.status(200).json({
      reply: "API funcionando correctamente"
    });

  } catch (error) {
    console.error("ERROR:", error);
    return res.status(200).json({
      reply: "Error controlado"
    });
  }
}
