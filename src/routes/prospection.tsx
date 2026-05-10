import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Flame, Phone, Mail, Building2, MapPin, Undo2, Info, Sparkles } from "lucide-react";

export const Route = createFileRoute("/prospection")({
  head: () => ({ meta: [{ title: "Prospection — Vinci Junior" }] }),
  component: () => (
    <AppShell>
      <Prospection />
    </AppShell>
  ),
});

const leads = [
  { co: "Helios Energy", contact: "Camille Dupont", role: "Head of Innovation", phone: "+33 6 12 34 56 78", email: "c.dupont@helios.fr", city: "Paris", sector: "Énergies renouvelables", summary: "Start-up Series B (12M€) spécialisée dans le solaire BtoB. Cherche un audit data pour optimiser ses parcs photovoltaïques en France." },
  { co: "Brunet & Co", contact: "Antoine Brunet", role: "Directeur Général", phone: "+33 6 22 11 33 44", email: "antoine@brunet.co", city: "Lyon", sector: "Conseil RH", summary: "Cabinet RH de 40 personnes. Souhaite digitaliser son processus de recrutement avec une plateforme sur-mesure." },
  { co: "Nordix SAS", contact: "Pierre Lambert", role: "CTO", phone: "+33 6 99 88 77 66", email: "pierre@nordix.io", city: "Lille", sector: "SaaS B2B", summary: "Éditeur SaaS logistique. Besoin d'une étude UX pour refondre le dashboard analytics de leur produit phare." },
];

function Prospection() {
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState<"left" | "right" | null>(null);

  const lead = leads[index % leads.length];

  const swipe = (dir: "left" | "right") => {
    setAnim(dir);
    setTimeout(() => {
      setAnim(null);
      setIndex((i) => i + 1);
    }, 380);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--hot)]/10 text-[var(--hot)] text-xs font-semibold">
          <Sparkles className="size-3.5" /> Mode Prospection
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Swipe ton prochain client</h1>
        <p className="text-muted-foreground">À gauche pour passer · à droite pour transformer en opportunité.</p>
      </div>

      <div className="flex items-center justify-center gap-6 text-sm">
        <div className="text-muted-foreground"><span className="font-bold text-foreground">{index}</span> traités</div>
        <div className="h-4 w-px bg-border" />
        <div className="text-muted-foreground">Streak <span className="font-bold text-[var(--hot)]">🔥 7</span></div>
        <div className="h-4 w-px bg-border" />
        <div className="text-muted-foreground">Score <span className="font-bold text-primary">+240 pts</span></div>
      </div>

      <div className="relative h-[520px]">
        {/* stacked card behind */}
        <Card key={`bg-${index}`} className="absolute inset-0 -bottom-3 mx-3 border-0 shadow-md bg-card/60 scale-95 -z-10" />

        <Card
          key={index}
          className={`absolute inset-0 overflow-hidden border-0 shadow-[var(--shadow-elegant)] bg-[var(--gradient-card)] animate-card-in ${
            anim === "left" ? "animate-swipe-left" : anim === "right" ? "animate-swipe-right" : ""
          }`}
        >
          <div className="h-32 bg-gradient-to-br from-primary via-[var(--primary-glow)] to-[var(--accent)] relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white,transparent_50%)] opacity-20" />
            <div className="absolute -bottom-10 left-6 size-20 rounded-2xl bg-card border-4 border-card grid place-items-center text-2xl font-black text-primary shadow-lg">
              {lead.co[0]}
            </div>
            <Badge className="absolute top-4 right-4 bg-white/20 backdrop-blur text-white border-0">{lead.sector}</Badge>
          </div>

          <div className="p-6 pt-12 space-y-4">
            <div>
              <div className="flex items-center gap-2 text-2xl font-bold">
                {lead.co}
                <span className="text-sm text-muted-foreground font-normal flex items-center gap-1">
                  <MapPin className="size-3.5" /> {lead.city}
                </span>
              </div>
              <div className="text-muted-foreground mt-1">{lead.contact} · <span className="text-sm">{lead.role}</span></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                <Phone className="size-4 text-primary shrink-0" />
                <span className="text-sm font-medium truncate">{lead.phone}</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                <Mail className="size-4 text-primary shrink-0" />
                <span className="text-sm font-medium truncate">{lead.email}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wide font-semibold text-primary mb-1">
                <Info className="size-3" /> Activité
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{lead.summary}</p>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
              <Building2 className="size-3.5" />
              <span>Détecté via LinkedIn Sales Navigator · il y a 2h</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex items-center justify-center gap-6 pt-4">
        <Button
          size="icon"
          variant="outline"
          className="size-14 rounded-full border-2 hover:bg-muted"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
        >
          <Undo2 className="size-5" />
        </Button>

        <Button
          size="icon"
          onClick={() => swipe("left")}
          className="size-20 rounded-full bg-gradient-to-br from-destructive to-[oklch(0.55_0.24_15)] hover:scale-105 transition-transform shadow-[0_10px_30px_-10px_var(--destructive)] text-white"
        >
          <X className="size-8" strokeWidth={3} />
        </Button>

        <Button
          size="icon"
          onClick={() => swipe("right")}
          className="size-20 rounded-full bg-gradient-to-br from-[var(--hot)] to-[oklch(0.6_0.25_20)] hover:scale-105 transition-transform shadow-[0_10px_30px_-10px_var(--hot)] text-white"
        >
          <Flame className="size-8" strokeWidth={2.5} />
        </Button>

        <Button size="icon" variant="outline" className="size-14 rounded-full border-2 hover:bg-muted">
          <Info className="size-5" />
        </Button>
      </div>

      <div className="flex justify-center gap-12 text-xs uppercase tracking-wider font-semibold text-muted-foreground">
        <span>← Froid</span>
        <span>Chaud →</span>
      </div>
    </div>
  );
}
