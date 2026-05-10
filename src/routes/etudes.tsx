import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileText, FileSpreadsheet, MessageSquarePlus, ExternalLink, Calendar, Users, Construction, FolderKanban } from "lucide-react";

export const Route = createFileRoute("/etudes")({
  head: () => ({ meta: [{ title: "Études — Vinci Junior" }] }),
  component: () => (
    <AppShell>
      <Etudes />
    </AppShell>
  ),
});

function Etudes() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Étude · Helios Energy</h1>
            <Badge className="bg-[var(--success)]/15 text-[var(--success)] border-0">En cours</Badge>
          </div>
          <p className="text-muted-foreground mt-1">Audit data des parcs photovoltaïques · Réf. ET-2026-042</p>
        </div>
        <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-[var(--primary-glow)] shadow-[var(--shadow-elegant)]">
          <MessageSquarePlus className="size-4" /> Créer un canal G-Chat pour cette étude
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-0 shadow-[var(--shadow-card)]">
          <CardContent className="p-5">
            <div className="text-sm text-muted-foreground inline-flex items-center gap-1.5"><Calendar className="size-4" /> Démarrage</div>
            <div className="font-bold text-lg mt-1">12 mai 2026</div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-[var(--shadow-card)]">
          <CardContent className="p-5">
            <div className="text-sm text-muted-foreground inline-flex items-center gap-1.5"><Users className="size-4" /> Équipe</div>
            <div className="flex -space-x-2 mt-2">
              {["LM", "HB", "SL", "TP"].map((i) => (
                <Avatar key={i} className="ring-2 ring-card size-8"><AvatarFallback className="text-xs bg-primary/15 text-primary">{i}</AvatarFallback></Avatar>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-[var(--shadow-card)]">
          <CardContent className="p-5">
            <div className="text-sm text-muted-foreground">Budget</div>
            <div className="font-bold text-lg mt-1">12 500€ <span className="text-sm text-[var(--success)] font-medium">· Acompte versé</span></div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-0 shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><FolderKanban className="size-5 text-primary" /> Ressources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Cahier des charges – v2.docx", type: "doc", icon: FileText, color: "text-blue-500" },
              { name: "Devis signé – Helios.pdf", type: "pdf", icon: FileText, color: "text-red-500" },
              { name: "Planning macro.xlsx", type: "sheet", icon: FileSpreadsheet, color: "text-green-600" },
              { name: "Restitution intermédiaire.pptx", type: "slide", icon: FileText, color: "text-orange-500" },
            ].map((f) => (
              <a key={f.name} href="#" className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-muted/40 transition-colors group">
                <div className="size-10 rounded-lg bg-muted grid place-items-center">
                  <f.icon className={`size-5 ${f.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{f.name}</div>
                  <div className="text-xs text-muted-foreground">Google Drive · Mis à jour il y a 3h</div>
                </div>
                <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </CardContent>
        </Card>

        <div className="relative">
          <Card className="border-0 shadow-[var(--shadow-card)] overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Construction className="size-5 text-[var(--warning)]" /> Suivi documentaire</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-3 opacity-50 pointer-events-none">
                <div className="h-3 rounded bg-muted w-3/4" />
                <div className="h-3 rounded bg-muted w-1/2" />
                <div className="h-3 rounded bg-muted w-2/3" />
                <div className="h-20 rounded bg-muted" />
                <div className="h-3 rounded bg-muted w-3/5" />
              </div>
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center px-4 py-5 rounded-2xl bg-card/95 backdrop-blur border-2 border-dashed border-[var(--warning)]/40 shadow-lg max-w-[230px]">
                  <div className="text-2xl">🚧</div>
                  <div className="font-bold text-sm mt-1">Coming Soon</div>
                  <div className="text-xs text-muted-foreground mt-1">Gestion documentaire des études complètes</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="border-0 shadow-[var(--shadow-card)] relative overflow-hidden">
        <CardHeader>
          <CardTitle>Livrables & Jalons</CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="space-y-3 opacity-40 pointer-events-none">
            {["Kick-off client", "Phase 1 — Audit", "Phase 2 — Recommandations", "Restitution finale"].map((s) => (
              <div key={s} className="flex items-center gap-3 p-3 rounded-lg border">
                <div className="size-8 rounded-full bg-muted" />
                <div className="font-medium">{s}</div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 grid place-items-center">
            <Badge className="bg-[var(--warning)]/15 text-[var(--warning)] border border-[var(--warning)]/30 px-4 py-2 text-sm">
              🚧 Coming Soon — Suivi des jalons
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
