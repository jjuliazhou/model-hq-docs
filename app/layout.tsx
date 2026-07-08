import type React from "react"
import type { Metadata, Viewport } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NavigationLoading } from "@/components/navigation-loading"
import { ThemeProvider } from "@/components/theme-provider"
import { HeaderVisibilityProvider } from "@/contexts/header-visibility-context"
import { DeprecationBanner } from "@/components/deprecation-banner"
import { Analytics } from "@vercel/analytics/next"

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  metadataBase: new URL('https://model-hq-docs.vercel.app'),
  title: "Model HQ Documentation",
  description: "Complete documentation for Model HQ platform",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  openGraph: {
    title: 'Model HQ Documentation',
    siteName: 'model-hq-docs',
    url: 'https://model-hq-docs.vercel.app/',
    description:
      'Complete documentation for Model HQ platform',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Model HQ Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Model HQ Documentation',
    description:
      'Complete documentation for Model HQ platform',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderVisibilityProvider>
            <NavigationLoading />
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                <Header />
                {/* <DeprecationBanner /> */}
                <main className="flex-1 p-6">{children}</main>
                <Footer />
              </SidebarInset>
            </SidebarProvider>
          </HeaderVisibilityProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
