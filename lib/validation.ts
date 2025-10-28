import { ContactFormData } from "@/types/contact-types";

export function validateContactForm(data: ContactFormData): string | null {
  if (!data.firstName?.trim()) return 'First name is required';
  if (!data.lastName?.trim()) return 'Last name is required';
  if (!data.email?.trim()) return 'Email is required';
  if (!data.message?.trim()) return 'Message is required';
  if (!data.acceptTerms) return 'Please accept the terms and conditions';

  const firstName = data.firstName.trim();
  const lastName = data.lastName.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  if (firstName.length < 2) return 'First name must be at least 2 characters';
  if (firstName.length > 50) return 'First name must be less than 50 characters';
  if (lastName.length < 2) return 'Last name must be at least 2 characters';
  if (lastName.length > 50) return 'Last name must be less than 50 characters';
  if (message.length < 1) return 'Message must be at least 10 characters';
  if (message.length > 724) return 'Message must be less than 2000 characters';
  if (email.length > 254) return 'Email must be less than 254 characters';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';

  if (/<[^>]*>/i.test(firstName + lastName + message)) {
    return 'HTML tags are not allowed';
  }

  return null;
}

// import { ContactFormData } from "@/types/contact-types";

// const VALIDATION_RULES = {
//   firstName: {
//     min: 2,
//     max: 50,
//     pattern: /^[a-zA-ZÀ-ÿ\-' ]+$/,
//     required: true,
//   },
//   lastName: {
//     min: 2,
//     max: 50, 
//     pattern: /^[a-zA-ZÀ-ÿ\-' ]+$/,
//     required: true,
//   },
//   email: {
//     max: 254,
//     pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//     required: true,
//   },
//   message: {
//     min: 1,
//     max: 724,
//     required: true,
//   }
// } as const;

// type ValidationRule = {
//   min?: number;
//   max: number;
//   pattern?: RegExp;
//   required: boolean;
// };

// export function validateContactForm(data: ContactFormData): string | null {
//   if (!data.firstName?.trim()) return 'First name is required';
//   if (!data.lastName?.trim()) return 'Last name is required';
//   if (!data.email?.trim()) return 'Email is required';
//   if (!data.message?.trim()) return 'Message is required';
//   if (!data.acceptTerms) return 'Please accept the terms and conditions';

//   const firstNameTrimmed = data.firstName.trim();
//   const lastNameTrimmed = data.lastName.trim();
//   const emailTrimmed = data.email.trim();
//   const messageTrimmed = data.message.trim();

//   if (firstNameTrimmed.length < VALIDATION_RULES.firstName.min) {
//     return `First name must be at least ${VALIDATION_RULES.firstName.min} characters`;
//   }
//   if (firstNameTrimmed.length > VALIDATION_RULES.firstName.max) {
//     return `First name must be less than ${VALIDATION_RULES.firstName.max} characters`;
//   }

//   if (lastNameTrimmed.length < VALIDATION_RULES.lastName.min) {
//     return `Last name must be at least ${VALIDATION_RULES.lastName.min} characters`;
//   }
//   if (lastNameTrimmed.length > VALIDATION_RULES.lastName.max) {
//     return `Last name must be less than ${VALIDATION_RULES.lastName.max} characters`;
//   }

//   if (emailTrimmed.length > VALIDATION_RULES.email.max) {
//     return `Email must be less than ${VALIDATION_RULES.email.max} characters`;
//   }

//   if (messageTrimmed.length < VALIDATION_RULES.message.min) {
//     return `Message must be at least ${VALIDATION_RULES.message.min} characters`;
//   }
//   if (messageTrimmed.length > VALIDATION_RULES.message.max) {
//     return `Message must be less than ${VALIDATION_RULES.message.max} characters`;
//   }

//   // 3. Pattern Validation
//   if (!VALIDATION_RULES.firstName.pattern.test(firstNameTrimmed)) {
//     return 'First name can only contain letters, hyphens, and spaces';
//   }

//   if (!VALIDATION_RULES.lastName.pattern.test(lastNameTrimmed)) {
//     return 'Last name can only contain letters, hyphens, and spaces';
//   }

//   if (!VALIDATION_RULES.email.pattern.test(emailTrimmed)) {
//     return 'Please enter a valid email address';
//   }

//   // 4. Security Validation
//   if (containsMaliciousContent(firstNameTrimmed)) {
//     return 'Invalid characters detected in first name';
//   }

//   if (containsMaliciousContent(lastNameTrimmed)) {
//     return 'Invalid characters detected in last name';
//   }

//   if (containsMaliciousContent(messageTrimmed)) {
//     return 'Invalid characters detected in message';
//   }

//   // 5. Spam Detection
//   if (isPotentialSpam(messageTrimmed)) {
//     return 'Message contains suspicious content';
//   }

//   return null;
// }

// // Security Helper
// function containsMaliciousContent(input: string): boolean {
//   const dangerousPatterns = [
//     /<script\b[^>]*>/i,
//     /javascript:/i,
//     /on\w+\s*=/i,
//     /data:/i,
//     /vbscript:/i,
//   ];

//   return dangerousPatterns.some(pattern => pattern.test(input));
// }

// // Spam Detection
// function isPotentialSpam(message: string): boolean {
//   const trimmed = message.toLowerCase();
  
//   // URL Spam Detection
//   const urlCount = (trimmed.match(/https?:\/\/[^\s]+/g) || []).length;
//   if (urlCount > 3) return true;
  
//   // Repeated Word Spam
//   const words = trimmed.split(/\s+/);
//   const wordCounts: Record<string, number> = {};
  
//   for (const word of words) {
//     if (word.length > 5) {
//       wordCounts[word] = (wordCounts[word] || 0) + 1;
//       if (wordCounts[word] > 5) return true;
//     }
//   }

//   return false;
// }