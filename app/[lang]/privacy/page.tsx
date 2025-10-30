import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Portfolio',
  description: 'Privacy policy and data protection information for my web development portfolio',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How I protect and handle your data on my portfolio website
          </p>
        </header>

        {/* Content */}
        <div className="bg-card rounded-lg shadow-sm border p-8 md:p-12 space-y-12">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              1. Introduction
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Thank you for visiting my portfolio website. The protection of your personal data is 
                very important to me. This privacy policy explains what data I collect, how I use it, 
                and what rights you have regarding your data.
              </p>
              <p>
                As a web developer, I am committed to implementing best practices for data protection 
                and privacy in all my projects, including this portfolio site.
              </p>
            </div>
          </section>

          {/* Data Collection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              2. Data Collection and Usage
            </h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">
                  Contact Form Data
                </h3>
                <p className="text-foreground leading-relaxed">
                  When you use my contact form, I collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Your name (first and last name)</li>
                  <li>Your email address</li>
                  <li>Your message content</li>
                  <li>Your agreement to the terms</li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  This data is used solely to respond to your inquiry and is not used for marketing 
                  purposes or shared with third parties.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">
                  Automated Data Collection
                </h3>
                <p className="text-foreground leading-relaxed">
                  Like most websites, this site may automatically collect anonymous technical data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>IP address (anonymized)</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  This data is collected for security purposes and to improve the website experience.
                </p>
              </div>
            </div>
          </section>

          {/* No Cookies Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              3. No Cookies Policy
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                <strong>This website does not use any cookies.</strong> I believe in respecting your 
                privacy and have designed this portfolio to function completely without cookies.
              </p>
              <p>
                The website uses:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>No tracking cookies</strong>
                </li>
                <li>
                  <strong>No analytics cookies</strong>
                </li>
                <li>
                  <strong>No marketing cookies</strong>
                </li>
                <li>
                  <strong>No third-party cookies</strong>
                </li>
              </ul>
              <p>
                Your visit to this website is completely cookie-free. No data is stored on your device 
                and no consent banners are required.
              </p>
            </div>
          </section>

          {/* Local Storage */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              4. Local Storage Usage
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                This website may use browser local storage for essential functionality:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Theme Preference:</strong> Stores your dark/light mode preference locally in your browser
                </li>
                <li>
                  <strong>Language Selection:</strong> Remembers your language preference
                </li>
              </ul>
              <p>
                This data is stored locally on your device and is not transmitted to any server. 
                You can clear this data at any time through your browser settings.
              </p>
            </div>
          </section>

          {/* Data Storage */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              5. Data Storage and Security
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                <strong>Storage Duration:</strong> Contact form submissions are stored for up to 
                6 months, after which they are permanently deleted.
              </p>
              <p>
                <strong>Data Security:</strong> I implement appropriate technical and organizational 
                security measures to protect your personal data against unauthorized access, 
                modification, or destruction.
              </p>
              <p>
                <strong>Data Location:</strong> All data is processed and stored on secure servers 
                within the European Union.
              </p>
              <p>
                <strong>No User Accounts:</strong> This website does not require user accounts or 
                registration, minimizing data collection.
              </p>
            </div>
          </section>

          {/* Third Parties */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              6. Third-Party Services
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                This website may contain links to external services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Vercel:</strong> Hosting platform
                </li>
                <li>
                  <strong>GitHub:</strong> Code repository links
                </li>
                <li>
                  <strong>LinkedIn:</strong> Professional profile link
                </li>
                <li>
                  <strong>Email Service:</strong> Contact form submissions
                </li>
              </ul>
              <p>
                When you click on external links, you leave this website and the privacy policy 
                of the respective service applies. I recommend reviewing their privacy policies.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              7. Your Rights
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Under applicable data protection laws (including GDPR), you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Restrict processing of your data</li>
                <li>Data portability</li>
                <li>Object to processing</li>
              </ul>
              <p>
                To exercise any of these rights, please contact me using the contact information 
                provided in the imprint.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              8. Contact
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                If you have any questions about this privacy policy or how I handle your data, 
                please don't hesitate to contact me:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium">Ali Naghi Hossaini</p>
                <p>Email: alinaghihossaini@gmail.com</p>
                <p className="text-sm text-muted-foreground mt-2">
                  I typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              9. Changes to This Policy
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                I may update this privacy policy from time to time to reflect changes in my 
                practices or for other operational, legal, or regulatory reasons. The updated 
                version will be posted on this page.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}