"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const icons: Record<string, React.ReactNode> = {
  Home: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 11l9-7 9 7" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
  Foundations: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  Components: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 7h18" />
      <path d="M7 3v18" />
      <rect x="7" y="7" width="14" height="14" rx="2" />
    </svg>
  ),
  Patterns: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h16" />
      <path d="M4 12h10" />
      <path d="M4 18h16" />
    </svg>
  ),
  QA: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 0 1 5 1c0 2-2.5 2-2.5 4" />
      <path d="M12 17h.01" />
    </svg>
  ),
};

export function Sidebar({
  collapsed,
  onToggle,
  items,
}: {
  collapsed: boolean;
  onToggle: () => void;
  items: NavItem[];
}) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-30 hidden border-r border-border/80 bg-surface lg:flex",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex h-full w-full flex-col px-4 pb-6 pt-5">
        <div className="mb-10 flex justify-center px-3">
          <Image
            src="/logo.png"
            alt="Easy Click"
            width={collapsed ? 36 : 120}
            height={collapsed ? 36 : 32}
            className={cn(
              "h-8 w-auto object-contain",
              collapsed && "h-9 w-9"
            )}
            priority
          />
        </div>
        <nav className="flex-1 space-y-6">
          {items.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
            const hasChildren = item.children?.length;

            return (
              <div key={item.label} className="space-y-2">
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  title={item.label}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-brand-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-muted"
                  )}
                >
                  <span className="text-muted-foreground">{icons[item.label]}</span>
                  <span className={cn("truncate", collapsed && "sr-only")}>
                    {item.label}
                  </span>
                </Link>
                {hasChildren && !collapsed ? (
                  <div className="ml-7 space-y-1 border-l border-border pl-4">
                    {item.children?.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          aria-current={childActive ? "page" : undefined}
                          className={cn(
                            "block rounded-md px-3 py-1 text-xs font-medium transition",
                            childActive
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={onToggle}
          className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground"
        >
          <span className="text-muted-foreground">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d={collapsed ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
            </svg>
          </span>
          <span className={cn(collapsed && "sr-only")}>
            {collapsed ? "Expand" : "Collapse"}
          </span>
        </button>
      </div>
    </aside>
  );
}
