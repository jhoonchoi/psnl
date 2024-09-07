import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import AppLayout from '@/components/app-layout'

export default function Research() {
  return (
    <AppLayout>
      <h1 className="text-3xl font-bold mb-8">Our Research</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Social Cognition in Psychopathology</CardTitle>
          </CardHeader>
          <CardContent>
            Investigating how individuals with various psychopathologies process social information and interact with others.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Neural Bases of Emotion Regulation</CardTitle>
          </CardHeader>
          <CardContent>
            Exploring the brain mechanisms underlying emotion regulation in both healthy individuals and those with mental health disorders.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Stress and Social Support</CardTitle>
          </CardHeader>
          <CardContent>
            Examining how social support influences stress responses and overall mental health outcomes.
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}