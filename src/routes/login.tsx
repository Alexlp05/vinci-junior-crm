import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Connexion — Vinci Junior CRM" },
      { name: "description", content: "Connectez-vous au CRM de Vinci Junior avec votre compte Google." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="hidden lg:flex relative overflow-hidden bg-[var(--gradient-hero)] text-primary-foreground p-12 flex-col justify-between">
        <div className="absolute -top-20 -right-20 size-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-96 rounded-full bg-[var(--primary-glow)]/30 blur-3xl" />
        <div className="relative flex items-center gap-3">
          <div className="size-11 rounded-xl bg-white/15 backdrop-blur grid place-items-center font-black">V</div>
          <span className="font-bold text-lg">Vinci Junior</span>
        </div>
        <div className="relative space-y-4 max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs font-medium">
            <Sparkles className="size-3.5" /> CRM · ERP nouvelle génération
          </div>
          <h1 className="text-4xl font-bold leading-tight">Prospecte plus vite. Closes plus de missions.</h1>
          <p className="text-primary-foreground/80">Un cockpit pensé pour les Junior-Entreprises : pipeline visuel, prospection gamifiée, et suivi des études.</p>
        </div>
        <div className="relative text-xs text-primary-foreground/60">© 2026 Vinci Junior</div>
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm space-y-8 animate-fade-in">
          <div className="text-center space-y-2">
            <div className="inline-flex size-14 rounded-2xl bg-gradient-to-br from-primary to-[var(--primary-glow)] grid place-items-center font-black text-primary-foreground text-xl shadow-[var(--shadow-elegant)]">V</div>
            <h2 className="text-2xl font-bold">Bon retour parmi nous</h2>
            <p className="text-sm text-muted-foreground">Connecte-toi avec ton compte Vinci pour accéder au CRM.</p>
          </div>

          <Link to="/dashboard">
            <Button variant="outline" size="lg" className="w-full gap-3 h-12 font-medium border-2 hover:bg-muted/50">
              <GoogleIcon />
              Se connecter avec Google
            </Button>
          </Link>

          <p className="text-xs text-center text-muted-foreground">
            Réservé aux membres de Vinci Junior. En continuant, tu acceptes nos conditions d'utilisation.
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}
