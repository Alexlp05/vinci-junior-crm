import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserPlus, Settings2, Shield } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Vinci Junior" }] }),
  component: () => (
    <AppShell>
      <Admin />
    </AppShell>
  ),
});

const members = [
  { name: "Léa Martin", email: "lea@vinci-junior.com", role: "Admin", status: "Actif" },
  { name: "Hugo Bernard", email: "hugo@vinci-junior.com", role: "DevCo", status: "Actif" },
  { name: "Sofia Lemaire", email: "sofia@vinci-junior.com", role: "DevCo", status: "Actif" },
  { name: "Thomas Petit", email: "thomas@vinci-junior.com", role: "Chef de projet", status: "Invité" },
];

function Admin() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Administration</h1>
        <p className="text-muted-foreground mt-1">Gère ton équipe, les rôles et les intégrations.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {[
          { icon: Shield, label: "Membres actifs", value: "18" },
          { icon: Settings2, label: "Intégrations", value: "4" },
          { icon: UserPlus, label: "Invitations en attente", value: "2" },
        ].map((s) => (
          <Card key={s.label} className="border-0 shadow-[var(--shadow-card)]">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="size-11 rounded-xl bg-primary/10 grid place-items-center">
                <s.icon className="size-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-0 shadow-[var(--shadow-card)]">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Équipe</CardTitle>
          <Button className="gap-2 bg-gradient-to-r from-primary to-[var(--primary-glow)]"><UserPlus className="size-4" /> Inviter</Button>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow><TableHead>Membre</TableHead><TableHead>Email</TableHead><TableHead>Rôle</TableHead><TableHead>Statut</TableHead></TableRow>
            </TableHeader>
            <TableBody>
              {members.map((m) => (
                <TableRow key={m.email}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8"><AvatarFallback className="text-xs bg-primary/10 text-primary">{m.name.split(" ").map(n=>n[0]).join("")}</AvatarFallback></Avatar>
                      <span className="font-medium">{m.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{m.email}</TableCell>
                  <TableCell><Badge variant="secondary">{m.role}</Badge></TableCell>
                  <TableCell>
                    {m.status === "Actif"
                      ? <Badge className="bg-[var(--success)]/15 text-[var(--success)] border-0">{m.status}</Badge>
                      : <Badge variant="outline">{m.status}</Badge>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
