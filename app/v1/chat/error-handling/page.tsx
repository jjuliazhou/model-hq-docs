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

export default function ErrorHandlingInChatPage() {
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
              <BreadcrumbPage>Error Handling in Chat</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Error Handling in Chat</h1>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2 id="possible-errors-during-model-download">Possible errors during model download</h2>

          <blockquote>
            <p>Unfortunately, something has gone wrong loading _model_name_</p>
          </blockquote>

          <p>
            If issues are encountered during the download—such as the error prompt shown below:
          </p>

          <img src="/v1/chat/chatError/01_error1.png" alt="chatNext" />

          <p>
            The <strong>"Yes"</strong> button can be clicked to retry and continue the download.
          </p>

          <blockquote>
            <p>Clicking <strong>"No"</strong> will return the user to the <strong>Main Menu</strong>.</p>
          </blockquote>

          <p>
            After confirming, the interface should update to:
          </p>

          <img src="/v1/chat/chatError/02_error2.png" alt="chatNext" />

          <p>
            Once the retry is confirmed and the download continues, the interface will update to the following:
          </p>

          <img src="/v1/chat/chatError/03_chatLoad.png" alt="chatLoad" />

          <p>
            At this stage, the selected models will begin loading automatically after the download completes.
            <br />
            It is recommended to wait for the loading process to finish before proceeding to use the Chat feature.
          </p>

          <p>
            Common causes of download errors:
          </p>

          <ul>
            <li>Insufficient memory on the device</li>
            <li>Disrupted WiFi connection</li>
            <li>Device interruption of model download due to hibernation mode</li>
          </ul>

          <blockquote data-type="tip">
            <p>Refer to the <strong>System Configuration guide</strong> for recommended system settings prior to downloading models.</p>
          </blockquote>

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