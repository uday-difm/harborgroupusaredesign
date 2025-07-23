export function generateEmailTemplate({ subject, body, footer = "1stAlliance Group" }) {
  return `
    <html>
      <head>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f7fc;
            color: #2c3e50;
          }

          .email-container {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
            border: 1px solid #e0e6ed;
          }

          .email-header {
            background-color: #28A6AD;
            border-radius: 8px;
            color: #ffffff;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 0.5px;
            margin-bottom: 24px;
          }

          h2 {
            color: #1EA7E1;
            font-size: 22px;
            margin-top: 0;
          }

          p {
            font-size: 16px;
            line-height: 1.6;
            color: #333;
            margin-bottom: 16px;
          }

          ul {
            padding-left: 20px;
            color: #444;
            font-size: 15px;
            margin-bottom: 20px;
          }

          hr {
            border: none;
            border-top: 1px solid #e1e1e1;
            margin: 30px 0;
          }

          .footer {
            font-size: 13px;
            color: #7f8c8d;
            text-align: center;
            margin-top: 20px;
          }

          .footer a {
            color: #1EA7E1;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">${subject}</div>
          ${body}
          <hr />
          <div class="footer">
            ${footer} &middot; 
            <a href="https://1stalliancegrp.com/">Visit our website</a>
          </div>
        </div>
      </body>
    </html>
  `;
}