export function Footer() {
  return (
    <footer className="border-t bg-background px-4 sm:px-6 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="text-center sm:text-left">&copy; 2025 Model HQ. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a href="/license" className="hover:text-foreground transition-colors">
            License
          </a>
          <a href="/privacy-policies" className="hover:text-foreground transition-colors">
            Privacy Policies
          </a>
          <a href="/terms-of-services" className="hover:text-foreground transition-colors">
            Terms of Service
          </a>
          <a href="/acceptable-use-policy" className="hover:text-foreground transition-colors">
            Acceptable Use Policy
          </a>
          <a href="/support" className="hover:text-foreground transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  )
}
