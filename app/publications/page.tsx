import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import AppLayout from '@/components/app-layout'

export default function Publications() {
  const publications = [
    {
      title: "Neural correlates of emotion regulation in depression",
      authors: "Smith, J., Johnson, A., & Williams, B.",
      journal: "Journal of Affective Disorders",
      year: 2022,
    },
    {
      title: "Social cognition deficits in schizophrenia: A meta-analysis",
      authors: "Johnson, A., Brown, C., & Davis, E.",
      journal: "Schizophrenia Bulletin",
      year: 2021,
    },
    {
      title: "The role of oxytocin in social bonding and stress regulation",
      authors: "Williams, B., Taylor, D., & Smith, J.",
      journal: "Psychoneuroendocrinology",
      year: 2023,
    },
  ]

  return (
    <AppLayout>
      <h1 className="text-3xl font-bold mb-8">Publications</h1>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pub.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{pub.authors}</p>
              <p className="text-sm text-gray-600">{pub.journal}, {pub.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppLayout>
  )
}