"use client"

import { Button } from "@/components/ui/button"
import { LoginDialog } from "@/components/auth/login-dialog"
import { useState, useEffect } from "react"
import { useTranslation } from "@/app/i18n/client"
import { Language } from "@/types"

interface LoginButtonProps {
  lang: Language
}

export function LoginButton({ lang }: LoginButtonProps) {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation('common')

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
  }, [lang, i18n])

  return (
    <>
      <Button 
        variant="ghost" 
        className="text-[#131F42] font-light"
        onClick={() => setOpen(true)}
      >
        {t('header.navigation.login')}
      </Button>
      <LoginDialog 
        open={open} 
        onOpenChange={setOpen}
      />
    </>
  )
} 
