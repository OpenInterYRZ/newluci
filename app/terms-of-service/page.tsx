import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "LUCI Desktop Terms of Service",
  description: "Terms of Service for LUCI Desktop",
};

export default function TermsOfServicePage() {
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
          LUCI Desktop Terms of Service
        </h1>
        <p className="text-text-2 text-sm mb-12">
          Last updated: March 9, 2025
        </p>

        <article className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-text-1">
          <p className="leading-relaxed">
            Welcome, and thank you for your interest in LUCI Desktop, an
            AI-empowered technology platform powered by AI-companion software
            (collectively, the &quot;Service&quot;). LUCI Desktop is owned and sold by
            Memories.ai Platforms, Inc. (&quot;Memories.ai&quot;).
          </p>

          <p className="leading-relaxed">
            These LUCI Desktop Terms of Service (these &quot;Terms of Service&quot;), and
            the Order (as defined below) are a legally binding contract between
            you and Memories.ai regarding your purchase of LUCI Desktop and use
            of the Service.
          </p>

          <p className="leading-relaxed font-medium">
            PLEASE READ THE FOLLOWING TERMS CAREFULLY: BY DOWNLOADING LUCI
            DESKTOP, OR OTHERWISE ACCESSING OR USING THE SERVICE, YOU AGREE THAT
            YOU HAVE READ AND UNDERSTOOD, AND, AS A CONDITION TO YOUR USE OF THE
            SERVICE, YOU AGREE TO BE BOUND BY, THE FOLLOWING TERMS AND
            CONDITIONS, INCLUDING OUR PRIVACY POLICY (TOGETHER, THESE
            &quot;TERMS&quot;). IF YOU ARE NOT ELIGIBLE, OR DO NOT AGREE TO THE TERMS,
            THEN YOU DO NOT HAVE OUR PERMISSION TO USE, AND YOU SHOULD NOT USE,
            ANY SERVICE. YOUR USE OF THE SERVICE, AND MEMORIES.AI&apos; PROVISION OF THE
            SERVICE TO YOU, CONSTITUTES AN AGREEMENT BY MEMORIES.AI AND BY YOU TO
            BE BOUND BY THESE TERMS.
          </p>

          <p className="leading-relaxed">
            The AI-software companion of the Service is governed by the Terms of
            Service located at{" "}
            <a
              href="https://memories.ai/legal/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://memories.ai/legal/terms-of-service
            </a>{" "}
            and incorporated herein by reference (&quot;Memories.ai Terms&quot;). In the
            event of conflict between these Terms and the Memories.ai Terms,
            these Terms would control.
          </p>

          <p className="leading-relaxed font-medium">
            ARBITRATION NOTICE. Except for certain kinds of disputes described in
            Section 12.2, you agree that disputes arising under these Terms will
            be resolved by binding, individual arbitration, and BY ACCEPTING
            THESE TERMS, YOU AND MEMORIES.AI ARE EACH WAIVING THE RIGHT TO A
            TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR REPRESENTATIVE
            PROCEEDING. YOU AGREE TO GIVE UP YOUR RIGHT TO GO TO COURT to assert
            or defend your rights under this contract (except for matters that may
            be taken to small claims court). Your rights will be determined by a
            NEUTRAL ARBITRATOR and NOT a judge or jury. (See Section 12).
          </p>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              1. Service Overview
            </h2>
            <p className="leading-relaxed mb-4">
              The Service is a lifelogging, AI-empowered technology platform,
              intended to help you record and keep memories of the experiences
              that you encounter. Features of the LUCI Desktop Service include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Home Module:</strong> Access to task details with text
                and image feedback, and chat messages with copy, reply, and
                like/dislike capabilities.
              </li>
              <li>
                <strong>Memories Module:</strong> A meeting overview with screen
                recording thumbnails, and meeting details featuring voice-to-text
                transcriptions by speaker and timestamp, alongside summaries and
                action items.
              </li>
              <li>
                <strong>Settings &amp; Integrations:</strong> Virtual machine
                management, third-party service connections (e.g., calendar,
                email), and custom skill file uploads.
              </li>
              <li>
                <strong>Meetings &amp; Status Display:</strong> A desktop widget
                for voice task triggers via the Fn key, real-time suggested
                subtitles via a Meeting Coach, pre-meeting reminders, and meeting
                monitoring that prompts recording when a calendar meeting starts
                and your microphone is activated.
              </li>
            </ul>
            <p className="leading-relaxed mt-4 font-medium">
              BY AGREEING TO THESE TERMS OF SERVICE, YOU ACKNOWLEDGE AND
              UNDERSTAND THAT RECORDINGS CAPTURED BY LUCI DESKTOP ARE
              AUTOMATICALLY UPLOADED, BY DEFAULT, TO YOUR MEMORIES.AI ACCOUNT FOR
              PURPOSES INCLUDING STORAGE, PROCESSING, AND ACCESS TO THE SERVICE.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              2. Eligibility
            </h2>
            <p className="leading-relaxed">
              You must be at least 18 years old to use the Service. By agreeing
              to these Terms, you represent and warrant to us that: (a) you are
              at least 18 years old; (b) you have not previously been suspended
              or removed from the Service, and (c) your registration and your use
              of the Service is in compliance with any and all applicable laws
              and regulations. If you are an entity, organization, or company,
              the individual accepting these Terms on your behalf represents and
              warrants that they have authority to bind you to these Terms, and
              you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              3. Accounts and Registration
            </h2>
            <p className="leading-relaxed">
              You may sign up for an account with Memories.ai for the Service.
              When you sign up for an account, you may be required to provide us
              with some information about yourself, such as your email address.
              You agree that the information you provide to us is accurate and
              that you will keep it accurate and up to date at all times. You are
              solely responsible for maintaining the confidentiality of your
              account and any passwords and user ID&apos;s for your account, and you
              accept responsibility for all activities that occur under your
              account. If you believe that your account is no longer secure, then
              you must immediately notify us at contact@memories.ai.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              4. General Payment Terms
            </h2>
            <p className="leading-relaxed mb-4">
              In addition to downloading LUCI Desktop, certain features of the
              Service may require you to pay fees. Before you pay any fees, you
              will have an opportunity to review and accept the fees that you
              will be charged. All fees are in U.S. Dollars and are non-refundable
              (except as otherwise provided in Section 8.5).
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  4.1. Price.
                </h3>
                <p className="leading-relaxed">
                  Memories.ai reserves the right to determine pricing for the
                  Service. Memories.ai will make reasonable efforts to keep
                  pricing information published on the Service up to date.
                  Memories.ai may change the fees for any feature of the Service,
                  including additional fees or charges, if Memories.ai gives you
                  advance notice of changes before they apply.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  4.2. Authorization.
                </h3>
                <p className="leading-relaxed">
                  You authorize Memories.ai to charge all sums for the Orders
                  that you make and any level of Service you select as described
                  in these Terms or published by Memories.ai, including all
                  applicable taxes, to the payment method specified in your
                  account.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  4.3. Subscription Service.
                </h3>
                <p className="leading-relaxed">
                  The Service may include certain subscription-based plans with
                  automatically recurring payments for periodic charges
                  (&quot;Subscription Service&quot;). Your account will be charged
                  automatically on the Subscription Billing Date and
                  periodically thereafter (in accordance with the billing
                  frequency corresponding to the Subscription Service that you
                  have activated) for all applicable fees and taxes for the next
                  Subscription Period. You must cancel your Subscription
                  Service before it renews in order to avoid billing of the next
                  periodic Subscription Fee to your account.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  4.4. Delinquent Accounts.
                </h3>
                <p className="leading-relaxed">
                  Memories.ai may suspend or terminate access to the Service,
                  including fee-based portions of the Service, for any account
                  for which any amount is due but unpaid.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              5. Licenses
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  5.1. Limited License.
                </h3>
                <p className="leading-relaxed">
                  Subject to your complete and ongoing compliance with these
                  Terms, Memories.ai grants you, solely for your personal,
                  non-commercial use, a limited, non-exclusive, non-transferable,
                  non-sublicensable, revocable license to: (a) install and use
                  one object code copy of any macOS or Windows application or
                  other downloadable application associated with the Service on a
                  device or computer that you own or control; and (b) access and
                  use the Service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  5.2. License Restrictions.
                </h3>
                <p className="leading-relaxed">
                  Except and solely to the extent such a restriction is
                  impermissible under applicable law, you may not: (a) reproduce,
                  distribute, publicly display, create derivative works of, or
                  publicly perform the Service; (b) make modifications to or
                  derivative works of the Service or reverse engineer or
                  decompile the Service, or attempt to discern any source code
                  or underlying algorithms, methods or processes within the
                  Service; or (c) interfere with or circumvent any feature of
                  the Service, including any security or access control
                  mechanism.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              6. Prohibited Conduct
            </h2>
            <p className="leading-relaxed mb-4 font-medium">
              BY USING THE SERVICE, YOU AGREE NOT TO:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                (a) use LUCI Desktop or the Service for any illegal purpose or
                in violation of any local, state, national, or international law;
              </li>
              <li>
                (b) use the Service for any purpose not intended by us;
              </li>
              <li>
                (c) interfere with security-related features of LUCI Desktop,
                including by disabling or circumventing features that prevent
                or limit use, or reverse engineering or otherwise attempting to
                discover the source code of any portion of the Service;
              </li>
              <li>
                (d) interfere with the operation of the Service or any
                user&apos;s enjoyment of the Service, including by: uploading or
                otherwise disseminating any virus, adware, spyware, worm, or
                other malicious code; collecting personal information about
                another user or third party without consent; or interfering with
                or disrupting any network, equipment, or server connected to or
                used to provide the Service;
              </li>
              <li>
                (e) perform any fraudulent activity, including impersonating any
                person or entity, claiming a false affiliation, or accessing
                any other Service account without permission.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              7. Modification of Terms
            </h2>
            <p className="leading-relaxed">
              We may, from time to time, change these Terms. Revisions will be
              effective immediately except that, for existing users, material
              revisions will be effective 30 days after posting or notice to you
              of the revisions unless otherwise stated. If you do not agree to
              the modified Terms, then you should discontinue your use of the
              Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              8. Term, Termination, and Modification of the Service
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  8.1. Term.
                </h3>
                <p className="leading-relaxed">
                  These Terms are effective beginning when you accept the Terms
                  when you access or download LUCI Desktop, and ending when
                  terminated.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  8.2. Termination.
                </h3>
                <p className="leading-relaxed">
                  If you violate any provision of these Terms, then your
                  authorization to access the Service and these Terms
                  automatically terminate. In addition, Memories.ai may, at its
                  sole discretion, terminate these Terms or your account on the
                  Service, or suspend or terminate your access to the Service, at
                  any time for any reason or no reason, with or without notice.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  8.3. Effect of Termination.
                </h3>
                <p className="leading-relaxed">
                  Upon termination of these Terms: (a) your license rights will
                  terminate and you must immediately cease all use of the
                  Service; (b) you will no longer be authorized to access your
                  account or the Service; and (c) you must pay Memories.ai any
                  unpaid amount that was due prior to termination.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  8.4. Modification of the Service.
                </h3>
                <p className="leading-relaxed">
                  Memories.ai reserves the right to modify or discontinue the
                  Service at any time (including by limiting or discontinuing
                  certain features of the Service), temporarily or permanently,
                  without notice to you.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              9. Indemnity
            </h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, you are responsible for
              your use of the Service, and you will defend and indemnify
              Memories.ai, its affiliates, and their respective shareholders,
              directors, managers, members, officers, employees, consultants, and
              agents from and against every claim brought by a third party, and
              any related liability, damage, loss, and expense, including
              attorneys&apos; fees and costs, arising out of or connected with: (a)
              your unauthorized use of, or misuse of, the Service; (b) your
              violation of any portion of these Terms; or (c) your violation of
              any third-party right through the use of LUCI Desktop, including
              any intellectual property right or privacy right.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              10. Disclaimers; No Warranties by Memories.ai
            </h2>
            <div className="space-y-4">
              <p className="leading-relaxed font-medium">
                10.1. THE LUCI DESKTOP APPLICATION AND THE SERVICE ARE PROVIDED
                &quot;AS IS&quot; AND ON AN &quot;AS AVAILABLE&quot; BASIS. MEMORIES.AI DISCLAIMS ALL
                WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, RELATING TO
                LUCI DESKTOP AND THE SERVICE, INCLUDING ANY IMPLIED WARRANTY OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET
                ENJOYMENT, OR NON-INFRINGEMENT. MEMORIES.AI DOES NOT WARRANT THAT
                THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR FREE OF ERRORS,
                VIRUSES, OR OTHER HARMFUL COMPONENTS.
              </p>
              <p className="leading-relaxed font-medium">
                10.2. WE ARE NOT RESPONSIBLE FOR ANY DAMAGE THAT MAY RESULT FROM
                THE USE OF LUCI DESKTOP OR THE SERVICE. YOU UNDERSTAND AND AGREE
                THAT YOU USE LUCI DESKTOP OR ANY PORTION OF THE SERVICE AT YOUR
                OWN DISCRETION AND RISK, AND THAT WE ARE NOT RESPONSIBLE FOR ANY
                DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM) OR ANY
                LOSS OF DATA, INCLUDING USER CONTENT.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              11. Limitation of Liability
            </h2>
            <div className="space-y-4">
              <p className="leading-relaxed font-medium">
                11.1. TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE
                MEMORIES.AI ENTITIES BE LIABLE TO YOU FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES ARISING
                OUT OF OR RELATING TO YOUR USE OF LUCI DESKTOP AND THE SERVICE.
              </p>
              <p className="leading-relaxed font-medium">
                11.2. THE AGGREGATE LIABILITY OF THE MEMORIES.AI ENTITIES TO YOU
                FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF LUCI
                DESKTOP, OR USE OR ANY INABILITY TO ACCESS OR USE ANY PORTION OF
                THE SERVICE OR OTHERWISE UNDER THESE TERMS, IS LIMITED TO THE
                GREATER OF: (a) THE AMOUNT YOU HAVE PAID TO MEMORIES.AI FOR USE OF
                THE SERVICE IN THE 12 MONTHS PRIOR TO THE EVENT OR CIRCUMSTANCE
                GIVING RISE TO THE CLAIM, AND (b) US$500.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              12. Dispute Resolution and Arbitration
            </h2>
            <p className="leading-relaxed">
              In the interest of resolving disputes between you and Memories.ai
              in the most expedient and cost effective manner, you and
              Memories.ai agree that every dispute arising in connection with
              these Terms, LUCI Desktop, or the Service, will be resolved by
              binding arbitration. Any arbitration between you and Memories.ai
              will be settled under the Federal Arbitration Act and
              administered by the American Arbitration Association (&quot;AAA&quot;) under
              its Consumer Arbitration Rules (&quot;AAA Rules&quot;) as modified by these
              Terms. YOU AND MEMORIES.AI AGREE THAT EACH MAY BRING CLAIMS AGAINST
              THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A
              PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE
              PROCEEDING.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-0 mb-4">
              13. Miscellaneous
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  13.1. General Terms.
                </h3>
                <p className="leading-relaxed">
                  These Terms, including the Privacy Policy and any other
                  agreements expressly incorporated by reference into these
                  Terms, are the entire and exclusive understanding and agreement
                  between you and Memories.ai regarding your use of the Service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  13.2. Governing Law.
                </h3>
                <p className="leading-relaxed">
                  These Terms are governed by the laws of the State of Delaware
                  without regard to conflict of law principles.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  13.3. Privacy Policy.
                </h3>
                <p className="leading-relaxed">
                  Please read the Memories.ai Privacy Policy (the &quot;Privacy
                  Policy&quot;) carefully for information relating to our collection,
                  use, storage, and disclosure of your personal information.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-0 mb-2">
                  13.4. Contact Information.
                </h3>
                <p className="leading-relaxed">
                  The Service is offered by Memories.ai Platforms, Inc., located
                  at 1209 Orange Street, Wilmington, New Castle, Delaware,
                  19801. You may contact us by sending correspondence to that
                  address or by emailing us at contact@memories.ai.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
