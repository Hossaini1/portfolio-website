// actions/contact-action.ts
'use server';

import { ContactFormData } from "@/types/contact-types";

export async function submitContactForm(formData: ContactFormData) {
  try {
    const response = await fetch(process.env.FORMSPREE_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
        _subject: `New contact from ${formData.firstName} ${formData.lastName}`,
      }),
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    return { success: true };
  } catch (error) {
    console.error('Contact form error:', error);
    return { 
      success: false, 
      error: 'Failed to send message. Please try again.' 
    };
  }
}