"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Users,
  Briefcase,
  BookOpen,
  MessageSquare,
  Menu,
  X,
  ChevronDown,
  Landmark, // Added for Financial Management
  Bus, // Added for Transport Management
  Library, // Added for Resource Management
  BarChart3, // Added for Analytics and Reports
  ShieldCheck, // Added for Security
  Settings, // Added for Management
} from "lucide-react";
import { cn } from "@/lib/utils";
// Removed: UserCheck, ClipboardList
import Logo from "./logo";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description: "Manage student profiles, enrollment, and academic records.",
    href: "/admin/students",
  },
  {
    icon: Briefcase,
    title: "Staff Management",
    description: "Oversee staff profiles, roles, and assignments.",
    href: "/admin/staff",
  },
  {
    icon: BookOpen,
    title: "Academic Management",
    description: "Organize classes, subjects, and academic calendars.",
    href: "/admin/academics",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Facilitate communication between parents, teachers, and students.",
    href: "/communication",
  },
  {
    icon: Landmark,
    title: "Financial Management",
    description: "Track fees, manage payroll, and generate financial reports.",
    href: "/admin/finance",
  },
  {
    icon: Bus,
    title: "Transport Management",
    description: "Manage bus routes, student transport, and vehicle tracking.",
    href: "/admin/transport",
  },
  {
    icon: Library,
    title: "Resource Management",
    description: "Oversee library, inventory, and other school resources.",
    href: "/admin/resources",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Generate insightful reports and analytics on school data.",
    href: "/admin/reports",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Ensure data privacy and secure access controls.",
    href: "/admin/security",
  }
 
];

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
           <Logo/>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-4"> {/* Adjusted width for 3 columns */}
                      <div className="flex items-center justify-between mb-4 pb-2 border-b">
                        <h4 className="text-lg font-medium">Features</h4>
                        <Link
                          href="/features"
                          className="text-sm text-blue-500 hover:underline"
                        >
                          View all
                        </Link>
                      </div>
                      <div className="grid gap-4 md:grid-cols-3"> {/* Changed to 3 columns */}
                        {features.map((feature, index) => (
                          <NavigationMenuLink asChild key={index}>
                            <Link
                              href={feature.href} // Using the href from the feature object
                              className="block group"
                            >
                              <div className="flex items-start gap-4">
                                <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                                  <feature.icon className="h-6 w-6 text-blue-500" />
                                </div>
                                <div>
                                  <h5 className="font-medium mb-1 group-hover:text-blue-500">
                                    {feature.title}
                                  </h5>
                                  <p className="text-sm text-muted-foreground">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium mb-1">Get started</h4>
                            <p className="text-sm text-muted-foreground">
                              Their food sources have decreased, and their
                              numbers
                            </p>
                          </div>
                         
                            <Button variant="secondary" asChild>
                               <Link href="/contact-us">Get started</Link>
                            </Button>
                          
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/pricing">Pricing</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/how-it-works">How it Works</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Log in</Button>
            <Button>Sign up</Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full p-0">
              <SheetHeader className="border-b p-4">
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col py-4">
                <Link
                  href="/"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <button
                  className="flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left"
                  onClick={() => setShowFeatures(!showFeatures)}
                >
                  Features
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      showFeatures && "rotate-180"
                    )}
                  />
                </button>
                {showFeatures && (
                  <div className="px-4 py-2 space-y-4">
                    {features.map((feature, index) => (
                      <Link
                        key={index}
                        href={feature.href} // Using the href from the feature object
                        className="flex items-start gap-4 py-2"
                        onClick={() => setOpen(false)}
                      >
                        <div className="p-2 bg-muted rounded-md">
                          <feature.icon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">{feature.title}</h5>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href="/pricing" // Changed from /learn
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Pricing {/* Changed from Learn */}
                </Link>
                <Link
                  href="/how-it-works" // Changed from /academy
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  How it Works {/* Changed from Academy */}
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
                <div className="grid gap-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    Log in
                  </Button>
                  <Button className="w-full" onClick={() => setOpen(false)}>
                    Sign up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}