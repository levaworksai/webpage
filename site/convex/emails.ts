"use node";

import { internalAction } from "./_generated/server";
import { v } from "convex/values";

export const sendContactNotification = internalAction({
  args: {
    name: v.string(),
    email: v.string(),
    business: v.string(),
    message: v.string(),
  },
  handler: async (_, args) => {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "LevaWorks <notifications@noreply.levaworks.ai>",
        to: ["andres@levaworks.ai", "robert@levaworks.ai"],
        subject: `New Lead: ${args.name} — ${args.business}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #666;">Name</td>
              <td style="padding: 8px;">${args.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #666;">Email</td>
              <td style="padding: 8px;"><a href="mailto:${args.email}">${args.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #666;">Business</td>
              <td style="padding: 8px;">${args.business}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #666;">Message</td>
              <td style="padding: 8px;">${args.message}</td>
            </tr>
          </table>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Failed to send email: ${error}`);
    }
  },
});
