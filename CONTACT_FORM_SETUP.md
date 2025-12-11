# Contact Form Setup Instructions

Your contact form is now configured to send emails to your Gmail account. Follow these steps to complete the setup:

## Step 1: Get Your Web3Forms Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started for Free"
3. Enter your Gmail address: **loberianorian@gmail.com**
4. Check your email and click the verification link
5. Copy your Access Key from the dashboard

## Step 2: Update Your Code

1. Open `app/page.tsx`
2. Find this line (around line 1347):
   ```tsx
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key from Web3Forms

## Step 3: Test the Form

1. Save the file
2. Refresh your website
3. Fill out the contact form
4. Submit it
5. Check your Gmail inbox for the message

## Features Implemented

✅ Form validation (all fields required)
✅ Loading state while submitting ("Sending..." text)
✅ Success message after submission
✅ Error handling with user-friendly messages
✅ Form reset after successful submission
✅ Disabled button during submission to prevent double-clicks
✅ Smooth animations for messages

## Email Details You'll Receive

- **Sender Name**: The name entered in the form
- **Sender Email**: The email entered in the form
- **Subject**: The subject entered in the form
- **Message**: The message content
- **Form Source**: Portfolio Contact Form

## Alternative: Use FormSubmit (No Registration)

If you prefer not to register:

1. Replace the form action with FormSubmit:
   ```tsx
   action = "https://formsubmit.co/loberianorian@gmail.com";
   method = "POST";
   ```
2. Remove the `onSubmit` handler
3. Add these hidden inputs:
   ```tsx
   <input type="hidden" name="_subject" value="New Contact from Portfolio" />
   <input type="hidden" name="_captcha" value="false" />
   <input type="hidden" name="_template" value="table" />
   ```

## Need Help?

If you encounter any issues:

1. Check browser console for errors
2. Verify your access key is correct
3. Ensure your email is verified on Web3Forms
4. Contact Web3Forms support if needed

---

**Note**: Web3Forms free plan includes:

- Unlimited form submissions
- Email notifications to your Gmail
- Spam filtering
- No watermark
- Customizable email templates
