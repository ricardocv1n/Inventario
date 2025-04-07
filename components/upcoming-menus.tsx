import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"

export function UpcomingMenus() {
  const menus = [
    {
      id: 1,
      date: "08/04/2025",
      day: "Lunes",
      meals: [
        { type: "Desayuno", name: "Aguapanela con Huevos" },
        { type: "Almuerzo", name: "Arroz con Pollo" },
        { type: "Cena", name: "Sopa de Verduras" },
      ],
    },
    {
      id: 2,
      date: "09/04/2025",
      day: "Martes",
      meals: [
        { type: "Desayuno", name: "Café con Pan" },
        { type: "Almuerzo", name: "Frijoles con Carne" },
        { type: "Cena", name: "Ensalada Mixta" },
      ],
    },
    {
      id: 3,
      date: "10/04/2025",
      day: "Miércoles",
      meals: [
        { type: "Desayuno", name: "Chocolate con Arepa" },
        { type: "Almuerzo", name: "Pasta Boloñesa" },
        { type: "Cena", name: "Sándwich de Pollo" },
      ],
    },
  ]

  return (
    <div className="space-y-4">
      {menus.map((menu) => (
        <div key={menu.id} className="border rounded-md p-3">
          <div className="flex items-center gap-2 mb-2">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">
              {menu.day} - {menu.date}
            </span>
          </div>
          <div className="grid gap-1">
            {menu.meals.map((meal, index) => (
              <div key={index} className="flex items-center justify-between">
                <Badge variant="outline">{meal.type}</Badge>
                <span className="text-sm">{meal.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

