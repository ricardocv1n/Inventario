import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewIngredientPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center">
        <Link href="/ingredients" className="mr-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">Nuevo Ingrediente</h2>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Información del Ingrediente</CardTitle>
          <CardDescription>Ingrese los detalles del nuevo ingrediente para el inventario</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Ej: Arroz" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Categoría</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="protein">Proteína</SelectItem>
                  <SelectItem value="cereal">Cereal</SelectItem>
                  <SelectItem value="condiment">Condimento</SelectItem>
                  <SelectItem value="fat">Grasa</SelectItem>
                  <SelectItem value="sweetener">Endulzante</SelectItem>
                  <SelectItem value="vegetable">Verdura</SelectItem>
                  <SelectItem value="fruit">Fruta</SelectItem>
                  <SelectItem value="dairy">Lácteo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Cantidad Inicial</Label>
              <Input id="amount" type="number" placeholder="Ej: 10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="unit">Unidad de Medida</Label>
              <Select>
                <SelectTrigger id="unit">
                  <SelectValue placeholder="Seleccionar unidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="g">Gramos (g)</SelectItem>
                  <SelectItem value="kg">Kilogramos (kg)</SelectItem>
                  <SelectItem value="l">Litros (L)</SelectItem>
                  <SelectItem value="ml">Mililitros (ml)</SelectItem>
                  <SelectItem value="units">Unidades</SelectItem>
                  <SelectItem value="cups">Tazas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="minStock">Stock Mínimo</Label>
              <Input id="minStock" type="number" placeholder="Ej: 2" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Fecha de Vencimiento</Label>
              <Input id="expiryDate" type="date" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="supplier">Proveedor</Label>
              <Input id="supplier" placeholder="Ej: Distribuidora Alimentos S.A." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cost">Costo</Label>
              <Input id="cost" type="number" placeholder="Ej: 25000" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notas Adicionales</Label>
            <Textarea id="notes" placeholder="Información adicional sobre el ingrediente..." />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancelar</Button>
          <Button>Guardar Ingrediente</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

