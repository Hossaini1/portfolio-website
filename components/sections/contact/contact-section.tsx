'use client';

import { useActionState } from 'react';
import {useFormStatus} from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactType } from "@/types/dictionary-types";
import { ClockIcon, MailIcon, MapPinIcon, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { submitContactForm } from '@/actions/contact-action';

// Submit Button Component mit useFormStatus
function SubmitButton({ t }: { t: ContactType['form'] }) {
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
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          Sending...
        </>
      ) : (
        t?.submit ?? "Submit"
      )}
    </Button>
  );
}

const ContactSection = ({ t }: { t: ContactType }) => {
  // useActionState für besseres State Management (Next.js 15)
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    error: '',
    message: ''
  });

  return (
    <div className="flex items-center justify-center mt-18 md:mt-27 lg:mt-41" id='contact'>
      <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
        <h3 className="font-semibold text-4xl md:text-5xl text-center md:text-start">
          {t?.title ?? "Contact Me"}
        </h3>
        <div className="pt-14 md:pt-17 grid lg:grid-cols-2 gap-16 md:gap-10 text-center md:text-start">
          {/* Contact Info - Bleibt immer sichtbar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <div className="flex flex-col items-center sm:items-start">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
                <MailIcon />
              </div>
              <h4 className="mt-6 font-semibold text-lg md:text-xl">
                {t?.email?.title ?? "Email"}
              </h4>
              <p className="my-2.5 text-muted-foreground text-sm">
                {t?.email?.description ?? "For questions, feel free to send me an email"}
              </p>
              <Link
                className="font-medium text-primary text-base md:text-lg"
                href="mailto:alinaghihossaini@gmail.com"
              >
                alinaghihossaini@gmail.com
              </Link>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
                <MapPinIcon />
              </div>
              <h4 className="mt-6 font-semibold text-lg md:text-xl">
                {t?.office?.title ?? "Office"}
              </h4>
              <p className="my-2.5 text-muted-foreground text-sm">
                {t?.office?.subtitle ?? "Feel free to drop by my office."}
              </p>
              <Link
                className="font-medium text-blue-500 hover:text-blue-400 visited:text-purple-500 visited:hover:text-purple-400 transition-colors text-base md:text-lg"
                href="https://map.google.com"
                target="_blank"
              >
                {t?.office?.address ?? "Germany, North Rhine-Westphalia"}
              </Link>
            </div>

            <div className="sm:col-span-2 flex flex-col items-center sm:items-start">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
                <ClockIcon />
              </div>
              <h4 className="mt-6 font-semibold text-lg md:text-xl">
                {t?.openingHours?.title ?? "Opening Hours"}
              </h4>
              <p className="my-2.5 text-muted-foreground text-sm">
                {t?.openingHours?.subtitle ?? "My available hours for meetings"}
              </p>
              <div className="font-medium text-foreground space-y-2 text-center sm:text-start text-base">
                <div>{t?.openingHours?.weekdays ?? "Monday - Friday: 8:00 - 18:00"}</div>
                <div>{t?.openingHours?.saturday ?? "Saturday: 10:00 - 14:00"}</div>
                <div>{t?.openingHours?.sunday ?? "Sunday: Closed"}</div>
              </div>
            </div>
          </div>

          {/* Rechts: Entweder Formular ODER Success Message */}
          <div>
            {state.success ? (
              // Success Message - ersetzt nur das Formular
              <Card className="bg-green-50 border-green-200 shadow-none py-0">
                <CardContent className="p-6 md:p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your message. I&apos;ll get back to you soon.
                  </p>
                  <Button 
                    onClick={() => window.location.reload()}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Send Another Message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              // Formular - normale Ansicht
              <Card className="bg-accent shadow-none py-0">
                <CardContent className="p-6 md:p-8">
                  {state.error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm">{state.error}</span>
                    </div>
                  )}

                  <form action={formAction}>
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
                        />
                      </div>

                      <div className="col-span-2 flex items-center gap-2">
                        <Checkbox 
                          name="acceptTerms" 
                          id="acceptTerms" 
                          className="bg-background" 
                          required
                          disabled={isPending}
                        />
                        <Label htmlFor="acceptTerms" className="gap-0 text-sm">
                          {t?.form?.terms ?? "You agree to our"}
                          <span className="underline ml-1">
                            {t?.form?.terms ? "" : "terms and conditions"}
                          </span>
                          <span>.</span>
                        </Label>
                      </div>
                    </div>

                    <SubmitButton t={t?.form} />
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;