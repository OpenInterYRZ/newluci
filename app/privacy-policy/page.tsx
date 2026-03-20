import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "LUCI Desktop Privacy Policy. Learn how we collect, use, and protect your data including screen recordings, meeting transcriptions, and chat data.",
  openGraph: {
    title: "LUCI Privacy Policy",
    description:
      "Learn how LUCI collects, uses, and protects your data.",
    url: "/privacy-policy",
  },
  twitter: {
    title: "LUCI Privacy Policy",
    description:
      "Learn how LUCI collects, uses, and protects your data.",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen mx-auto bg-web-bg-0">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-text-2 hover:text-text-0 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-text-0 mb-2">
          LUCI Desktop Privacy Policy
        </h1>
        <p className="text-text-2 text-sm mb-12">
          Last updated: March 9, 2026
        </p>

        <article className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-text-1">
          <p className="leading-relaxed">
            This LUCI Desktop Privacy Policy (this &quot;Privacy Policy&quot;) is in
            addition to and complements the main Privacy Policy of Memories.ai
            Platforms, Inc. (&quot;Memories.ai&quot;), located at{" "}
            <a
              href="https://memories.ai/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://memories.ai/legal/privacy
            </a>{" "}
            (&quot;Memories.ai Privacy Policy&quot;). This Privacy Policy applies
            exclusively to LUCI Desktop, a macOS and Windows desktop application
            designed for intelligent screen and audio recording, productivity
            enhancement, and virtual machine management (&quot;LUCI Desktop&quot;),
            powered by AI-companion software (collectively, the &quot;Service&quot;),
            and sold by Memories.ai. In the event of conflict between any of the
            terms of this Privacy Policy and the Memories.ai Privacy Policy, the
            Memories.ai Privacy Policy shall control.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              Information We Collect When You Use LUCI Desktop
            </h2>
            <p className="leading-relaxed mb-6">
              The information the Service collects through LUCI Desktop includes:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  Log and Usage Data
                </h3>
                <p className="leading-relaxed">
                  Log and usage data is service-related, diagnostic, usage, and
                  performance information our servers automatically collect when
                  you access or use LUCI Desktop and which we record in log
                  files or other data usage files. Depending on how you interact
                  with us, this log data and usage data may include your IP
                  address, device information, and settings and information about
                  your activity in the application or the floating desktop widget
                  (such as the date/time stamps associated with your usage and
                  other actions you take such as which features you use), device
                  event information (such as system activity, error reports –
                  sometimes called &quot;crash dumps&quot; – and hardware settings).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  Device Data
                </h3>
                <p className="leading-relaxed">
                  We collect device data such as information about the computer
                  you use to access the Service. Depending on the computer
                  used, this device data may include information such as your IP
                  address (or proxy server), device and application
                  identification numbers, location, hardware model, Internet
                  service provider, operating system, and system configuration
                  information.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  Screen and Audio Recordings
                </h3>
                <p className="leading-relaxed">
                  The Service collects screen recordings and audio recordings
                  (including speaker audio, microphone audio, or both) when
                  recording features are activated. This includes meeting
                  recordings initiated in manual, auto, or ask mode.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  Meeting Transcriptions
                </h3>
                <p className="leading-relaxed">
                  We process and collect voice-to-text transcriptions of your
                  recordings, including speaker identification and timestamps, to
                  provide features such as the Meeting Coach and real-time
                  suggested subtitles.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  Chat Data
                </h3>
                <p className="leading-relaxed">
                  We collect chat messages you send or receive within the
                  Service, including replies, and your feedback on AI-generated
                  content (such as &quot;likes,&quot; &quot;dislikes,&quot; or copy actions).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  Third-Party Integration Data
                </h3>
                <p className="leading-relaxed">
                  If you connect LUCI Desktop to third-party services, we collect
                  information from those integrations, such as calendar events
                  and email connections, to provide contextual productivity
                  features and meeting synchronization.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  Voice Commands
                </h3>
                <p className="leading-relaxed">
                  The Service collects and processes voice data when voice
                  activation is triggered (e.g., via the Fn key) to execute user
                  commands.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  Custom Skill Files
                </h3>
                <p className="leading-relaxed">
                  We collect and store custom skill files and configurations
                  that you upload to the Service to personalize your AI
                  companion&apos;s capabilities.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  Virtual Machine Data
                </h3>
                <p className="leading-relaxed">
                  To support the virtual machine component of the Service, we
                  collect data required for backup and restoration processes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  Automatic Uploads
                </h3>
                <p className="leading-relaxed">
                  By default, screen recordings, audio recordings, and
                  transcriptions captured by LUCI Desktop are automatically
                  uploaded to the user&apos;s Memories.ai account in order to provide
                  the Service&apos;s core functionality, including storage,
                  processing, and access across devices.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              Vendors and Service Providers
            </h2>
            <p className="leading-relaxed">
              We may disclose any information we receive through the Service to
              vendors and service providers retained in connection with the
              provision of our Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              Changes to this Privacy Policy
            </h2>
            <p className="leading-relaxed mb-4">
              Changes to this Privacy Policy apply to your use of our Services
              after the &quot;last updated&quot; date at the top of this Privacy Policy.
            </p>
            <p className="leading-relaxed">
              We will post any adjustments to the Privacy Policy on this page,
              and the revised version will be effective when it is posted. If we
              materially change the ways in which we use or share personal
              information previously collected from you through the Services,
              we will notify you through the Services, by email, or by other
              communication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              Contact Information
            </h2>
            <p className="leading-relaxed mb-4">
              You may contact us about this Privacy Policy.
            </p>
            <p className="leading-relaxed">
              Memories.ai is responsible for processing your information. If you
              have any questions, comments, or concerns about our processing
              activities, please email us at{" "}
              <a
                href="mailto:privacy@memories.ai"
                className="text-primary hover:underline"
              >
                privacy@memories.ai
              </a>
              .
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
