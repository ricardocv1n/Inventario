import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowRight } from "lucide-react"

export function LowStockAlert() {
  const lowStockItems = [
    { id: 1, name: "Panela", current: 450, minimum: 500, unit: "g" },
    { id: 2, name: "Huevos", current: 45, minimum: 50, unit: "unidades" },
    { id: 3, name: "Aceite", current: 1.8, minimum: 2, unit: "L" },
    { id: 4, name: "Sal", current: 300, minimum: 500, unit: "g" },
  ]

  return (
    <div className="space-y-4">
      {lowStockItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-muted-foreground">
                {item.current} {item.unit} (Mín: {item.minimum} {item.unit})
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-amber-500 border-amber-500">
              Bajo
            </Badge>
            <Button variant="ghost" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full text-xs mt-2">
        Ver todos los ingredientes
      </Button>
    </div>
  )
}

