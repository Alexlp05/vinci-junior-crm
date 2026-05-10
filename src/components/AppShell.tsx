import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Flame,
  Users,
  Briefcase,
  FolderKanban,
  Shield,
  Search,
  Plus,
  Bell,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/prospection", label: "Prospection", icon: Flame, hot: true },
  { to: "/leads", label: "Leads", icon: Users },
  { to: "/opportunites", label: "Opportunités", icon: Briefcase },
  { to: "/etudes", label: "Études", icon: FolderKanban, soon: true },
  { to: "/admin", label: "Admin", icon: Shield },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground">
        <div className="px-6 py-6 flex items-center gap-3 border-b border-sidebar-border">
          <div className="size-9 rounded-xl bg-gradient-to-br from-primary to-[var(--primary-glow)] grid place-items-center font-black text-primary-foreground shadow-[var(--shadow-glow)]">
            V
          </div>
          <div>
            <div className="font-bold leading-tight">Vinci Junior</div>
            <div className="text-xs text-sidebar-foreground/60">CRM · ERP</div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                    : "text-sidebar-foreground/75 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                }`}
              >
                <Icon className="size-4" />
                <span className="flex-1">{item.label}</span>
                {item.hot && <Flame className="size-3.5 text-[var(--hot)]" />}
                {item.soon && (
                  <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-sidebar-primary/20 text-sidebar-primary-foreground">
                    Soon
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 m-3 rounded-xl bg-gradient-to-br from-primary/30 to-transparent border border-sidebar-border">
          <div className="text-xs text-sidebar-foreground/70">Saison DevCo</div>
          <div className="text-2xl font-bold mt-1">73<span className="text-sm font-normal text-sidebar-foreground/60"> / 100 leads</span></div>
          <div className="mt-2 h-1.5 rounded-full bg-sidebar-border overflow-hidden">
            <div className="h-full w-[73%] bg-gradient-to-r from-[var(--primary-glow)] to-[var(--hot)]" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b bg-card/80 backdrop-blur sticky top-0 z-30 flex items-center gap-4 px-6">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher entreprises, leads, contacts..."
              className="pl-10 bg-muted/50 border-transparent focus-visible:bg-card"
            />
          </div>
          <Button size="sm" className="gap-2 bg-gradient-to-r from-primary to-[var(--primary-glow)] shadow-[var(--shadow-elegant)]">
            <Plus className="size-4" /> Ajouter
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="size-5" />
            <span className="absolute top-2 right-2 size-2 rounded-full bg-[var(--hot)]" />
          </Button>
          <div className="flex items-center gap-3 pl-3 border-l">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-semibold leading-tight">Léa Martin</div>
              <div className="text-xs text-muted-foreground">Resp. DevCo</div>
            </div>
            <Avatar className="ring-2 ring-primary/20">
              <AvatarImage src="https://lh3.googleusercontent.com/a/default-user=s96-c" />
              <AvatarFallback className="bg-gradient-to-br from-primary to-[var(--primary-glow)] text-primary-foreground font-semibold">LM</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-8 animate-fade-in">{children}</main>
      </div>
    </div>
  );
}

export { Badge };
