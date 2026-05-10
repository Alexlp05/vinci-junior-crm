import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TrendingUp, Flame, Target, Trophy, ArrowUpRight, Phone } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Vinci Junior" }] }),
  component: () => (
    <AppShell>
      <Dashboard />
    </AppShell>
  ),
});

const stats = [
  { label: "Leads chauds", value: "27", trend: "+12%", icon: Flame, color: "text-[var(--hot)]" },
  { label: "Opportunités", value: "14", trend: "+4", icon: Target, color: "text-primary" },
  { label: "Taux conversion", value: "32%", trend: "+5%", icon: TrendingUp, color: "text-[var(--success)]" },
  { label: "CA pipeline", value: "48k€", trend: "+18%", icon: Trophy, color: "text-[var(--warning)]" },
];

const leaderboard = [
  { name: "Léa Martin", points: 1240, leads: 42 },
  { name: "Hugo Bernard", points: 980, leads: 31 },
  { name: "Sofia Lemaire", points: 870, leads: 28 },
  { name: "Thomas Petit", points: 640, leads: 19 },
];

function Dashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="text-sm text-muted-foreground">Lundi 11 mai 2026</div>
          <h1 className="text-3xl font-bold tracking-tight">Salut Léa 👋</h1>
          <p className="text-muted-foreground mt-1">Voici ton activité DevCo cette semaine.</p>
        </div>
        <Link to="/prospection">
          <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-[var(--primary-glow)] shadow-[var(--shadow-elegant)]">
            <Flame className="size-4" /> Lancer une session prospection
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="overflow-hidden border-0 shadow-[var(--shadow-card)] bg-[var(--gradient-card)]">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <s.icon className={`size-5 ${s.color}`} />
                <Badge variant="secondary" className="text-xs">{s.trend}</Badge>
              </div>
              <div className="mt-3 text-3xl font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-0 shadow-[var(--shadow-card)]">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Pipeline cette semaine</CardTitle>
            <Button variant="ghost" size="sm" className="gap-1">Voir tout <ArrowUpRight className="size-4" /></Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "Nouveaux", count: 32, color: "bg-muted" },
                { label: "Qualifiés", count: 18, color: "bg-primary/15" },
                { label: "Opportunité", count: 9, color: "bg-[var(--hot)]/15" },
                { label: "Closés", count: 4, color: "bg-[var(--success)]/15" },
              ].map((stage) => (
                <div key={stage.label} className={`rounded-xl p-4 ${stage.color}`}>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{stage.label}</div>
                  <div className="text-2xl font-bold mt-1">{stage.count}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {[
                { co: "Atelier Roux", contact: "Marie Dubois", phone: "+33 6 12 34 56 78", status: "Chaud" },
                { co: "Nordix SAS", contact: "Pierre Lambert", phone: "+33 6 87 65 43 21", status: "Qualifié" },
                { co: "GreenLab", contact: "Inès Moreau", phone: "+33 6 55 44 33 22", status: "Nouveau" },
              ].map((l) => (
                <div key={l.co} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="size-10 rounded-lg bg-gradient-to-br from-primary/20 to-[var(--primary-glow)]/20 grid place-items-center font-bold text-primary text-sm">
                    {l.co[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{l.co}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2"><Phone className="size-3" />{l.phone}</div>
                  </div>
                  <Badge variant={l.status === "Chaud" ? "destructive" : "secondary"}>{l.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Trophy className="size-5 text-[var(--warning)]" /> Classement DevCo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {leaderboard.map((u, i) => (
              <div key={u.name} className="flex items-center gap-3 p-2 rounded-lg">
                <div className={`size-7 rounded-full grid place-items-center text-xs font-bold ${i===0 ? "bg-gradient-to-br from-[var(--warning)] to-[var(--hot)] text-white" : "bg-muted text-muted-foreground"}`}>
                  {i+1}
                </div>
                <Avatar className="size-9"><AvatarFallback className="text-xs bg-primary/10 text-primary">{u.name.split(" ").map(n=>n[0]).join("")}</AvatarFallback></Avatar>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{u.name}</div>
                  <div className="text-xs text-muted-foreground">{u.leads} leads</div>
                </div>
                <div className="text-sm font-bold text-primary">{u.points}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
