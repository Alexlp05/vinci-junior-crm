import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Briefcase, Euro, Calendar } from "lucide-react";

export const Route = createFileRoute("/opportunites")({
  head: () => ({ meta: [{ title: "Opportunités — Vinci Junior" }] }),
  component: () => (
    <AppShell>
      <Opps />
    </AppShell>
  ),
});

const opps = [
  { co: "Helios Energy", title: "Audit data parcs photovoltaïques", value: "12 500€", close: "30 mai", proba: 75, owner: "LM" },
  { co: "Atelier Roux", title: "Refonte site e-commerce", value: "8 200€", close: "15 juin", proba: 60, owner: "LM" },
  { co: "FintechOne", title: "Étude UX mobile banking", value: "6 800€", close: "20 juin", proba: 45, owner: "HB" },
];

function Opps() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Opportunités</h1>
        <p className="text-muted-foreground mt-1">Pipeline pondéré : <span className="font-semibold text-primary">18 940€</span></p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {opps.map((o) => (
          <Card key={o.co} className="border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow cursor-pointer">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-start justify-between">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary/20 to-[var(--primary-glow)]/20 grid place-items-center font-bold text-primary">{o.co[0]}</div>
                <Badge className="bg-[var(--hot)]/10 text-[var(--hot)] border-0">{o.proba}%</Badge>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{o.co}</div>
                <div className="font-semibold mt-0.5">{o.title}</div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="inline-flex items-center gap-1.5 font-bold text-foreground"><Euro className="size-4" />{o.value}</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground"><Calendar className="size-4" />{o.close}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <span className="text-xs text-muted-foreground inline-flex items-center gap-1"><Briefcase className="size-3" /> Étape: Négociation</span>
                <Avatar className="size-6"><AvatarFallback className="text-[10px] bg-primary/10 text-primary">{o.owner}</AvatarFallback></Avatar>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
