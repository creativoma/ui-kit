import { useState } from 'react'
import { Button, Card } from '@creativoma/ui-kit'

export const Playground = () => {
  const [loading, setLoading] = useState(false)

  const handleLoadingTest = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-8 py-16">
        <header className="mb-16">
          <h1 className="text-3xl font-light text-gray-900">UI Kit</h1>
          <p className="mt-2 text-gray-600">Component library playground</p>
        </header>

        <section className="mb-16">
          <h2 className="mb-8 text-xl font-medium text-gray-900">Button</h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-sm font-medium text-gray-700">
                Variants
              </h3>
              <div className="flex gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium text-gray-700">Sizes</h3>
              <div className="flex items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium text-gray-700">States</h3>
              <div className="flex gap-3">
                <Button loading={loading} onClick={handleLoadingTest}>
                  {loading ? 'Loading...' : 'Test Loading'}
                </Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-xl font-medium text-gray-900">Card</h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-sm font-medium text-gray-700">Basic</h3>
              <Card className="w-80">
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Card Title
                </h3>
                <p className="text-gray-600">
                  This is a basic card with some content inside.
                </p>
              </Card>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium text-gray-700">
                Padding variants
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <Card padding="sm" className="text-center">
                  <p className="text-gray-600">Small padding</p>
                </Card>
                <Card padding="md" className="text-center">
                  <p className="text-gray-600">Medium padding</p>
                </Card>
                <Card padding="lg" className="text-center">
                  <p className="text-gray-600">Large padding</p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium text-gray-700">
                Shadow variants
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <Card shadow="none" className="text-center">
                  <p className="text-gray-600">No shadow</p>
                </Card>
                <Card shadow="sm" className="text-center">
                  <p className="text-gray-600">Small shadow</p>
                </Card>
                <Card shadow="md" className="text-center">
                  <p className="text-gray-600">Medium shadow</p>
                </Card>
                <Card shadow="lg" className="text-center">
                  <p className="text-gray-600">Large shadow</p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium text-gray-700">
                With content
              </h3>
              <Card className="w-96">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    Settings
                  </h3>
                  <Button size="sm" variant="ghost">
                    Edit
                  </Button>
                </div>
                <p className="mb-4 text-gray-600">
                  Manage your account settings and preferences.
                </p>
                <div className="flex gap-2">
                  <Button size="sm">Save changes</Button>
                  <Button size="sm" variant="secondary">
                    Cancel
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
