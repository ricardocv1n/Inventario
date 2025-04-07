import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: { name: "Carlos Pérez", avatar: "CP" },
      action: "agregó",
      item: "Arroz",
      quantity: "10 kg",
      time: "hace 10 minutos",
      type: "entrada",
    },
    {
      id: 2,
      user: { name: "María López", avatar: "ML" },
      action: "utilizó",
      item: "Huevos",
      quantity: "24 unidades",
      time: "hace 30 minutos",
      type: "salida",
    },
    {
      id: 3,
      user: { name: "Juan Gómez", avatar: "JG" },
      action: "actualizó",
      item: "Panela",
      quantity: "2 kg",
      time: "hace 1 hora",
      type: "ajuste",
    },
    {
      id: 4,
      user: { name: "Ana Martínez", avatar: "AM" },
      action: "registró",
      item: "Menú Semanal",
      quantity: "",
      time: "hace 2 horas",
      type: "sistema",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt={activity.user.name} />
            <AvatarFallback>{activity.user.avatar}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user.name} {activity.action} {activity.item}
              {activity.quantity && <span> ({activity.quantity})</span>}
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
          <Badge
            variant="outline"
            className={
              activity.type === "entrada"
                ? "text-green-500 border-green-500"
                : activity.type === "salida"
                  ? "text-red-500 border-red-500"
                  : activity.type === "ajuste"
                    ? "text-blue-500 border-blue-500"
                    : "text-gray-500 border-gray-500"
            }
          >
            {activity.type}
          </Badge>
        </div>
      ))}
    </div>
  )
}

