import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Plus } from "lucide-react"
import Link from "next/link"

export default function MenusPage() {
  const weekDays = [
    { id: 1, name: "Lunes", date: "08/04/2025" },
    { id: 2, name: "Martes", date: "09/04/2025" },
    { id: 3, name: "Miércoles", date: "10/04/2025" },
    { id: 4, name: "Jueves", date: "11/04/2025" },
    { id: 5, name: "Viernes", date: "12/04/2025" },
    { id: 6, name: "Sábado", date: "13/04/2025" },
    { id: 7, name: "Domingo", date: "14/04/2025" },
  ]

  const menuItems = [
    { day: 1, type: "Desayuno", recipe: "Aguapanela con Huevos", time: "7:00 AM" },
    { day: 1, type: "Almuerzo", recipe: "Arroz con Pollo", time: "12:00 PM" },
    { day: 1, type: "Cena", recipe: "Sopa de Verduras", time: "6:00 PM" },
    { day: 2, type: "Desayuno", recipe: "Café con Pan", time: "7:00 AM" },
    { day: 2, type: "Almuerzo", recipe: "Frijoles con Carne", time: "12:00 PM" },
    { day: 2, type: "Cena", recipe: "Ensalada Mixta", time: "6:00 PM" },
    { day: 3, type: "Desayuno", recipe: "Chocolate con Arepa", time: "7:00 AM" },
    { day: 3, type: "Almuerzo", recipe: "Pasta Boloñesa", time: "12:00 PM" },
    { day: 3, type: "Cena", recipe: "Sándwich de Pollo", time: "6:00 PM" },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Menús Semanales</h2>
        <Link href="/menus/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nuevo Menú
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="1" className="space-y-4">
        <TabsList className="grid grid-cols-7 h-auto">
          {weekDays.map((day) => (
            <TabsTrigger key={day.id} value={day.id.toString()} className="flex flex-col py-2">
              <span>{day.name}</span>
              <span className="text-xs text-muted-foreground">{day.date}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {weekDays.map((day) => (
          <TabsContent key={day.id} value={day.id.toString()} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">
                Menú para {day.name} ({day.date})
              </h3>
              <Button variant="outline" size="sm">
                Editar Menú
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {menuItems
                .filter((item) => item.day === day.id)
                .map((item, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Badge>{item.type}</Badge>
                        <span className="text-sm text-muted-foreground">{item.time}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{item.recipe}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}

              {menuItems.filter((item) => item.day === day.id).length === 0 && (
                <Card className="col-span-3">
                  <CardHeader className="pb-2">
                    <CardTitle>No hay menús programados</CardTitle>
                    <CardDescription>No hay comidas planificadas para este día</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline">
                      <Plus className="mr-2 h-4 w-4" />
                      Agregar Comida
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

