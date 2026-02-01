"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Header } from "@/components/shell/Header";
import { Sidebar } from "@/components/shell/Sidebar";
import { MobileDrawer } from "@/components/shell/MobileDrawer";

type ContentWidth = "contained" | "full";

const SIDEBAR_STORAGE_KEY = "easyclick-sidebar";

const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Foundations",
    href: "/foundations/colors",
    children: [
      { label: "Colors", href: "/foundations/colors" },
      { label: "Typography", href: "/foundations/typography" },
      { label: "Spacing", href: "/foundations/spacing" },
      { label: "Radius", href: "/foundations/radius" },
      { label: "Elevation", href: "/foundations/elevation" },
    ],
  },
  {
    label: "Patterns",
    href: "/patterns",
  },
  { label: "Components", href: "/components" },
  { label: "QA", href: "/qa" },
];

export function AppShell({
  children,
  contentWidth = "contained",
  minimalRoutes = ["/print", "/receipt"],
}: {
  children: React.ReactNode;
  contentWidth?: ContentWidth;
  minimalRoutes?: string[];
}) {
  const pathname = usePathname();
  const isMinimal = minimalRoutes.some((route) => pathname?.startsWith(route));
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(SIDEBAR_STORAGE_KEY);
    if (stored === "collapsed") {
      setIsCollapsed(true);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      SIDEBAR_STORAGE_KEY,
      isCollapsed ? "collapsed" : "expanded"
    );
  }, [isCollapsed]);

  const mainClass = cn(
    "min-h-screen bg-background text-foreground transition-[padding] duration-200",
    isCollapsed ? "lg:pl-20" : "lg:pl-64"
  );

  const contentClass = cn(
    "w-full px-6 pb-12 pt-6",
    contentWidth === "contained" ? "mx-auto max-w-6xl" : "max-w-full"
  );

  const navItems = useMemo(() => navigation, []);

  if (isMinimal) {
    return <div className="min-h-screen bg-background text-foreground">{children}</div>;
  }

  return (
    <div className={mainClass}>
      <Header onOpenMobile={() => setIsMobileOpen(true)} />
      <Sidebar
        collapsed={isCollapsed}
        onToggle={() => setIsCollapsed((prev) => !prev)}
        items={navItems}
      />
      <MobileDrawer
        open={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        items={navItems}
      />
      <main className={contentClass}>{children}</main>
    </div>
  );
}
