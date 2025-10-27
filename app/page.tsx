"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  const { t } = useLanguage()
  const [openCareer, setOpenCareer] = useState<number[]>([])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{t.footer.companyName}</h1>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex gap-8">
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.about}
                </a>
                <a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.team}
                </a>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.projects}
                </a>
              </nav>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero Section */}
        <section className="mb-32 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            {t.hero.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto whitespace-pre-line">
            {t.hero.subtitle}
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32">
          <h3 className="text-3xl font-bold mb-8">{t.about.title}</h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.about.paragraph1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.about.paragraph2}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6">
                <h4 className="font-bold mb-2">{t.about.values.innovation.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.about.values.innovation.description}
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold mb-2">{t.about.values.impact.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.about.values.impact.description}
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold mb-2">{t.about.values.growth.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.about.values.growth.description}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="mb-32">
          <h3 className="text-3xl font-bold mb-8">{t.team.title}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.team.members.map((member, index) => {
              const isOpen = openCareer.includes(index)
              const toggleCareer = () => {
                setOpenCareer((prev) =>
                  prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
                )
              }

              return (
                <Card key={index} className="p-6">
                  <div className="mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-muted">
                      <Image
                        src={index === 0 ? "/jaewoo_profile.JPG" : "/placeholder-user.jpg"}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h4 className="font-bold text-center mb-1">{member.name}</h4>
                    <p className="text-sm text-muted-foreground text-center mb-3">{member.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {member.career && member.career.length > 0 && (
                    <Collapsible open={isOpen} onOpenChange={toggleCareer}>
                      <CollapsibleTrigger className="w-full mt-4 text-center">
                        <div className="flex items-center justify-center gap-2 text-sm text-primary hover:underline">
                          <span>{t.team.footprints}</span>
                          {isOpen ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4 space-y-4">
                        {member.career.map((item, careerIndex) => (
                          <div
                            key={careerIndex}
                            className="border-l-2 border-primary pl-4 py-2 text-left"
                          >
                            <p className="text-xs text-muted-foreground mb-1">{item.period}</p>
                            <p className="font-semibold text-sm mb-1">{item.position}</p>
                            <p className="text-sm text-muted-foreground mb-1">{item.company}</p>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  )}
                </Card>
              )
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <h3 className="text-3xl font-bold mb-8">{t.projects.title}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.list.map((project, index) => {
              const getStatusBadgeClass = (status: string) => {
                switch (status) {
                  case "active":
                    return "bg-green-100 text-green-800 hover:bg-green-100"
                  case "development":
                    return "bg-blue-100 text-blue-800 hover:bg-blue-100"
                  case "closed":
                    return "border-gray-400 text-gray-600"
                  default:
                    return ""
                }
              }

              const getStatusLabel = (status: string) => {
                switch (status) {
                  case "active":
                    return t.projects.status.active
                  case "development":
                    return t.projects.status.development
                  case "closed":
                    return t.projects.status.closed
                  default:
                    return ""
                }
              }

              const isClosedProject = project.status === "closed"
              const hasUrl = project.url && project.url.trim() !== ""

              const cardContent = (
                <Card
                  className={`p-6 hover:shadow-lg transition-shadow ${
                    isClosedProject ? "opacity-75" : ""
                  } ${hasUrl ? "cursor-pointer" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                      <Image
                        src={project.logo}
                        alt={project.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h5 className="font-bold truncate">{project.name}</h5>
                        <Badge
                          variant={project.status === "closed" ? "outline" : "default"}
                          className={`${getStatusBadgeClass(project.status)} flex-shrink-0`}
                        >
                          {getStatusLabel(project.status)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )

              return hasUrl ? (
                <Link
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cardContent}
                </Link>
              ) : (
                <div key={index}>{cardContent}</div>
              )
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 mt-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">{t.footer.companyName}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                {t.footer.tagline}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{t.footer.contact.title}</h4>
              <p className="text-sm text-muted-foreground mb-2">
                {t.footer.contact.email}
              </p>
              <p className="text-sm text-muted-foreground">
                {t.footer.contact.tel}
              </p>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>{t.footer.copyright.replace("{{year}}", new Date().getFullYear().toString())}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
