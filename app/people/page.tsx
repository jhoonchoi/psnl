import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import AppLayout from '@/components/app-layout'

export default function People() {
  const people = [
    {
      name: "Dr. Jane Smith",
      role: "Principal Investigator",
      bio: "Dr. Smith specializes in the neural bases of emotion regulation in psychopathology.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Alex Johnson",
      role: "Postdoctoral Researcher",
      bio: "Dr. Johnson's research focuses on social cognition deficits in schizophrenia.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sarah Brown",
      role: "PhD Student",
      bio: "Sarah is investigating the effects of social support on stress responses in depression.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <AppLayout>
      <h1 className="text-3xl font-bold mb-8">Our People</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {people.map((person, index) => (
          <Card key={index}>
            <CardHeader>
              <Image
                src={person.image}
                alt={person.name}
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <CardTitle className="text-center mt-4">{person.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-2">{person.role}</p>
              <p className="text-sm">{person.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppLayout>
  )
}