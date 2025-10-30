import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Imprint | Portfolio',
  description: 'Legal information and imprint for my web development portfolio',
};

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Imprint
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Legal information and disclosure requirements according to German law
          </p>
        </header>

        {/* Content */}
        <div className="bg-card rounded-lg shadow-sm border p-8 md:p-12 space-y-8">
          {/* Contact Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              Contact Information
            </h2>
            <div className="space-y-3 text-foreground">
              <p>
                <strong>Full Name:</strong> Ali Naghi Hossaini
              </p>
              <p>
                <strong>Email:</strong> alinaghihossaini@gmail.com
              </p>
              <p>
                <strong>Location:</strong> North Rhine-Westphalia, Germany
              </p>
              <p>
                <strong>Profession:</strong> Full Stack Web Developer
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              Disclaimer
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                <strong>Content Responsibility:</strong> The contents of these pages were created with great care. 
                However, I cannot guarantee the accuracy, completeness, or timeliness of the content.
              </p>
              <p>
                <strong>External Links:</strong> This website contains links to external third-party websites. 
                I have no influence on the content of these linked sites. The respective provider or operator 
                is always responsible for the content of the linked sites.
              </p>
              <p>
                <strong>Copyright:</strong> The content and works on these pages created by me are subject to 
                German copyright law. Duplication, processing, distribution, or any form of commercialization 
                of such material beyond the scope of the copyright law shall require my prior written consent.
              </p>
            </div>
          </section>

          {/* Liability for Content */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              Liability for Content
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                As a service provider, I am responsible for my own content on these pages according to 
                § 7 section 1 of the German Telemedia Act (TMG). According to §§ 8 to 10 TMG, however, 
                I am not obliged to monitor transmitted or stored third-party information or to investigate 
                circumstances that indicate illegal activity.
              </p>
              <p>
                Obligations to remove or block the use of information according to general laws remain 
                unaffected. However, liability in this regard is only possible from the point in time at 
                which a concrete infringement of the law becomes known. If I become aware of any such 
                legal violations, I will remove this content immediately.
              </p>
            </div>
          </section>

          {/* Non-Commercial Purpose */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              Non-Commercial Purpose
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                This portfolio website serves exclusively for the presentation of my professional skills, 
                projects, and experience as a web developer. It is not used for commercial purposes, 
                direct sales, or business transactions.
              </p>
              <p>
                The website is intended for potential employers, clients, and professional contacts 
                in the web development industry.
              </p>
            </div>
          </section>

          {/* Legal Notice */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
              Legal Notice
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                This imprint also applies to my social media profiles and online presence on platforms 
                including but not limited to: GitHub, LinkedIn, and other professional networks where 
                my portfolio content is shared.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Last updated: {new Date().getFullYear()}
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