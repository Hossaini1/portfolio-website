'use client';

import { useActionState, useEffect, useState, useCallback, useId, memo } from 'react';
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactType } from "@/types/dictionary-types";
import dynamic from 'next/dynamic';
import Link from "next/link";
import { submitContactForm } from '@/actions/contact-action';

// Lazy load icons to reduce initial bundle size
const MailIcon = dynamic(() => import('lucide-react').then(mod => mod.MailIcon), {
  loading: () => <div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />
});

const MapPinIcon = dynamic(() => import('lucide-react').then(mod => mod.MapPinIcon), {
  loading: () => <div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />
});

const ClockIcon = dynamic(() => import('lucide-react').then(mod => mod.ClockIcon), {
  loading: () => <div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />
});

const CheckCircle = dynamic(() => import('lucide-react').then(mod => mod.CheckCircle), {
  loading: () => <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
});

const AlertCircle = dynamic(() => import('lucide-react').then(mod => mod.AlertCircle), {
  loading: () => <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
});

const SubmitButton = memo(function SubmitButton({ t }: { t: ContactType['form'] }) {
  const { pending } = useFormStatus();

  return (
    <Button 
      type="submit"
      className="mt-6 w-full" 
      size="lg"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? (
        <>
          <div 
            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" 
            aria-hidden="true"
          />
          Sending...
        </>
      ) : (
        t?.submit ?? "Submit"
      )}
    </Button>
  );
});

const SuccessMessage = memo(function SuccessMessage({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <div 
      className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700 animate-in fade-in duration-300"
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <CheckCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
      <span className="text-sm">Email successfully sent! We&apos;ll get back to you soon.</span>
    </div>
  );
});

const ErrorMessage = memo(function ErrorMessage({ show, error }: { show: boolean; error: string }) {
  if (!show) return null;

  return (
    <div 
      className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 animate-in fade-in duration-300"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
      <span className="text-sm">{error}</span>
    </div>
  );
});

const ContactInfoSection = memo(function ContactInfoSection({ t }: { t: ContactType }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
      <div className="flex flex-col items-center sm:items-start">
        <div 
          className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full"
          aria-hidden="true"
        >
          <MailIcon className="w-6 h-6" />
        </div>
        <h2 className="mt-6 font-semibold text-lg md:text-xl">
          {t?.email?.title ?? "Email"}
        </h2>
        <p className="my-2.5 text-muted-foreground text-sm">
          {t?.email?.description ?? "For questions, feel free to send me an email"}
        </p>
        <Link
          className="font-medium text-primary text-base md:text-lg hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          href="mailto:alinaghihossaini@gmail.com"
          aria-label="Send email to alinaghihossaini@gmail.com"
        >
          alinaghihossaini@gmail.com
        </Link>
      </div>

      <div className="flex flex-col items-center sm:items-start">
        <div 
          className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full"
          aria-hidden="true"
        >
          <MapPinIcon className="w-6 h-6" />
        </div>
        <h2 className="mt-6 font-semibold text-lg md:text-xl">
          {t?.office?.title ?? "Office"}
        </h2>
        <p className="my-2.5 text-muted-foreground text-sm">
          {t?.office?.subtitle ?? "Feel free to drop by my office."}
        </p>
        <Link
          className="font-medium text-blue-500 hover:text-blue-400 visited:text-purple-500 visited:hover:text-purple-400 transition-colors text-base md:text-lg hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open location: ${t?.office?.address ?? "Germany, North Rhine-Westphalia"} in Google Maps`}
        >
          {t?.office?.address ?? "Germany, North Rhine-Westphalia"}
        </Link>
      </div>

      <div className="sm:col-span-2 flex flex-col items-center sm:items-start">
        <div 
          className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full"
          aria-hidden="true"
        >
          <ClockIcon className="w-6 h-6" />
        </div>
        <h2 className="mt-6 font-semibold text-lg md:text-xl">
          {t?.openingHours?.title ?? "Opening Hours"}
        </h2>
        <p className="my-2.5 text-muted-foreground text-sm">
          {t?.openingHours?.subtitle ?? "My available hours for meetings"}
        </p>
        <div 
          className="font-medium text-foreground space-y-2 text-center sm:text-start text-base"
          role="list"
          aria-label="Opening hours schedule"
        >
          <div role="listitem">{t?.openingHours?.weekdays ?? "Monday - Friday: 8:00 - 18:00"}</div>
          <div role="listitem">{t?.openingHours?.saturday ?? "Saturday: 10:00 - 14:00"}</div>
          <div role="listitem">{t?.openingHours?.sunday ?? "Sunday: Closed"}</div>
        </div>
      </div>
    </div>
  );
});

const ContactSection = ({ t }: { t: ContactType }) => {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    error: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const termsId = useId();
  const formDescriptionId = useId();

  const hideSuccess = useCallback(() => setShowSuccess(false), []);
  const hideError = useCallback(() => setShowError(false), []);

  // Auto-hide success/error messages after timeout
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    if (state.success) {
      setShowSuccess(true);
      setShowError(false);
      timers.push(setTimeout(hideSuccess, 3000));
    }

    if (state.error) {
      setShowError(true);
      setShowSuccess(false);
      timers.push(setTimeout(hideError, 5000));
    }

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [state.success, state.error, hideSuccess, hideError]);

  return (
    <section 
      className="flex items-center justify-center mt-18 md:mt-27 lg:mt-41" 
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
        <h3 
          id="contact-heading"
          className="font-semibold text-4xl md:text-5xl text-center md:text-start"
        >
          {t?.title ?? "Contact Me"}
        </h3>
        
        <div className="pt-14 md:pt-17 grid lg:grid-cols-2 gap-16 md:gap-10 text-center md:text-start">
          <ContactInfoSection t={t} />

          <div>
            <Card className="bg-accent shadow-none py-0">
              <CardContent className="p-6 md:p-8">
                <SuccessMessage show={showSuccess} />
                <ErrorMessage show={showError} error={state.error} />

                <form 
                  action={formAction} 
                  aria-labelledby="contact-heading"
                  aria-describedby={formDescriptionId}
                >
                  <div id={formDescriptionId} className="sr-only">
                    Contact form with required fields for name, email, and message
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="firstName">
                        {t?.form?.firstName ?? "First Name"} *
                      </Label>
                      <Input
                        name="firstName"
                        placeholder={t?.form?.firstName ?? "First name"}
                        id="firstName"
                        className="mt-2 bg-white h-10 shadow-none"
                        required
                        minLength={2}
                        disabled={isPending}
                        aria-required="true"
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="lastName">
                        {t?.form?.lastName ?? "Last Name"} *
                      </Label>
                      <Input
                        name="lastName"
                        placeholder={t?.form?.lastName ?? "Last name"}
                        id="lastName"
                        className="mt-2 bg-white h-10 shadow-none"
                        required
                        minLength={2}
                        disabled={isPending}
                        aria-required="true"
                      />
                    </div>

                    <div className="col-span-2">
                      <Label htmlFor="email">
                        {t?.form?.email ?? "Email"} *
                      </Label>
                      <Input
                        name="email"
                        type="email"
                        placeholder={t?.form?.email ?? "Email"}
                        id="email"
                        className="mt-2 bg-white h-10 shadow-none"
                        required
                        disabled={isPending}
                        aria-required="true"
                      />
                    </div>

                    <div className="col-span-2">
                      <Label htmlFor="message">
                        {t?.form?.message ?? "Message"} *
                      </Label>
                      <Textarea
                        name="message"
                        id="message"
                        placeholder={t?.form?.message ?? "Message"}
                        className="mt-2 bg-white shadow-none"
                        rows={8}
                        required
                        minLength={2}
                        maxLength={999}
                        disabled={isPending}
                        aria-required="true"
                      />
                    </div>

                    <div className="col-span-2 flex items-center gap-2">
                      <Checkbox 
                        name="acceptTerms" 
                        id={termsId}
                        className="bg-background" 
                        required
                        disabled={isPending}
                        aria-required="true"
                      />
                      <Label htmlFor={termsId} className="text-sm">
                        {t?.form?.terms ?? "You agree to our"}
                        <span className="underline ml-1">
                          {t?.form?.terms ? "" : "terms and conditions"}
                        </span>
                      </Label>
                    </div>
                  </div>

                  <SubmitButton t={t?.form} />
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ContactSection);