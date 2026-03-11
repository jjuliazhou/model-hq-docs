import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const issueType = formData.get("issueType") as string
    const subject = formData.get("subject") as string
    const body = formData.get("body") as string

    // Get all files
    const files: File[] = []
    let fileIndex = 0
    while (formData.get(`file_${fileIndex}`)) {
      const file = formData.get(`file_${fileIndex}`) as File
      files.push(file)
      fileIndex++
    }

    const issueTypeLabels: { [key: string]: string } = {
      technical: "Technical Issue",
      bug: "Bug Report",
      feature: "Feature Request",
      documentation: "Documentation Feedback",
      trial: "Free Trial Access Code Request",
      general: "General Inquiry",
      other: "Other",
    }

    // Prepare attachments for Resend
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = await file.arrayBuffer()
        return {
          filename: file.name,
          content: Buffer.from(buffer),
        }
      }),
    )

    // Create professional HTML email template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Model HQ Support Request</title>
</head>
<body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f0f4f8; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 40px 35px; text-align: center; border-bottom: 4px solid #1e40af;">
            <h1 style="margin: 0 0 10px 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px; color: #cbd5e1;">Model HQ Support Request</h1>
            <p style="margin: 0; font-size: 15px; color: #cbd5e1;">New support ticket received</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 35px;">
            <!-- Customer Info -->
            <div style="background: #f8fafc; padding: 24px; border-radius: 6px; margin-bottom: 28px; border: 2px solid #e2e8f0; border-left: 4px solid #1e40af;">
                <h2 style="margin: 0 0 18px 0; color: #0f172a; font-size: 17px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Customer Information</h2>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr>
                        <td style="padding: 10px 0; font-weight: 600; color: #475569; width: 120px;">Name:</td>
                        <td style="padding: 10px 0; color: #0f172a;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: 600; color: #475569; border-top: 1px solid #cbd5e1;">Email:</td>
                        <td style="padding: 10px 0; color: #0f172a; border-top: 1px solid #cbd5e1;"><a href="mailto:${email}" style="color: #1e40af; text-decoration: none; font-weight: 600;">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: 600; color: #475569; border-top: 1px solid #cbd5e1;">Issue Type:</td>
                        <td style="padding: 10px 0; border-top: 1px solid #cbd5e1;">
                            <span style="background: #dbeafe; color: #1e40af; padding: 5px 14px; border-radius: 4px; font-size: 13px; font-weight: 600; border: 1px solid #bfdbfe;">
                                ${issueTypeLabels[issueType] || issueType}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: 600; color: #475569; border-top: 1px solid #cbd5e1;">Subject:</td>
                        <td style="padding: 10px 0; color: #0f172a; font-weight: 600; border-top: 1px solid #cbd5e1;">${subject}</td>
                    </tr>
                </table>
            </div>
            
            <!-- Message -->
            <div style="margin-bottom: 28px;">
                <h3 style="margin: 0 0 16px 0; color: #0f172a; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Message</h3>
                <div style="background: #ffffff; border: 2px solid #cbd5e1; border-left: 4px solid #1e40af; border-radius: 4px; padding: 20px; white-space: pre-wrap; line-height: 1.7; color: #334155; font-size: 14px;">${body}</div>
            </div>
            
            ${
              files.length > 0
                ? `
            <!-- Attachments -->
            <div style="margin-bottom: 28px;">
                <h3 style="margin: 0 0 16px 0; color: #0f172a; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Attachments (${files.length})</h3>
                <div style="background: #f8fafc; border-radius: 6px; padding: 18px; border: 2px solid #e2e8f0;">
                    ${files
                      .map(
                        (file) => `
                        <div style="display: flex; padding: 10px 0; border-bottom: 1px solid #cbd5e1;">
                            <div style="background: #1e40af; color: white; width: 36px; height: 36px; border-radius: 4px; display: flex; margin-right: 14px; font-size: 14px; font-weight: 700;">
                                📎
                            </div>
                            <div>
                                <div style="font-weight: 600; color: #0f172a; font-size: 14px;">${file.name}</div>
                                <div style="color: #64748b; font-size: 12px;">${(file.size / 1024).toFixed(1)} KB</div>
                            </div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
            `
                : ""
            }
            
            <!-- Action Button -->
            <div style="text-align: center; margin-top: 32px;">
                <a href="mailto:${email}?subject=Re: ${subject}" 
                   style="background: #1e40af; color: white; padding: 14px 32px; border-radius: 4px; text-decoration: none; font-weight: 600; display: inline-block; border: 2px solid #1e40af; font-size: 14px;">
                    Reply to Customer
                </a>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #020617 100%); color: white; padding: 30px; text-align: center; border-top: 1px solid #1e293b;">
            <p style="margin: 0 0 8px 0; color: #e2e8f0; font-size: 13px; line-height: 1.6;">
                This email was sent from the Model HQ Documentation support form.
            </p>
            <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                Received on ${new Date().toLocaleString()}
            </p>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                <p style="margin: 0; color: #64748b; font-size: 11px;">
                    Model HQ - Private AI that runs locally on your infrastructure
                </p>
            </div>
        </div>
    </div>
</body>
</html>
    `

    // Plain text version for email clients that don't support HTML
    const textContent = `
Model HQ Support Request

Customer Information:
Name: ${name}
Email: ${email}
Issue Type: ${issueTypeLabels[issueType] || issueType}
Subject: ${subject}

Message:
${body}

${files.length > 0 ? `Attachments: ${files.length} file(s) attached` : "No attachments"}

---
This email was sent from the Model HQ Documentation support form.
Received on ${new Date().toLocaleString()}
    `.trim()

    // Customer confirmation plain text version
    const customerConfirmationText = `
═══════════════════════════════════════════════════════════════
MODEL HQ SUPPORT - REQUEST CONFIRMATION
═══════════════════════════════════════════════════════════════

REQUEST RECEIVED SUCCESSFULLY

Dear ${name},

Thank you for reaching out to Model HQ Support. We have successfully 
received your support request and want to assure you that our team is 
already reviewing it.

We appreciate your patience and will respond to your inquiry as soon 
as possible.

───────────────────────────────────────────────────────────────
REQUEST DETAILS
───────────────────────────────────────────────────────────────

Issue Type:     ${issueTypeLabels[issueType] || issueType}
Subject:        ${subject}
Date Submitted: ${new Date().toLocaleString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
Ticket ID:      #MHQ-${Date.now().toString().slice(-8)}
${files.length > 0 ? `Attachments:    ${files.length} file(s) attached` : ""}

───────────────────────────────────────────────────────────────
YOUR MESSAGE
───────────────────────────────────────────────────────────────

${body}

───────────────────────────────────────────────────────────────
WHAT HAPPENS NEXT
───────────────────────────────────────────────────────────────

1. Our expert support team will carefully review your request
2. You'll receive a personalized response within 24-48 business hours
3. We'll reply directly to: ${email}
4. Please check your spam/junk folder if you don't see our response

───────────────────────────────────────────────────────────────
NEED IMMEDIATE ASSISTANCE?
───────────────────────────────────────────────────────────────

For urgent matters or real-time support, join our Discord community 
where our team and fellow developers are ready to help.

Discord: https://discord.gg/your-discord-link

───────────────────────────────────────────────────────────────
HELPFUL RESOURCES
───────────────────────────────────────────────────────────────

* Documentation: https://model-hq-docs.vercel.app
* Video Tutorials: https://model-hq-docs.vercel.app/video-tutorials
* Blogs and Partner Solutions: https://model-hq-docs.vercel.app/blogs-and-partner-solutions

═══════════════════════════════════════════════════════════════

MODEL HQ - AI DEVELOPMENT PLATFORM

Powered by llmware

This is an automated confirmation email.
Please do not reply directly to this message.
Our support team will respond to you at ${email}

© ${new Date().getFullYear()} Model HQ. All rights reserved.
Powered by llmware - Private AI that runs locally on your infrastructure

═══════════════════════════════════════════════════════════════
    `.trim()

    // Customer confirmation email template
    const customerConfirmationHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Support Request Received - Model HQ</title>
</head>
<body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f0f4f8; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 45px 35px; text-align: center; border-bottom: 4px solid #1e40af;">
            <!-- llmware Logo -->
            <div style="margin-bottom: 24px;">
                <img src="https://raw.githubusercontent.com/BloksAdmin/model-hq-docs/main/public/images/llmware-logo.png" alt="llmware" style="height: 45px; width: auto; max-width: 200px; object-fit: contain;" />
            </div>
            
            <h1 style="margin: 0 0 12px 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px; color: #ffffff;">Support Request Received</h1>
            <p style="margin: 0; font-size: 15px; color: #cbd5e1; font-weight: 400;">Thank you for contacting Model HQ Support</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 35px;">
            <!-- Greeting -->
            <div style="margin-bottom: 32px;">
                <p style="color: #0f172a; font-size: 17px; line-height: 1.6; margin: 0 0 18px 0; font-weight: 600;">
                    Dear ${name},
                </p>
                
                <p style="color: #334155; font-size: 15px; line-height: 1.7; margin: 0 0 14px 0;">
                    Thank you for reaching out to Model HQ Support. We have successfully received your support request and want to assure you that our team is already reviewing it.
                </p>
                
                <p style="color: #334155; font-size: 15px; line-height: 1.7; margin: 0;">
                    We appreciate your patience and will respond to your inquiry as soon as possible.
                </p>
            </div>
            
            <!-- Request Summary Card -->
            <div style="background: #f8fafc; padding: 26px; border-radius: 6px; margin-bottom: 32px; border: 2px solid #e2e8f0; border-left: 4px solid #1e40af;">
                <h2 style="margin: 0 0 20px 0; color: #0f172a; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                    Request Details
                </h2>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr>
                        <td style="padding: 12px 0; font-weight: 600; color: #475569; width: 140px; vertical-align: top;">Issue Type:</td>
                        <td style="padding: 12px 0; color: #0f172a;">
                            <span style="background: #dbeafe; color: #1e40af; padding: 6px 16px; border-radius: 4px; font-size: 13px; font-weight: 600; display: inline-block; border: 1px solid #bfdbfe;">
                                ${issueTypeLabels[issueType] || issueType}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; font-weight: 600; color: #475569; border-top: 1px solid #cbd5e1; vertical-align: top;">Subject:</td>
                        <td style="padding: 12px 0; color: #0f172a; font-weight: 600; border-top: 1px solid #cbd5e1;">${subject}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; font-weight: 600; color: #475569; border-top: 1px solid #cbd5e1; vertical-align: top;">Date Submitted:</td>
                        <td style="padding: 12px 0; color: #1e293b; border-top: 1px solid #cbd5e1;">${new Date().toLocaleString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric', 
                            hour: '2-digit', 
                            minute: '2-digit',
                            timeZoneName: 'short'
                        })}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; font-weight: 600; color: #475569; border-top: 1px solid #cbd5e1; vertical-align: top;">Ticket ID:</td>
                        <td style="padding: 12px 0; color: #1e293b; border-top: 1px solid #cbd5e1; font-family: 'Courier New', monospace; font-weight: 600;">
                            #MHQ-${Date.now().toString().slice(-8)}
                        </td>
                    </tr>
                    ${files.length > 0 ? `
                    <tr>
                        <td style="padding: 12px 0; font-weight: 600; color: #475569; border-top: 1px solid #cbd5e1; vertical-align: top;">Attachments:</td>
                        <td style="padding: 12px 0; color: #1e293b; border-top: 1px solid #cbd5e1;">
                            ${files.length} file(s) attached
                        </td>
                    </tr>
                    ` : ""}
                </table>
            </div>
            
            <!-- Your Message -->
            <div style="margin-bottom: 32px;">
                <h3 style="margin: 0 0 16px 0; color: #0f172a; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                    Your Message
                </h3>
                <div style="background: #ffffff; border: 2px solid #cbd5e1; border-left: 4px solid #1e40af; border-radius: 4px; padding: 20px; white-space: pre-wrap; line-height: 1.7; color: #334155; font-size: 14px;">${body}</div>
            </div>
            
            <!-- What's Next Section -->
            <div style="background: #eff6ff; padding: 26px; border-radius: 6px; margin-bottom: 32px; border: 2px solid #bfdbfe; border-left: 4px solid #1e40af;">
                <h3 style="margin: 0 0 18px 0; color: #1e40af; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                    What Happens Next
                </h3>
                <div style="color: #1e293b; line-height: 1.9; font-size: 14px;">
                    <div style="margin-bottom: 12px; padding: 12px 0; border-bottom: 1px solid #bfdbfe;">
                        <strong style="color: #1e40af;">1.</strong> Our expert support team will carefully review your request
                    </div>
                    <div style="margin-bottom: 12px; padding: 12px 0; border-bottom: 1px solid #bfdbfe;">
                        <strong style="color: #1e40af;">2.</strong> You'll receive a personalized response within <strong>24-48 business hours</strong>
                    </div>
                    <div style="margin-bottom: 12px; padding: 12px 0; border-bottom: 1px solid #bfdbfe;">
                        <strong style="color: #1e40af;">3.</strong> We'll reply directly to: <strong>${email}</strong>
                    </div>
                    <div style="padding: 12px 0;">
                        <strong style="color: #1e40af;">4.</strong> Please check your spam/junk folder if you don't see our response
                    </div>
                </div>
            </div>
            
            <!-- Need Urgent Help Alert -->
            <div style="background: #f8fafc; border: 2px solid #cbd5e1; border-left: 4px solid #64748b; padding: 20px; border-radius: 4px; margin-bottom: 32px;">
                <p style="margin: 0 0 10px 0; color: #0f172a; font-size: 15px; line-height: 1.6; font-weight: 700;">
                    Need Immediate Assistance?
                </p>
                <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6;">
                    For urgent matters or real-time support, join our Discord community where our team and fellow developers are ready to help.
                </p>
            </div>
            
            <!-- Helpful Resources -->
            <div style="background: #f8fafc; padding: 22px; border-radius: 4px; margin-bottom: 32px; border: 2px solid #e2e8f0;">
                <h3 style="margin: 0 0 16px 0; color: #0f172a; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                    Helpful Resources
                </h3>
                <ul style="margin: 0; padding-left: 20px; color: #475569; line-height: 2; font-size: 14px;">
                    <li><a href="https://model-hq-docs.vercel.app" style="color: #1e40af; text-decoration: none; font-weight: 600;">Documentation</a> - Comprehensive guides and API references</li>
                    <li><a href="https://model-hq-docs.vercel.app/blogs-and-partner-solutions" style="color: #1e40af; text-decoration: none; font-weight: 600;">Blogs and Partner Solutions</a> - Step-by-step tutorials and examples</li>
                    <li><a href="https://model-hq-docs.vercel.app/video-tutorials" style="color: #1e40af; text-decoration: none; font-weight: 600;">Video Tutorials</a> - Visual learning resources</li>
                </ul>
            </div>
            
            <!-- Action Buttons -->
            <div style="text-align: center; margin-top: 32px;">
                <table cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                    <tr>
                        <td style="padding: 8px;">
                            <a href="https://discord.gg/your-discord-link" 
                               style="background: #1e40af; color: white; padding: 14px 32px; border-radius: 4px; text-decoration: none; font-weight: 600; display: inline-block; font-size: 14px; border: 2px solid #1e40af;">
                                Join Our Discord
                            </a>
                        </td>
                        <td style="padding: 8px;">
                            <a href="https://model-hq-docs.vercel.app" 
                               style="background: #0f172a; color: white; padding: 14px 32px; border-radius: 4px; text-decoration: none; font-weight: 600; display: inline-block; font-size: 14px; border: 2px solid #0f172a;">
                                Browse Documentation
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #020617 100%); color: white; padding: 40px 35px; text-align: center;">
            
            <!-- llmware Logo -->
            <div style="margin-bottom: 24px;">
                <img src="https://raw.githubusercontent.com/BloksAdmin/model-hq-docs/main/public/images/llmware-logo.png" alt="llmware" style="height: 45px; width: auto; max-width: 200px; object-fit: contain;" />
            </div>
            
            <div style="background: rgba(255,255,255,0.06); padding: 20px; border-radius: 4px; margin-bottom: 24px; border: 1px solid rgba(255,255,255,0.1);">
                <p style="margin: 0 0 10px 0; color: #e2e8f0; font-size: 14px; line-height: 1.6; font-weight: 600;">
                    This is an automated confirmation email
                </p>
                <p style="margin: 0; color: #cbd5e1; font-size: 13px; line-height: 1.6;">
                    Please do not reply directly to this message.<br>
                    Our support team will respond to you at <strong style="color: #93c5fd;">${email}</strong>
                </p>
            </div>
            
            <div style="padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
                <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 13px;">
                    <strong>Model HQ</strong> - AI Development Platform
                </p>
                <p style="margin: 0 0 16px 0; color: #64748b; font-size: 12px;">
                    © ${new Date().getFullYear()} Model HQ. All rights reserved.
                </p>
                <p style="margin: 0; color: #64748b; font-size: 11px; line-height: 1.5;">
                    Powered by llmware - Private AI that runs locally on your infrastructure
                </p>
            </div>
        </div>
    </div>
</body>
</html>
    `

    // Send email to support team
    const { data, error } = await resend.emails.send({
      from: "Model HQ Support <support@aibloks.com>",
      to: ["support@aibloks.com", "rsharma@aibloks.com"],
      subject: `[Model HQ Support] ${subject}`,
      html: htmlContent,
      replyTo: email, // Customer's email for easy replies
      attachments: attachments.length > 0 ? attachments : undefined,
    })

    if (error) {
      console.error("Error sending email to support team:", error)
      throw new Error(error.message)
    }

    console.log("Email sent to support team via Resend:", data?.id)

    // Send confirmation email to customer
    const { data: customerData, error: customerError } = await resend.emails.send({
      from: "Model HQ Support <support@aibloks.com>",
      to: [email],
      subject: `✅ Support Request Received - Model HQ [#MHQ-${Date.now().toString().slice(-8)}]`,
      html: customerConfirmationHTML,
      text: customerConfirmationText,
      replyTo: "support@aibloks.com", // Your support email for customer replies
    })

    if (customerError) {
      console.error("Error sending confirmation email to customer:", customerError)
      // Don't throw error here - support team email was sent successfully
      // Just log the error and continue
    } else {
      console.log("Confirmation email sent to customer via Resend:", customerData?.id)
    }
    return NextResponse.json({
      success: true,
      message: "Support request sent successfully!",
    })
  } catch (error) {
    console.error("Error sending email via Resend:", error)

    // More detailed error logging for debugging
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      })
    }

    return NextResponse.json(
      {
        error: "Failed to send support request. Please try again.",
      },
      { status: 500 },
    )
  }
}
