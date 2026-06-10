export async function sendEmail({ 
  to, 
  subject, 
  htmlContent, 
  senderName = "HappyMom",
  senderEmail = "no-reply@happymom.com",
  replyTo
}: { 
  to: string[], 
  subject: string, 
  htmlContent: string,
  senderName?: string,
  senderEmail?: string,
  replyTo?: { name?: string, email: string }
}) {
  const apiKey = process.env.BREVO_API_KEY;
  
  if (!apiKey) {
    console.error("BREVO_API_KEY is not defined in environment variables.");
    return { success: false, error: "Configuration error" };
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": apiKey,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: to.map(email => ({ email })),
      subject: subject,
      htmlContent: htmlContent,
      replyTo: replyTo
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Brevo API error:", errorData);
    return { success: false, error: errorData.message || "Failed to send email" };
  }

  return { success: true };
}
