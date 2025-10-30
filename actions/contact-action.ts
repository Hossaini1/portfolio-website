'use server';

import { ContactFormData } from '@/types/contact-types';
import { validateContactForm } from '@/lib/validation';

export type FormState = {
  success: boolean;
  error: string;
  message?: string;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {

  await new Promise(resolve => setTimeout(resolve, 1000));

  try {
    const contactData: ContactFormData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      acceptTerms: formData.get('acceptTerms') === 'on',
    };

    const validationError = validateContactForm(contactData);
    if (validationError) {
      return { success: false, error: validationError };
    }

    const response = await fetch(process.env.FORMSPREE_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        firstName: contactData.firstName,
        lastName: contactData.lastName,
        email: contactData.email,
        message: contactData.message,
        _subject: `New contact from ${contactData.firstName} ${contactData.lastName}`,
      }),
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    return { 
      success: true, 
      error: '',
      message: 'Message sent successfully!' 
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return { 
      success: false, 
      error: 'Failed to send message. Please try again.' 
    };
  }
}