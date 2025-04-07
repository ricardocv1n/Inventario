import Link from "next/link"
import { ChefHat } from "lucide-react"

export function MainNav() {
  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <ChefHat className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">FoodInventory</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link href="/ingredients" className="transition-colors hover:text-foreground/80 text-foreground/60">
          Ingredientes
        </Link>
        <Link href="/recipes" className="transition-colors hover:text-foreground/80 text-foreground/60">
          Recetas
        </Link>
        <Link href="/menus" className="transition-colors hover:text-foreground/80 text-foreground/60">
          Menús
        </Link>
        <Link href="/reports" className="transition-colors hover:text-foreground/80 text-foreground/60">
          Reportes
        </Link>
      </nav>
    </div>
  )
}

