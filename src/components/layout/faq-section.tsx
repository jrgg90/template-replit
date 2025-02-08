import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Necesito experiencia en comercio internacional para usar Exbordia?",
    answer: "No. Nuestra plataforma te guía paso a paso y automatiza procesos clave como regulaciones, impuestos y logística. Tú solo te enfocas en hacer crecer tu marca."
  },
  {
    question: " ¿Cómo me ayuda la inteligencia artificial en mi expansión?",
    answer: "Nuestra AI te da recomendaciones accionables: qué países tienen mayor demanda, cómo ajustar precios, qué productos tienen más potencial y cómo optimizar tu estrategia global."
  },
  {
    question: "¿Cómo funciona la logística y el fulfillment con Exbordia?",
    answer: "Nos conectamos con proveedores como Amazon FBA, ShipBob y 3PLs globales para que tus productos lleguen a clientes en cualquier parte del mundo sin complicaciones."
  },
  {
    question: "Ya vendo en EE.UU. con Shopify, ¿en qué me ayuda Exbordia?",
    answer: "Usas una gran infraestructura, pero eso no te asegura ventas. Exbordia te ayuda con lo más importante: atraer más clientes, generar tracción real y escalar tu marca en nuevos mercados."
  },
  {
    question: "¿Qué hace Exbordia diferente a una agencia de marketing o consultoría?",
    answer: "No somos una agencia, somos una plataforma SaaS con AI que automatiza y optimiza tu expansión global. No damos solo asesoría, te damos herramientas accionables para crecer."
  },
  {
    question: "¿Puedo usar Exbordia sin cambiar mi operación actual?",
    answer: "Sí. Exbordia se integra con Shopify, Amazon, Faire y otros marketplaces para mejorar lo que ya tienes, sin alterar tu operación. Solo agrega crecimiento y nuevas oportunidades."
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-normal text-[#131F42] mb-6">
            Preguntas <span className="font-light">Frecuentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-gray-50/50"
            >
              <AccordionTrigger className="text-left text-base font-medium text-[#131F42] py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
} 