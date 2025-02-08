import { cn } from "@/lib/utils";
import {
  IconShoppingCart,
  IconChartBar,
  IconBuildingStore,
  IconTruck,
  IconSettings,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Sincroniza Tu Tienda",
      description: "Conecta tu e-commerce (Shopify, WooCommerce, Wix) con Exbordia en minutos.",
      icon: <IconShoppingCart className="w-8 h-8" />,
    },
    {
      title: "Análisis de Mercados",
      description: "Exbordia te ayuda a identificar los mercados clave y las oportunidades de expansión.",
      icon: <IconChartBar className="w-8 h-8" />,
    },
    {
      title: "Identifica las mejores plataformas",
      description: "Exbordia te ayuda a identificar las mejores plataformas digitales para tu negocio.",
      icon: <IconBuildingStore className="w-8 h-8" />,
    },
    {
      title: "Asistencia en Exportación",
      description: "Nuestro IA te ayuda a cumplir con las regulaciones y certificaciones necesarias para exportar.",
      icon: <IconTruck className="w-8 h-8" />,
    },
    {
      title: "Gestiona desde Exbordia",
      description: "Gestiona tus ventas, inventario y logística desde un solo lugar.",
      icon: <IconSettings className="w-8 h-8" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-6xl mx-auto gap-0">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature",
        (index === 0 || index === 3) && "lg:border-l",
        index < 3 && "lg:border-b",
        "border-gray-200"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
      
      <div className="mb-6 relative z-10 px-10 text-[#131F42]">
        {icon}
      </div>
      <div className="text-lg font-medium mb-3 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-200 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#131F42]">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
}; 