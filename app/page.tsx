import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, ChefHat, LineChart, Package } from "lucide-react"
import Link from "next/link"
import { InventorySummary } from "@/components/inventory-summary"
import { LowStockAlert } from "@/components/low-stock-alert"
import { RecentActivity } from "@/components/recent-activity"
import { UpcomingMenus } from "@/components/upcoming-menus"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <Link href="/ingredients/new">
            <Button className="ml-auto">Agregar Ingrediente</Button>
          </Link>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="analytics">Análisis</TabsTrigger>
            <TabsTrigger value="reports">Reportes</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Ingredientes</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">245</div>
                  <p className="text-xs text-muted-foreground">+3 desde la última semana</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Recetas Activas</CardTitle>
                  <ChefHat className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68</div>
                  <p className="text-xs text-muted-foreground">+12 desde el mes pasado</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Alertas de Stock</CardTitle>
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground text-red-500">Ingredientes por debajo del mínimo</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Consumo Semanal</CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,580</div>
                  <p className="text-xs text-muted-foreground">-2% comparado con la semana anterior</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Resumen de Inventario</CardTitle>
                  <CardDescription>Uso de ingredientes en los últimos 30 días</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <InventorySummary />
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Alertas de Stock Bajo</CardTitle>
                  <CardDescription>Ingredientes que requieren reposición</CardDescription>
                </CardHeader>
                <CardContent>
                  <LowStockAlert />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Actividad Reciente</CardTitle>
                  <CardDescription>Últimos movimientos de inventario</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentActivity />
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Menús Próximos</CardTitle>
                  <CardDescription>Planificación de los próximos 7 días</CardDescription>
                </CardHeader>
                <CardContent>
                  <UpcomingMenus />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Análisis de Consumo</CardTitle>
                <CardDescription>Tendencias de uso de ingredientes por categoría</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[400px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Gráficos de análisis de consumo</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reportes Disponibles</CardTitle>
                <CardDescription>Genere reportes detallados del sistema</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Button variant="outline" className="h-24 flex flex-col gap-1">
                    <span>Consumo de Ingredientes</span>
                    <span className="text-xs text-muted-foreground">Por día o semana</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col gap-1">
                    <span>Historial de Costos</span>
                    <span className="text-xs text-muted-foreground">Gastos por período</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col gap-1">
                    <span>Análisis de Desperdicio</span>
                    <span className="text-xs text-muted-foreground">Stock teórico vs. real</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

