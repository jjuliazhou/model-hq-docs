import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DocPageLayout } from "@/components/doc-page-layout"
import { references } from "./references"

export default function ShuttingDownModelHqPage() {
  return (
    <DocPageLayout references={references}>
      <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Shutting Down Model HQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Shutting Down Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          To ensure optimal performance and prevent background processes, Model HQ should be properly shut down after each use.
        </p>

        <h2 id="how-to-shut-down">How to shut down</h2>

        <p>
          The shutdown process can be initiated by clicking the <strong>power button (<code>⏻</code>)</strong> located at the <strong>top-right corner</strong> of the application interface.
        </p>

        <img src="/v1/shutdown/01_shutdown.png" alt="shutdown" />

        <h2 id="why-proper-shutdown-matters">Why proper shutdown matters</h2>

        <p>
          If the application is not closed properly, the following issues may occur:
        </p>

        <ul>
          <li>The application may continue running in the background.</li>
          <li>The application may replicate itself while the device is in hibernation.</li>
          <li>Unintended system behavior or resource usage may result.</li>
        </ul>

        <blockquote data-type="tip">
            <p>It is recommended to shut down Model HQ manually after each session to maintain system stability and avoid unnecessary background activity.</p>
        </blockquote>

        <blockquote data-type="note">
            <p>If the application remains idle for an extended period, the server will disconnect automatically.</p>
        </blockquote>

        <h2 id="unintended-shutdown">Unintended shutdown</h2>

        <p>
          The application may shutdown and need to be restarted when the device goes into hibernation mode or if the user closes the laptop. To prevent this from happening frequently, please change the hibernation setting of your device. Alternatively, user can select Model HQ to automatically restart after a shutdown by selecting <strong>config button</strong> (upper right hand side) to access Model HQ Configuration Center, then <strong>App</strong> then make the "ON" selection for "Auto-Restart UI". This will automatically restart Model HQ in a new browser tab.
        </p>

        <img src="/v1/shutdown/02_unintended.png" alt="shutdown" />

        <h2 id="conclusion">Conclusion</h2>

        <p>
          After each use, the application should be shut down by clicking the power button (<code>⏻</code>) in the top-right corner. If the application is not closed properly, it may continue running in the background and could replicate itself while the device is in hibernation.
        </p>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400">
            For further assistance or to share feedback, please contact us at{' '}
            <a href="mailto:support@aibloks.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              support@aibloks.com
            </a>
          </p>
        </div>
      </div>
    </div>
    </DocPageLayout>
  )
}