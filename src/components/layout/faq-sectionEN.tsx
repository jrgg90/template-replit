import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "¿Necesito experiencia en comercio internacional para usar Exbordia?",
      answer: "No, Exbordia automatiza todo el proceso por ti. No necesitas conocimientos previos ni experiencia en exportación."
    },
    {
      question: "¿En qué países funciona Exbordia?",
      answer: "Exbordia te ayuda a vender en EE.UU., Canadá, LATAM, Europa y otros mercados con demanda para tu producto."
    },
    {
      question: "¿Cuánto tiempo toma empezar a vender con Exbordia?",
      answer: "Puedes empezar en minutos. Conéctalo a tu tienda y Exbordia comenzará a trabajar de inmediato."
    },
    {
      question: "¿Necesito conocimientos técnicos o de código para usar Exbordia?",
      answer: "No, Exbordia es 100% plug & play. Se integra con tu e-commerce sin configuraciones complicadas"
    },
    {
      question: "¿Qué hace Exbordia diferente a una agencia de marketing o consultoría?",
      answer: "A diferencia de las agencias, Exbordia no solo asesora, sino que actúa en tiempo real. Gracias a su base de datos actualizada y a sus partnerships globales, Exbordia identifica oportunidades, optimiza listings y gestiona regulaciones más rápido y con mayor precisión, permitiéndote expandirte sin fricción."
    },
  ]
  
  export function FAQSectionEN() {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-[#131F42] mb-6 tracking-tight">
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