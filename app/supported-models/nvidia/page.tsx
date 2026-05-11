import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Cpu, Info, Clock } from "lucide-react"

export default function NVIDIASupportedModelsPage() {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-6 sm:space-y-6 px-2 sm:px-4 lg:px-6">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>NVIDIA Supported Models</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-3 sm:space-y-4">
                <div className="text-center space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                            NVIDIA Supported Models
                        </h1>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4">
                        AI models optimized for NVIDIA GPUs and accelerators
                    </p>
                </div>

                <Alert>
                    <Info className="h-4 w-4 flex-shrink-0" />
                    <AlertDescription className="text-xs sm:text-sm lg:text-base">
                        NVIDIA model support is currently in development. The full catalog of NVIDIA-optimized models will be announced soon.
                    </AlertDescription>
                </Alert>
            </div>

            <Card>
                <CardContent>
                    <div className="flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 text-center space-y-3 sm:space-y-4">
                        <div className="rounded-full bg-emerald-50 dark:bg-emerald-950 p-4 sm:p-5">
                            <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600" />
                        </div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                            NVIDIA Model Support is Coming Soon
                        </h3>
                        <p className="text-xs sm:text-sm lg:text-base text-muted-foreground max-w-2xl">
                            We are actively working on bringing NVIDIA-optimized AI models to Model HQ. Check back soon
                            for the complete catalog of supported models for NVIDIA GeForce, RTX, and data center GPUs.
                        </p>
                    </div>
                </CardContent>
            </Card>

            <div className="bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3 sm:p-4 lg:p-6">
                <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-emerald-900 dark:text-emerald-100 mb-2 sm:mb-3 lg:mb-4">
                    Need Help?
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-emerald-800 dark:text-emerald-200 mb-2 sm:mb-3 lg:mb-4">
                    For questions about NVIDIA model support or to stay informed about the launch, contact our technical
                    support team at{" "}
                    <code className="bg-background/60 px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm">support@aibloks.com</code>
                </p>
            </div>
        </div>
    )
}
