import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Plus, Search } from "lucide-react"
import Link from "next/link"

export default function RecipesPage() {
  const recipes = [
    {
      id: 1,
      name: "Aguapanela",
      category: "Bebida",
      ingredients: 2,
      lastUsed: "08/04/2025",
      status: "active",
    },
    {
      id: 2,
      name: "Huevos Revueltos",
      category: "Desayuno",
      ingredients: 3,
      lastUsed: "08/04/2025",
      status: "active",
    },
    {
      id: 3,
      name: "Arroz con Pollo",
      category: "Almuerzo",
      ingredients: 8,
      lastUsed: "05/04/2025",
      status: "active",
    },
    {
      id: 4,
      name: "Sopa de Verduras",
      category: "Cena",
      ingredients: 6,
      lastUsed: "07/04/2025",
      status: "active",
    },
    {
      id: 5,
      name: "Ensalada Mixta",
      category: "Acompañamiento",
      ingredients: 5,
      lastUsed: "06/04/2025",
      status: "active",
    },
    {
      id: 6,
      name: "Pasta Boloñesa",
      category: "Almuerzo",
      ingredients: 7,
      lastUsed: "03/04/2025",
      status: "inactive",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Recetas</h2>
        <Link href="/recipes/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nueva Receta
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Card className="flex-1">
          <CardHeader className="pb-3">
            <CardTitle>Buscar Recetas</CardTitle>
            <CardDescription>Encuentra recetas por nombre o categoría</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar receta..." className="pl-8" />
              </div>
              <Button variant="outline">Buscar</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Lista de Recetas</CardTitle>
          <CardDescription>Total: {recipes.length} recetas</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead className="text-center">Ingredientes</TableHead>
                <TableHead>Último Uso</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recipes.map((recipe) => (
                <TableRow key={recipe.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <ChefHat className="h-4 w-4 text-muted-foreground" />
                      {recipe.name}
                    </div>
                  </TableCell>
                  <TableCell>{recipe.category}</TableCell>
                  <TableCell className="text-center">{recipe.ingredients}</TableCell>
                  <TableCell>{recipe.lastUsed}</TableCell>
                  <TableCell>
                    {recipe.status === "active" ? (
                      <Badge variant="outline" className="text-green-500 border-green-500">
                        Activa
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-gray-500 border-gray-500">
                        Inactiva
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        Ver
                      </Button>
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

