export async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY is missing. Bypassing reCAPTCHA verification.");
    return true; // Bypass if not configured in dev
  }

  try {
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    
    // Check if the request was successful and if the score is sufficient (>= 0.5)
    if (data.success && data.score >= 0.5) {
      return true;
    } else {
      console.error("reCAPTCHA validation failed:", data);
      return false;
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return false;
  }
}
