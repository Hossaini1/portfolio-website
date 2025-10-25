import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactType } from "@/types/dictionary-types";
import { MailIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";

const emailAdresse ='1989hossaini1@gmail.com'

const ContactSection = ({t}:{t:ContactType}) => (
  <div className="flex items-center justify-center py-16">
    <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
      <h2 className="uppercase font-semibold text-3xl">
        {t?.title?? "Contact Me"}
      </h2>
      <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">{t?.email?.title ?? "Email"}</h3>
            <p className="my-2.5 text-muted-foreground">
              {t?.email?.description ?? "For questions, feel free to send me an email"}
            </p>
            <Link
              className="font-medium text-primary"
              href="mailto:a@gmail.com"
            >
             a@gmail.com
            </Link>
          </div>

          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">{t?.office?.title ?? "Office"}</h3>
            <p className="my-2.5 text-muted-foreground">
              {t?.office?.subtitle?? "Feel free to drop by my office."}
            </p>
            <Link
              className="font-medium text-primary"
              href="https://map.google.com"
              target="_blank"
            >
              100 Smith Street Collingwood <br /> VIC 3066 AU
            </Link>
          </div>

        </div>

        {/* Form */}
        <Card className="bg-accent shadow-none py-0">
          <CardContent className="p-6 md:p-8">
            <form>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    placeholder="First name"
                    id="firstName"
                    className="mt-2 bg-white h-10 shadow-none"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    placeholder="Last name"
                    id="lastName"
                    className="mt-2 bg-white h-10 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="mt-2 bg-white h-10 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Message"
                    className="mt-2 bg-white shadow-none"
                    rows={6}
                  />
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Checkbox id="acceptTerms" className="bg-background" />
                  <Label htmlFor="acceptTerms" className="gap-0">
                    You agree to our
                    <Link href="#" className="underline ml-1">
                      terms and conditions
                    </Link>
                    <span>.</span>
                  </Label>
                </div>
              </div>
              <Button className="mt-6 w-full" size="lg">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default ContactSection;
