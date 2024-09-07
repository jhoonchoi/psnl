import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroCarousel } from '@/components/hero-carousel'
import AppLayout from '@/components/app-layout'

export default function Home() {
  return (
    <AppLayout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">
          Psychopathology & Social Neuroscience Lab
        </h1>
        <p className="text-xl text-center mb-8">
          Exploring the intersections of psychopathology and social neuroscience to advance our understanding of mental health and social behavior.
        </p>
        <div className="flex justify-center space-x-4 mb-16">
          <Button asChild>
            <Link href="/research">Our Research</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/publications">Publications</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/people">Our People</Link>
          </Button>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Highlighted Works</h2>
        <HeroCarousel />
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">About Our Lab</h2>
        <p className="text-lg mb-4">
          The Psychopathology & Social Neuroscience Lab is dedicated to understanding the complex interplay between mental health disorders and social cognitive processes. Our interdisciplinary approach combines cutting-edge neuroscience techniques with rigorous psychological methods to explore how social factors influence the development, maintenance, and treatment of psychopathology.
        </p>
        <p className="text-lg mb-4">
          Our research spans a wide range of topics, including emotion regulation in depression, social cognition deficits in schizophrenia, and the impact of social support on stress responses. By bridging the gap between social neuroscience and clinical psychology, we aim to develop more effective interventions and contribute to a deeper understanding of mental health in its social context.
        </p>
      </div>
    </AppLayout>
  )}