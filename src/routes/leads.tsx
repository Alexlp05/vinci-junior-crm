import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Upload, Filter, Phone, Mail, MoreHorizontal, KanbanSquare, List } from "lucide-react";
import { CreateLeadModal } from "@/components/CreateLeadModal";

export const Route = createFileRoute("/leads")({
  head: () => ({ meta: [{ title: "Leads — Vinci Junior" }] }),
  component: () => (
    <AppShell>
      <Leads />
    </AppShell>
  ),
});

const leads = [
  { co: "Helios Energy", contact: "Camille Dupont", phone: "+33 6 12 34 56 78", email: "c.dupont@helios.fr", assignee: "LM", status: "Chaud", stage: "opportunite" },
  { co: "Brunet & Co", contact: "Antoine Brunet", phone: "+33 6 22 11 33 44", email: "antoine@brunet.co", assignee: "HB", status: "Qualifié", stage: "qualifie" },
  { co: "Nordix SAS", contact: "Pierre Lambert", phone: "+33 6 99 88 77 66", email: "pierre@nordix.io", assignee: "SL", status: "Nouveau", stage: "nouveau" },
  { co: "Atelier Roux", contact: "Marie Dubois", phone: "+33 6 11 22 33 44", email: "marie@roux.fr", assignee: "LM", status: "Chaud", stage: "opportunite" },
  { co: "GreenLab", contact: "Inès Moreau", phone: "+33 6 55 44 33 22", email: "ines@greenlab.io", assignee: "TP", status: "Nouveau", stage: "nouveau" },
  { co: "FintechOne", contact: "Lucas Berger", phone: "+33 6 44 55 66 77", email: "lucas@ftone.com", assignee: "HB", status: "Qualifié", stage: "qualifie" },
];

const stages = [
  { id: "nouveau", label: "Nouveaux", color: "bg-muted/60" },
  { id: "qualifie", label: "Qualifiés", color: "bg-primary/10" },
  { id: "opportunite", label: "Opportunité", color: "bg-[var(--hot)]/10" },
  { id: "closed", label: "Closés", color: "bg-[var(--success)]/10" },
];

function statusBadge(s: string) {
  if (s === "Chaud") return <Badge className="bg-[var(--hot)] text-white hover:bg-[var(--hot)]">🔥 {s}</Badge>;
  if (s === "Qualifié") return <Badge className="bg-primary/15 text-primary border border-primary/20 hover:bg-primary/15">{s}</Badge>;
  return <Badge variant="secondary">{s}</Badge>;
}

function Leads() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestion des Leads</h1>
          <p className="text-muted-foreground mt-1">{leads.length} prospects dans le pipeline</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="gap-2"><Upload className="size-4" /> Importer CSV</Button>
          <CreateLeadModal />
        </div>
      </div>

      <Tabs defaultValue="list">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="list" className="gap-2"><List className="size-4" /> Liste</TabsTrigger>
            <TabsTrigger value="kanban" className="gap-2"><KanbanSquare className="size-4" /> Pipeline</TabsTrigger>
          </TabsList>
          <Button variant="ghost" size="sm" className="gap-2"><Filter className="size-4" /> Filtres</Button>
        </div>

        <TabsContent value="list" className="mt-4">
          <Card className="border-0 shadow-[var(--shadow-card)]">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Entreprise</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Téléphone</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Assigné à</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((l) => (
                    <TableRow key={l.co} className="hover:bg-muted/40">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-lg bg-gradient-to-br from-primary/20 to-[var(--primary-glow)]/20 grid place-items-center font-bold text-primary text-sm">{l.co[0]}</div>
                          <span className="font-medium">{l.co}</span>
                        </div>
                      </TableCell>
                      <TableCell>{l.contact}</TableCell>
                      <TableCell className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Phone className="size-3" />{l.phone}</span></TableCell>
                      <TableCell className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Mail className="size-3" />{l.email}</span></TableCell>
                      <TableCell>
                        <Avatar className="size-7"><AvatarFallback className="text-xs bg-primary/10 text-primary">{l.assignee}</AvatarFallback></Avatar>
                      </TableCell>
                      <TableCell>{statusBadge(l.status)}</TableCell>
                      <TableCell><Button variant="ghost" size="icon" className="size-8"><MoreHorizontal className="size-4" /></Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="kanban" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stages.map((stage) => {
              const items = leads.filter((l) => l.stage === stage.id);
              return (
                <div key={stage.id} className={`rounded-xl p-3 ${stage.color}`}>
                  <div className="flex items-center justify-between px-2 py-1 mb-2">
                    <div className="font-semibold text-sm">{stage.label}</div>
                    <Badge variant="secondary" className="text-xs">{items.length}</Badge>
                  </div>
                  <div className="space-y-2">
                    {items.map((l) => (
                      <Card key={l.co} className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-3 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-sm">{l.co}</div>
                            {statusBadge(l.status)}
                          </div>
                          <div className="text-xs text-muted-foreground">{l.contact}</div>
                          <div className="flex items-center justify-between pt-1">
                            <Avatar className="size-6"><AvatarFallback className="text-[10px] bg-primary/10 text-primary">{l.assignee}</AvatarFallback></Avatar>
                            <span className="text-[10px] text-muted-foreground">il y a 2j</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
