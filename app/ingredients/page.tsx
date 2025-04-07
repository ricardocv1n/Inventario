import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Search } from "lucide-react"
import Link from "next/link"

export default function IngredientsPage() {
  const ingredients = [
    {
      id: 1,
      name: "Panela",
      unit: "g",
      currentAmount: 5000,
      minStock: 500,
      expiryDate: "20/04/2025",
      category: "Endulzante",
      status: "normal",
    },
    {
      id: 2,
      name: "Huevos",
      unit: "unidades",
      currentAmount: 200,
      minStock: 50,
      expiryDate: "18/04/2025",
      category: "Proteína",
      status: "normal",
    },
    {
      id: 3,
      name: "Arroz",
      unit: "kg",
      currentAmount: 25,
      minStock: 5,
      expiryDate: "30/12/2025",
      category: "Cereal",
      status: "normal",
    },
    {
      id: 4,
      name: "Aceite",
      unit: "L",
      currentAmount: 1.8,
      minStock: 2,
      expiryDate: "15/08/2025",
      category: "Grasa",
      status: "low",
    },
    {
      id: 5,
      name: "Sal",
      unit: "g",
      currentAmount: 300,
      minStock: 500,
      expiryDate: "01/01/2026",
      category: "Condimento",
      status: "low",
    },
    {
      id: 6,
      name: "Pollo",
      unit: "kg",
      currentAmount: 15,
      minStock: 5,
      expiryDate: "12/04/2025",
      category: "Proteína",
      status: "expiring",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Ingredientes</h2>
        <Link href="/ingredients/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nuevo Ingrediente
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Card className="flex-1">
          <CardHeader className="pb-3">
            <CardTitle>Filtros</CardTitle>
            <CardDescription>Busca y filtra los ingredientes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar ingrediente..." className="pl-8" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="protein">Proteína</SelectItem>
                  <SelectItem value="cereal">Cereal</SelectItem>
                  <SelectItem value="condiment">Condimento</SelectItem>
                  <SelectItem value="fat">Grasa</SelectItem>
                  <SelectItem value="sweetener">Endulzante</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="low">Stock Bajo</SelectItem>
                  <SelectItem value="expiring">Por Vencer</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Aplicar Filtros</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Lista de Ingredientes</CardTitle>
          <CardDescription>Total: {ingredients.length} ingredientes</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead className="text-right">Cantidad Actual</TableHead>
                <TableHead className="text-right">Stock Mínimo</TableHead>
                <TableHead>Fecha Vencimiento</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ingredients.map((ingredient) => (
                <TableRow key={ingredient.id}>
                  <TableCell className="font-medium">{ingredient.name}</TableCell>
                  <TableCell>{ingredient.category}</TableCell>
                  <TableCell className="text-right">
                    {ingredient.currentAmount} {ingredient.unit}
                  </TableCell>
                  <TableCell className="text-right">
                    {ingredient.minStock} {ingredient.unit}
                  </TableCell>
                  <TableCell>{ingredient.expiryDate}</TableCell>
                  <TableCell>
                    {ingredient.status === "normal" && (
                      <Badge variant="outline" className="text-green-500 border-green-500">
                        Normal
                      </Badge>
                    )}
                    {ingredient.status === "low" && (
                      <Badge variant="outline" className="text-amber-500 border-amber-500">
                        Stock Bajo
                      </Badge>
                    )}
                    {ingredient.status === "expiring" && (
                      <Badge variant="outline" className="text-red-500 border-red-500">
                        Por Vencer
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
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

