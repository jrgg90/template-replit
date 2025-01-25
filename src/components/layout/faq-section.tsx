import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿No estás listo para enviar todo tu inventario?",
    answer: "Conoce nuestro programa piloto para validar el mercado con un costo y riesgo mínimos. Podrás enviar un lote pequeño y medir la demanda antes de dar el paso definitivo."
  },
  {
    question: "¿Qué pasa si aún no tengo clientes en Estados Unidos?",
    answer: "Te ayudamos a publicar y vender en los principales marketplaces de EE.UU., como Amazon, Etsy o Faire. Es un excelente punto de partida para expandir tu mercado y atraer a tus primeros clientes estadounidenses."
  },
  {
    question: "¿Por qué expandirme a Estados Unidos?",
    answer: "El mercado estadounidense es significativamente más grande que el mexicano; puede representar hasta 180 veces más oportunidades de venta. Llegar a EE.UU. te permite aumentar tus ingresos, diversificar riesgos y posicionar tu marca a nivel internacional."
  },
  {
    question: "Ya he enviado productos a Estados Unidos antes. ¿Puedo contratar solo algunos de sus servicios?",
    answer: "Sí, nos adaptamos a tus necesidades. Si no requieres la gama completa de soluciones, contáctanos y diseñaremos un plan personalizado."
  },
  {
    question: "¿Qué requisitos necesito para empezar con Exbordia?",
    answer: "Debes contar con un inventario mínimo, tener un producto apto para exportación y estar dispuesto a completar la documentación necesaria. Nosotros te guiaremos durante todo el proceso."
  },
  {
    question: "¿Cuánto tiempo tardan en verse resultados al vender en EE.UU.?",
    answer: "Dependerá de tu producto, la demanda y el canal de venta. Sin embargo, en general, nuestros clientes empiezan a ver interés y ventas iniciales dentro de las primeras semanas, especialmente si se publica en marketplaces reconocidos."
  },
  {
    question: "¿Qué tipo de productos son compatibles con sus servicios?",
    answer: "Trabajamos principalmente con productos de tamaño y peso manejables que cumplan con las normativas de exportación. Si tienes dudas sobre la categoría de tu producto, consúltanos sin compromiso."
  },
  {
    question: "¿Exbordia maneja devoluciones y servicio al cliente en EE.UU.?",
    answer: "Ofrecemos apoyo logístico para devoluciones y consultas de tus clientes. Nuestro objetivo es que tu experiencia de venta en EE.UU. sea fluida y sin complicaciones."
  }
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