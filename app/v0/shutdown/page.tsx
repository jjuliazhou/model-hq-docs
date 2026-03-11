import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ShutdownPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/system">System</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Shutting Down</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Shutting Down Model HQ</h1>
                <p>
                    To ensure optimal performance and prevent background processes, it's important to{" "}
                    <strong>properly shut down Model HQ after each use</strong>.
                </p>
            </div>

            <div className="prose prose-gray max-w-none">
                <img src="/v0/shutdown.png" alt="shutdown" />

                <h2>How to Shut Down</h2>
                <p>
                    Click the <strong>power button (<code>⏻</code>)</strong> located at the{" "}
                    <strong>top-right corner</strong> of the app interface.
                </p>

                <h2>Why It Matters</h2>
                <ul>
                    <li>Continue running in the <strong>background</strong></li>
                    <li><strong>Replicate itself</strong> while the device is in <strong>hibernation</strong></li>
                    <li>Cause <strong>unintended system behavior</strong> or <strong>resource usage</strong></li>
                </ul>

                <blockquote data-type="tip">
                    <p>
                        Always shut down Model HQ manually to maintain system stability and avoid unnecessary background activity.
                    </p>
                </blockquote>

                <h2>Conclusion</h2>
                <p>
                    After each use, make sure to shut down the app by clicking the power button ('⏻') in the top-right corner. If the app
                    isn’t closed properly, it may continue running in the background and could replicate itself while the device is in hibernation.
                </p>

                <p>
                    For any questions or feedback, reach out to us at <code>support@aibloks.com</code>.
                </p>
            </div>
        </div>
    )
}
