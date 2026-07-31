"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import { Home, User, FolderGit2, Mail, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <Dock direction="middle">
        <DockIcon>
          <Link href="/">
            <Home className="size-5" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/about">
            <User className="size-5" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/projects">
            <FolderGit2 className="size-5" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/contact">
            <Mail className="size-5" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            size="icon"
            variant="outline"
          >
            {mounted && theme === "dark" ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </Button>
        </DockIcon>
      </Dock>
    </div>
  );
}
