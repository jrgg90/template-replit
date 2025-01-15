import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div>
        <h2 className="text-2xl font-semibold text-center border p-4 font-mono rounded-md">
          Get started by choosing a template path from the /paths/ folder.
        </h2>
      </div>
      <div>
        <h1 className="text-6xl font-bold text-center">Make anything you imagine! 🪄</h1>
        <h2 className="text-2xl text-center font-light text-gray-500 pt-4">
          This whole page will be replaced when you run your template path.
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border rounded-lg p-6 hover:bg-gray-100 transition-colors">
          <h3 className="text-xl font-semibold">AI Chat App</h3>
          <p className="mt-2 text-sm text-gray-600">
            An intelligent conversational app powered by AI models, featuring real-time responses
            and seamless integration with Next.js and various AI providers.
          </p>
        </div>
        <div className="border rounded-lg p-6 hover:bg-gray-100 transition-colors">
          <h3 className="text-xl font-semibold">AI Image Generation App</h3>
          <p className="mt-2 text-sm text-gray-600">
            Create images from text prompts using AI, powered by the Replicate API and Next.js.
          </p>
        </div>
        <div className="border rounded-lg p-6 hover:bg-gray-100 transition-colors">
          <h3 className="text-xl font-semibold">Social Media App</h3>
          <p className="mt-2 text-sm text-gray-600">
            A feature-rich social platform with user profiles, posts, and interactions using
            Firebase and Next.js.
          </p>
        </div>
        <div className="border rounded-lg p-6 hover:bg-gray-100 transition-colors">
          <h3 className="text-xl font-semibold">Voice Notes App</h3>
          <p className="mt-2 text-sm text-gray-600">
            A voice-based note-taking app with real-time transcription using Deepgram API, 
            Firebase integration for storage, and a clean, simple interface built with Next.js.
          </p>
        </div>
      </div>

      <div className="w-full max-w-3xl mt-16">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-medium">
              What is Exbordia?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Exbordia is a cutting-edge development platform that combines the power of AI
              with modern web technologies. It provides developers with pre-built templates
              and tools to rapidly create sophisticated applications without starting from
              scratch.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-medium">
              How does it work?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Simply choose from our selection of template paths, each designed for specific
              use cases like AI Chat, Image Generation, Social Media, or Voice Notes.
              Our templates come with pre-configured APIs, authentication, and UI components,
              allowing you to focus on building your unique features.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-medium">
              What are the pricing plans?
            </AccordionTrigger>
            <AccordionContent className="text-lg leading-relaxed">
              We offer flexible pricing tiers to suit different needs:
              <br />• Free Tier: Perfect for hobbyists and learning
              <br />• Pro Tier: For professional developers and small teams
              <br />• Enterprise: Custom solutions for large organizations
              <br />All tiers include access to our core templates and regular updates.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}