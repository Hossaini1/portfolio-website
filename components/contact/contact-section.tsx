import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactType } from "@/types/dictionary-types";
import { ClockIcon, MailIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";

const ContactSection = ({ t }: { t: ContactType }) => (
  <div className="flex items-center justify-center py-32 md:py-16 ">
    <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
      <h2 className="font-semibold text-3xl text-center md:text-start">
        {t?.title ?? "Contact Me"}
      </h2>
      <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10 text-center md:text-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {/* Email - zentriert auf Mobile, normal ab md */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">
              {t?.email?.title ?? "Email"}
            </h3>
            <p className="my-2.5 text-muted-foreground">
              {t?.email?.description ??
                "For questions, feel free to send me an email"}
            </p>
            <Link
              className="font-medium text-primary"
              href="mailto:a@gmail.com"
            >
              a@gmail.com
            </Link>
          </div>

          {/* Office - zentriert auf Mobile, normal ab md */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">
              {t?.office?.title ?? "Office"}
            </h3>
            <p className="my-2.5 text-muted-foreground">
              {t?.office?.subtitle ?? "Feel free to drop by my office."}
            </p>
            <Link
              className="font-medium text-blue-500 hover:text-blue-400 visited:text-purple-500 visited:hover:text-purple-400 transition-colors"
              href="https://map.google.com"
              target="_blank"
            >
              {t?.office?.address ?? "Germany, North Rhine-Westphalia"}
            </Link>
          </div>

          {/* Opening Hours - zentriert auf Mobile, normal ab md */}
          <div className="sm:col-span-2 flex flex-col items-center sm:items-start">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <ClockIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">
              {t?.openingHours?.title ?? "Opening Hours"}
            </h3>
            <p className="my-2.5 text-muted-foreground">
              {t?.openingHours?.subtitle ?? "My available hours for meetings"}
            </p>
            <div className="font-medium text-foreground space-y-2 text-center sm:text-left">
              <div>
                {t?.openingHours?.weekdays ?? "Monday - Friday: 8:00 - 18:00"}
              </div>
              <div>
                {t?.openingHours?.saturday ?? "Saturday: 10:00 - 14:00"}
              </div>
              <div>{t?.openingHours?.sunday ?? "Sunday: Closed"}</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <Card className="bg-accent shadow-none py-0 ">
          <CardContent className="p-6 md:p-8">
            <form>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="firstName">
                    {t?.form?.firstName ?? "First Name"}
                  </Label>
                  <Input
                    placeholder={t?.form?.firstName ?? "First name"}
                    id="firstName"
                    className="mt-2 bg-white h-10 shadow-none"
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="lastName">
                    {t?.form?.lastName ?? "Last Name"}
                  </Label>
                  <Input
                    placeholder={t?.form?.lastName ?? "Last name"}
                    id="lastName"
                    className="mt-2 bg-white h-10 shadow-none"
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="email">{t?.form?.email ?? "Email"}</Label>
                  <Input
                    type="email"
                    placeholder={t?.form?.email ?? "Email"}
                    id="email"
                    className="mt-2 bg-white h-10 shadow-none"
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="message">
                    {t?.form?.message ?? "Message"}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={t?.form?.message ?? "Message"}
                    className="mt-2 bg-white shadow-none"
                    rows={6}
                  />
                </div>

                <div className="col-span-2 flex items-center gap-2">
                  <Checkbox id="acceptTerms" className="bg-background" />
                  <Label htmlFor="acceptTerms" className="gap-0">
                    {t?.form?.terms ?? "You agree to our"}
                    <Link href="#" className="underline ml-1">
                      {t?.form?.terms ? "" : "terms and conditions"}
                    </Link>
                    <span>.</span>
                  </Label>
                </div>
              </div>

              <Button className="mt-6 w-full" size="lg">
                {t?.form?.submit ?? "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default ContactSection;