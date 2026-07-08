import { LegalPage } from "@/components/legal-page"

export default function LicensePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Software License Agreement"
      intro={`AI Bloks LLC dba LLMWare.ai ("Licensor") is the owner and provider of the proprietary software ("Licensed Software"). By downloading, installing, or using the Licensed Software, Licensee agrees to be bound by the terms below.`}
      lastUpdated="March 3, 2025"
    >
      <section id="grant-of-license">
        <h2>1. Grant of License</h2>
        <p>
          Licensor hereby grants to Licensee a nonexclusive, nontransferable, revocable license to
          install, access, and use the Licensed Software (&ldquo;Model HQ&rdquo;) for the duration of the term
          of the license and solely for Licensee&rsquo;s own purposes and subject to the terms and
          conditions of this Agreement. Any free trial versions of Model HQ will be subject to the
          same terms and conditions herein. Ownership of the Licensed Software and all associated
          intellectual property rights shall remain with Licensor.
        </p>
      </section>

      <section id="license-restrictions">
        <h2>2. License Restrictions</h2>
        <p>Licensee agrees not to:</p>
        <ul>
          <li>Copy, distribute, sublicense, or transfer the Licensed Software to any third party.</li>
          <li>Reverse engineer, decompile, disassemble, modify, or create derivative works based on the Licensed Software.</li>
          <li>Publish, share, or disclose any performance metrics or evaluation results related to the Licensed Software without prior written consent from Licensor.</li>
          <li>Remove or alter any proprietary notices, labels, or marks on the Licensed Software.</li>
        </ul>
      </section>

      <section id="installation-and-use">
        <h2>3. Installation and Use</h2>
        <p>
          The Licensed Software is provided in downloadable form. Licensee may install and use the Licensed
          Software only on devices owned or controlled by Licensee. Any unauthorized use of the Licensed
          Software is strictly prohibited. Licensee agrees to be bound by Licensor&rsquo;s Terms of Service,
          Acceptable Use Policy and Privacy Policy as set forth on Licensor&rsquo;s website when using this Licensed Software.
        </p>
      </section>

      <section id="limited-warranty">
        <h2>4. Limited Warranty and Disclaimer</h2>
        <p>
          AI MODELS MAKE MISTAKES AND PERFORMANCE OF MODEL HQ IS HIGHLY DEPENDENT ON LICENSEE&rsquo;S DEVICE AND USAGE.
          THE LICENSED SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTY OF ANY KIND. LICENSOR EXPRESSLY DISCLAIMS
          ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO IMPLIED
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. LICENSOR DOES
          NOT GUARANTEE THAT THE LICENSED SOFTWARE WILL BE ERROR-FREE OR UNINTERRUPTED.
        </p>
      </section>

      <section id="limitation-of-liability">
        <h2>5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, Licensor shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
          arising out of or related to the use or inability to use the Licensed Software, even if Licensor
          has been advised of the possibility of such damages. The maximum amount of any damages payable by
          Licensor shall be limited to the payment amount received by the Licensor in connection with the
          purchase of such Licensed Software.
        </p>
      </section>

      <section id="termination">
        <h2>6. Termination</h2>
        <p>
          This Agreement and the license granted herein are effective until terminated. Licensor may terminate
          this Agreement immediately if Licensee breaches any of its terms. Upon termination, Licensee must
          cease all use of the Licensed Software and delete all copies from its systems.
        </p>
      </section>

      <section id="governing-law">
        <h2>7. Governing Law</h2>
        <p>
          This Agreement shall be governed by and construed in accordance with the laws of the state in which
          Licensor is headquartered, without regard to its conflict of laws principles.
        </p>
      </section>

      <section id="entire-agreement">
        <h2>8. Entire Agreement</h2>
        <p>
          This Agreement constitutes the entire agreement between the parties with respect to the subject matter
          hereof and supersedes all prior or contemporaneous understandings, representations, or agreements,
          whether written or oral.
        </p>
        <p>
          By downloading or using the Licensed Software, Licensee acknowledges that they have read, understood,
          and agree to be bound by the terms of this Agreement.
        </p>
      </section>
    </LegalPage>
  )
}
