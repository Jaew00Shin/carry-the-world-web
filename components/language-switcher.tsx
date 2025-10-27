"use client"

import { useLanguage } from "@/lib/i18n/context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  const toggleLanguage = () => {
    setLocale(locale === "ko" ? "en" : "ko")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">{locale === "ko" ? "EN" : "KO"}</span>
    </Button>
  )
}
