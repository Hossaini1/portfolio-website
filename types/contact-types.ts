export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  acceptTerms: boolean;
}

export interface ContactFormState {
  success: boolean;
  error?: string;
  isLoading: boolean;
}