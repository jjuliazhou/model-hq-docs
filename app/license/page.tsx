export default function LicensePage() {
	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div className="space-y-8">
				<div>
					<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Software License Agreement</h1>
					<p className="text-lg text-gray-600 dark:text-gray-400">
						AI Bloks LLC dba LLMWare.ai ("Licensor") is the owner and provider of the proprietary
						software ("Licensed Software"). By downloading, installing, or using the Licensed Software,
						Licensee agrees to be bound by the terms below.
					</p>
				</div>

				<div className="space-y-8">
					<section id="grant-of-license">
						<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">1. Grant of License</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							Licensor hereby grants to Licensee a nonexclusive, nontransferable, revocable license to
							install, access, and use the Licensed Software ("Model HQ") for the duration of the term
							of the license and solely for Licensee’s own purposes and subject to the terms and
							conditions of this Agreement. Any free trial versions of Model HQ will be subject to the
							same terms and conditions herein. Ownership of the Licensed Software and all associated
							intellectual property rights shall remain with Licensor.
						</p>
					</section>

					<section id="license-restrictions">
						<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">2. License Restrictions</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">Licensee agrees not to:</p>
						<ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
							<li>Copy, distribute, sublicense, or transfer the Licensed Software to any third party.</li>
							<li>Reverse engineer, decompile, disassemble, modify, or create derivative works based on the Licensed Software.</li>
							<li>Publish, share, or disclose any performance metrics or evaluation results related to the Licensed Software without prior written consent from Licensor.</li>
							<li>Remove or alter any proprietary notices, labels, or marks on the Licensed Software.</li>
						</ul>
					</section>

					<section id="installation-and-use">
						<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">3. Installation and Use</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							The Licensed Software is provided in downloadable form. Licensee may install and use the Licensed
							Software only on devices owned or controlled by Licensee. Any unauthorized use of the Licensed
							Software is strictly prohibited. Licensee agrees to be bound by Licensor’s Terms of Service,
							Acceptable Use Policy and Privacy Policy as set forth on Licensor’s website when using this Licensed Software.
						</p>
					</section>

					<section id="limited-warranty">
						<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">4. Limited Warranty and Disclaimer</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							AI MODELS MAKE MISTAKES AND PERFORMANCE OF MODEL HQ IS HIGHLY DEPENDENT ON LICENSEE’S DEVICE AND USAGE.
							THE LICENSED SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. LICENSOR EXPRESSLY DISCLAIMS
							ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO IMPLIED
							WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. LICENSOR DOES
							NOT GUARANTEE THAT THE LICENSED SOFTWARE WILL BE ERROR-FREE OR UNINTERRUPTED.
						</p>
					</section>

					<section id="limitation-of-liability">
						<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">5. Limitation of Liability</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							To the fullest extent permitted by applicable law, Licensor shall not be liable for any indirect,
							incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
							arising out of or related to the use or inability to use the Licensed Software, even if Licensor
							has been advised of the possibility of such damages. The maximum amount of any damages payable by
							Licensor shall be limited to the payment amount received by the Licensor in connection with the
							purchase of such Licensed Software.
						</p>
					</section>

					<section id="termination">
						<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">6. Termination</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							This Agreement and the license granted herein are effective until terminated. Licensor may terminate
							this Agreement immediately if Licensee breaches any of its terms. Upon termination, Licensee must
							cease all use of the Licensed Software and delete all copies from its systems.
						</p>
					</section>

					<section id="governing-law">
						<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">7. Governing Law</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							This Agreement shall be governed by and construed in accordance with the laws of the state in which
							Licensor is headquartered, without regard to its conflict of laws principles.
						</p>
					</section>

					<section id="entire-agreement">
						<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">8. Entire Agreement</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							This Agreement constitutes the entire agreement between the parties with respect to the subject matter
							hereof and supersedes all prior or contemporaneous understandings, representations, or agreements,
							whether written or oral.
						</p>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
							By downloading or using the Licensed Software, Licensee acknowledges that they have read, understood,
							and agree to be bound by the terms of this Agreement.
						</p>
					</section>
				</div>

				<div className="border-t pt-8">
					<p className="text-sm text-gray-500">Last updated: March 3, 2025</p>
				</div>
			</div>
		</div>
	)
}

