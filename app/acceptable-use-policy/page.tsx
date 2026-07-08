import { LegalPage } from "@/components/legal-page"

export default function AcceptableUsePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Acceptable Use Policy"
      intro={`This Acceptable Use Policy ("Policy") governs the usage of AI models provided by AI BLOKS LLC dba LLMWare ("Provider") for on-device and other applications. By accessing, downloading, or deploying the Provider's AI models, you ("User") agree to comply with this Policy. The intent of this Policy is to ensure the responsible and lawful use of our AI models while safeguarding the rights, privacy, and safety of all users and affected parties.`}
      lastUpdated="January 2, 2025"
    >
      <section id="scope-of-use">
        <h2>1. Scope of Use</h2>
        <h3>1.1 Permitted Uses</h3>
        <p>Users may deploy the AI models provided by the Provider for purposes such as:</p>
        <ul>
          <li>Enhancing user applications, including personal, educational, or professional use</li>
          <li>Supporting business operations, including automation, decision-making, and content generation</li>
          <li>Research and development activities, including prototyping and testing</li>
        </ul>

        <h3>1.2 Prohibited Uses</h3>
        <p>Users may not deploy or use the Provider&apos;s AI models for:</p>
        <ul>
          <li><strong>Unlawful Activities:</strong> Any activity that violates applicable local, national, or international laws or regulations.</li>
          <li><strong>Harmful Activities:</strong> Creating or disseminating malicious software, spam, phishing attempts, or other harmful digital content.</li>
          <li><strong>Hate Speech or Harassment:</strong> Generating content that is abusive, threatening, defamatory, harassing, or discriminatory.</li>
          <li><strong>Privacy Violations:</strong> Collecting, storing, or processing personal data without explicit user consent or in violation of privacy laws.</li>
          <li><strong>Misrepresentation:</strong> Impersonating individuals, misleading users, or spreading misinformation.</li>
          <li><strong>Surveillance:</strong> Facilitating unlawful surveillance, monitoring, or data scraping of individuals or entities.</li>
          <li><strong>Weaponization:</strong> Applications involving military use, surveillance targeting, or other uses with potential for harm.</li>
        </ul>
      </section>

      <section id="technical-limitations">
        <h2>2. Technical and Operational Limitations</h2>
        <h3>2.1 Compliance with Device Specifications</h3>
        <p>
          AI models must be deployed on devices meeting the Provider&apos;s technical requirements to ensure
          functionality and security.
        </p>
        <h3>2.2 Performance Monitoring</h3>
        <p>
          Users are responsible for ensuring the proper functionality of the models on their devices and addressing
          any performance issues.
        </p>
        <h3>2.3 Modification Restrictions</h3>
        <p>
          Users may not modify, reverse-engineer, decompile, or otherwise alter the Provider&apos;s AI models without
          express written permission.
        </p>
      </section>

      <section id="intellectual-property">
        <h2>3. Intellectual Property and Licensing</h2>
        <h3>3.1 Ownership</h3>
        <p>
          All AI models provided by the Provider remain the intellectual property of the Provider or its licensors.
          Users are granted a non-exclusive, non-transferable license to use the models in accordance with this
          Policy.
        </p>
        <h3>3.2 Attribution</h3>
        <p>
          Users must provide appropriate attribution to the Provider in applications or products where the models
          are utilized, unless explicitly waived by the Provider.
        </p>
      </section>

      <section id="privacy-security">
        <h2>4. Privacy and Security</h2>
        <h3>4.1 User Data Handling</h3>
        <p>
          Users must ensure that any data processed by the AI models complies with applicable data protection and
          privacy laws.
        </p>
        <h3>4.2 Security Requirements</h3>
        <p>
          Users must implement appropriate safeguards to protect the AI models and associated data from unauthorized
          access, misuse, or exploitation.
        </p>
      </section>

      <section id="enforcement">
        <h2>5. Enforcement and Termination</h2>
        <h3>5.1 Policy Violations</h3>
        <p>
          The Provider reserves the right to investigate violations of this Policy and may suspend or terminate
          access to the AI models for non-compliance.
        </p>
        <h3>5.2 Reporting Violations</h3>
        <p>
          Users are encouraged to report any violations of this Policy to the Provider at{" "}
          <a href="mailto:support@aibloks.com">support@aibloks.com</a>.
        </p>
      </section>

      <section id="amendments">
        <h2>6. Amendments and Updates</h2>
        <p>
          This Policy may be updated periodically. Users will be notified of significant changes, and continued use
          of the AI models after such updates constitutes acceptance of the revised Policy.
        </p>
      </section>

      <section id="contact-info">
        <h2>7. Contact Information</h2>
        <p>
          For questions or concerns regarding this Policy, please contact us at{" "}
          <a href="mailto:support@aibloks.com">support@aibloks.com</a>.
        </p>
      </section>

      <section id="acknowledgment">
        <h2>Acknowledgment</h2>
        <p>
          By using the Provider&apos;s AI models, you acknowledge that you have read, understood, and agree to abide by
          this Acceptable Use Policy.
        </p>
      </section>
    </LegalPage>
  )
}
