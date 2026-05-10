import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, UserRound, Plus } from "lucide-react";

export function CreateLeadModal({ trigger }: { trigger?: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button className="gap-2 bg-gradient-to-r from-primary to-[var(--primary-glow)] shadow-[var(--shadow-elegant)]">
            <Plus className="size-4" /> Ajouter un lead manuel
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle>Nouveau lead</DialogTitle>
          <DialogDescription>Renseigne les infos du prospect pour l'ajouter au pipeline.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-2">
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Building2 className="size-4" /> Info Entreprise
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="company">Nom de l'entreprise</Label>
                <Input id="company" placeholder="Acme Corp" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="sector">Secteur</Label>
                <Select>
                  <SelectTrigger id="sector"><SelectValue placeholder="Choisir..." /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Tech / SaaS</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="industrie">Industrie</SelectItem>
                    <SelectItem value="conseil">Conseil</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <UserRound className="size-4" /> Info Contact
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="firstname">Prénom</Label>
                <Input id="firstname" placeholder="Camille" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lastname">Nom</Label>
                <Input id="lastname" placeholder="Dupont" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" placeholder="+33 6 12 34 56 78" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="camille@acme.com" />
              </div>
            </div>
          </section>

          <section className="space-y-1.5">
            <Label>Assigné à</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Membre de l'équipe" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="lea">Léa Martin (DevCo)</SelectItem>
                <SelectItem value="hugo">Hugo Bernard</SelectItem>
                <SelectItem value="sofia">Sofia Lemaire</SelectItem>
                <SelectItem value="thomas">Thomas Petit</SelectItem>
              </SelectContent>
            </Select>
          </section>
        </div>

        <DialogFooter>
          <Button variant="outline">Annuler</Button>
          <Button className="bg-gradient-to-r from-primary to-[var(--primary-glow)]">Créer le lead</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
