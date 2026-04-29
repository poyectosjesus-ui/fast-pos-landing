"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import {
  IconHome,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconBuildingStore,
  IconShoppingCart,
  IconMedicineSyrup,
  IconHanger,
  IconTool,
  IconCurrencyDollar,
  IconBook,
  IconHeadset,
  IconInfoCircle,
  IconBrandWhatsapp,
  IconChevronDown,
  IconX,
  IconMenu2,
} from "@tabler/icons-react";

// ─── Nav Data ─────────────────────────────────────────────────────────────────
const navItems = [
  {
    label: "Inicio",
    href: "/",
    icon: IconHome,
  },
  {
    label: "Producto",
    icon: IconDeviceDesktop,
    children: [
      { label: "Caja Offline Local", href: "/producto/punto-de-venta", icon: IconDeviceDesktop, desc: "Cobra sin internet" },
      { label: "App Móvil Cloud", href: "/producto/app-movil", icon: IconDeviceMobile, desc: "Monitorea desde tu celular" },
      { label: "Multi-Sucursal", href: "/producto/multi-sucursal", icon: IconBuildingStore, desc: "Control centralizado" },
    ],
  },
  {
    label: "Soluciones",
    icon: IconShoppingCart,
    children: [
      { label: "Abarrotes", href: "/soluciones/abarrotes", icon: IconShoppingCart, desc: "Velocidad e inventario masivo" },
      { label: "Farmacias", href: "/soluciones/farmacias", icon: IconMedicineSyrup, desc: "Lotes y caducidades" },
      { label: "Boutiques", href: "/soluciones/boutiques", icon: IconHanger, desc: "Tallas, colores y comisiones" },
      { label: "Ferreterías", href: "/soluciones/ferreterias", icon: IconTool, desc: "Unidades y crédito" },
    ],
  },
  {
    label: "Precios",
    href: "/precios",
    icon: IconCurrencyDollar,
  },
  {
    label: "Recursos",
    icon: IconBook,
    children: [
      { label: "Blog de Negocios", href: "/recursos/blog", icon: IconBook, desc: "Guías y estrategias" },
      { label: "Centro de Ayuda", href: "/recursos/centro-ayuda", icon: IconHeadset, desc: "Manuales y soporte" },
    ],
  },
  {
    label: "Compañía",
    href: "/nosotros",
    icon: IconInfoCircle,
  },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function hasActiveChild(children: { href: string }[], pathname: string) {
  return children.some((c) => pathname.startsWith(c.href));
}

// ─── Desktop Mega Menu ────────────────────────────────────────────────────────
function DesktopMenu({ pathname }: { pathname: string }) {
  return (
    <div className="hidden xl:flex items-center gap-1 text-sm font-semibold text-slate-600">
      {navItems.map((item) => {
        if (!item.children) {
          const active = isActive(item.href!, pathname);
          return (
            <Link
              key={item.href}
              href={item.href!}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-colors ${
                active
                  ? "text-blue-700 bg-blue-50 font-bold"
                  : "hover:text-blue-600 hover:bg-slate-100"
              }`}
            >
              <item.icon size={15} />
              {item.label}
              {active && <span className="w-1 h-1 rounded-full bg-blue-500 ml-0.5" />}
            </Link>
          );
        }

        const parentActive = hasActiveChild(item.children, pathname);

        return (
          <div key={item.label} className="relative group">
            <button
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-colors ${
                parentActive
                  ? "text-blue-700 bg-blue-50 font-bold"
                  : "hover:text-blue-600 hover:bg-slate-100"
              }`}
            >
              <item.icon size={15} />
              {item.label}
              <IconChevronDown size={13} className="group-hover:rotate-180 transition-transform duration-200" />
              {parentActive && <span className="w-1 h-1 rounded-full bg-blue-500 ml-0.5" />}
            </button>

            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-2 min-w-[220px] bg-white border border-slate-100 shadow-2xl rounded-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 overflow-hidden z-50 origin-top scale-95 group-hover:scale-100">
              {item.children.map((child) => {
                const childActive = pathname.startsWith(child.href);
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors ${
                      childActive ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${childActive ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"}`}>
                      <child.icon size={16} />
                    </div>
                    <div>
                      <div className={`font-semibold text-sm ${childActive ? "text-blue-700" : "text-slate-800"}`}>{child.label}</div>
                      {"desc" in child && <div className="text-xs text-slate-400 font-normal mt-0.5">{(child as { desc: string }).desc}</div>}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Mobile Drawer ────────────────────────────────────────────────────────────
function MobileDrawer({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] xl:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-xs bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <Link href="/" onClick={onClose} className="text-xl font-black text-slate-900">
            FAST<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">POS</span>
          </Link>
          <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
            <IconX size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
          {navItems.map((item) => {
            if (!item.children) {
              const active = isActive(item.href!, pathname);
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                    active ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <item.icon size={18} className={active ? "text-blue-600" : "text-slate-400"} />
                  {item.label}
                  {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500" />}
                </Link>
              );
            }

            const parentActive = hasActiveChild(item.children, pathname);
            const isExpanded = expanded === item.label;

            return (
              <div key={item.label}>
                <button
                  onClick={() => setExpanded(isExpanded ? null : item.label)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                    parentActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <item.icon size={18} className={parentActive ? "text-blue-600" : "text-slate-400"} />
                  {item.label}
                  {parentActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                  <IconChevronDown
                    size={15}
                    className={`ml-auto transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                {isExpanded && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-3">
                    {item.children.map((child) => {
                      const childActive = pathname.startsWith(child.href);
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                            childActive ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-600 hover:bg-slate-50 font-medium"
                          }`}
                        >
                          <child.icon size={16} className={childActive ? "text-blue-500" : "text-slate-400"} />
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer CTA */}
        <div className="p-4 border-t border-slate-100">
          <a
            href={siteConfig.links.whatsappSalesUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors shadow-md shadow-blue-500/20"
          >
            <IconBrandWhatsapp size={18} />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-5 md:px-8 py-3.5 flex justify-between items-center bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm transition-all">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tight text-slate-900 z-50 shrink-0">
          FAST<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">POS</span>
        </Link>

        {/* Desktop nav */}
        <DesktopMenu pathname={pathname} />

        {/* Desktop CTA */}
        <div className="hidden xl:block">
          <a
            href={siteConfig.links.whatsappSalesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 active:scale-95 transition-all shadow-md shadow-blue-500/20"
          >
            <IconBrandWhatsapp size={16} />
            Contactar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors z-50"
          aria-label="Abrir menú"
        >
          <IconMenu2 size={22} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer open={isOpen} onClose={() => setIsOpen(false)} pathname={pathname} />
    </>
  );
}
