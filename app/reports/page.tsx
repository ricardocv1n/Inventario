import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, FileText, LineChart, Package, PieChart, ShoppingCart } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Reportes y Análisis</h2>
      </div>

      <Tabs defaultValue="inventory" className="space-y-4">
        <TabsList>
          <TabsTrigger value="inventory">Inventario</TabsTrigger>
          <TabsTrigger value="consumption">Consumo</TabsTrigger>
          <TabsTrigger value="costs">Costos</TabsTrigger>
          <TabsTrigger value="waste">Desperdicio</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Reporte de Stock Actual</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Visualiza el estado actual de todos los ingredientes en inventario
                </p>
                <Button className="w-full">Generar Reporte</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Alertas de Stock Bajo</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Lista de ingredientes por debajo del stock mínimo</p>
                <Button className="w-full">Generar Reporte</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ingredientes por Vencer</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Ingredientes próximos a su fecha de vencimiento</p>
                <Button className="w-full">Generar Reporte</Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Movimientos de Inventario</CardTitle>
              <CardDescription>Historial de entradas y salidas de ingredientes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <div className="text-center">
                  <BarChart className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-muted-foreground">Selecciona un período para visualizar los movimientos</p>
                  <Button className="mt-4">Generar Gráfico</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consumption" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Consumo Diario</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Detalle del consumo de ingredientes por día</p>
                <Button className="w-full">Generar Reporte</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Consumo Semanal</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Resumen del consumo de ingredientes por semana</p>
                <Button className="w-full">Generar Reporte</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Consumo por Categoría</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Distribución del consumo por tipo de ingrediente</p>
                <Button className="w-full">Generar Reporte</Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tendencias de Consumo</CardTitle>
              <CardDescription>Análisis de patrones de consumo a lo largo del tiempo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <div className="text-center">
                  <LineChart className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-muted-foreground">Selecciona un período para visualizar las tendencias</p>
                  <Button className="mt-4">Generar Gráfico</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="costs" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Costos por Comida</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Desglose de costos por cada comida preparada</p>
                <Button className="w-full">Generar Reporte</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Costos Semanales</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Resumen de gastos en ingredientes por semana</p>
                <Button className="w-full">Generar Reporte</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Costos por Proveedor</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Análisis de gastos agrupados por proveedor</p>
                <Button className="w-full">Generar Reporte</Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Evolución de Costos</CardTitle>
              <CardDescription>Análisis de la evolución de costos a lo largo del tiempo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <div className="text-center">
                  <BarChart className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-muted-foreground">Selecciona un período para visualizar la evolución</p>
                  <Button className="mt-4">Generar Gráfico</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="waste" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análisis de Desperdicio</CardTitle>
              <CardDescription>Comparación entre stock teórico y real para identificar desperdicios</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <div className="text-center">
                  <PieChart className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-muted-foreground">Selecciona un período para analizar el desperdicio</p>
                  <Button className="mt-4">Generar Análisis</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Ingredientes con Mayor Desperdicio</CardTitle>
                <CardDescription>Identificación de ingredientes con mayor índice de pérdida</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border rounded-md">
                  <div className="text-center">
                    <BarChart className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">Sin datos disponibles</p>
                    <Button className="mt-4" variant="outline">
                      Generar Reporte
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Causas de Desperdicio</CardTitle>
                <CardDescription>Análisis de las principales causas de pérdida de ingredientes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border rounded-md">
                  <div className="text-center">
                    <PieChart className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">Sin datos disponibles</p>
                    <Button className="mt-4" variant="outline">
                      Generar Reporte
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

