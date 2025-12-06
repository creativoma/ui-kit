import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Avatar,
  AvatarFallback,
  Switch,
  Label,
  Separator,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@creativoma/ui-kit'
import { useState } from 'react'

export default function SaasProductLanding() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-0">
            ✨ New: AI-Powered Analytics
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build Better Products
            <br />
            <span className="text-violet-200">10x Faster</span>
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 mb-10 max-w-3xl mx-auto">
            The all-in-one platform for product teams. Streamline your workflow, collaborate seamlessly, and ship features your users love.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-violet-700 hover:bg-violet-50 font-semibold px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
              Book a Demo
            </Button>
          </div>
          <p className="text-violet-200 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 px-6 bg-slate-50 border-b">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-slate-500 mb-8">Trusted by 10,000+ teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {['Stripe', 'Notion', 'Figma', 'Linear', 'Vercel', 'Supabase'].map((company) => (
              <span key={company} className="text-xl font-bold text-slate-400">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything you need to ship faster
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful features designed for modern product teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <CardTitle>Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Get instant insights into user behavior with our AI-powered analytics dashboard. Track metrics that matter.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <CardTitle>One-Click Deploy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Deploy to production in seconds. Our CI/CD pipeline handles everything from testing to rollback.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  SOC 2 Type II certified. GDPR compliant. Your data is encrypted at rest and in transit.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <CardTitle>Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Real-time collaboration with comments, mentions, and instant notifications. Keep everyone in sync.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🔌</span>
                </div>
                <CardTitle>100+ Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connect with your favorite tools. Slack, GitHub, Jira, Figma, and many more out of the box.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <CardTitle>Mobile App</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Stay productive on the go. Full-featured iOS and Android apps for your entire team.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Choose the plan that works for your team
            </p>
            <div className="flex items-center justify-center gap-3">
              <Label htmlFor="billing" className={!isAnnual ? 'text-slate-900' : 'text-slate-500'}>Monthly</Label>
              <Switch id="billing" checked={isAnnual} onCheckedChange={setIsAnnual} />
              <Label htmlFor="billing" className={isAnnual ? 'text-slate-900' : 'text-slate-500'}>
                Annual <Badge variant="secondary" className="ml-2">Save 20%</Badge>
              </Label>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>For small teams getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${isAnnual ? '19' : '24'}</span>
                  <span className="text-slate-500">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">✓ Up to 5 team members</li>
                  <li className="flex items-center gap-2">✓ 10 projects</li>
                  <li className="flex items-center gap-2">✓ Basic analytics</li>
                  <li className="flex items-center gap-2">✓ Email support</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="border-violet-500 border-2 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-violet-600">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For growing teams</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${isAnnual ? '49' : '59'}</span>
                  <span className="text-slate-500">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">✓ Up to 20 team members</li>
                  <li className="flex items-center gap-2">✓ Unlimited projects</li>
                  <li className="flex items-center gap-2">✓ Advanced analytics</li>
                  <li className="flex items-center gap-2">✓ Priority support</li>
                  <li className="flex items-center gap-2">✓ Custom integrations</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-violet-600 hover:bg-violet-700">Get Started</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">✓ Unlimited team members</li>
                  <li className="flex items-center gap-2">✓ Unlimited everything</li>
                  <li className="flex items-center gap-2">✓ Custom analytics</li>
                  <li className="flex items-center gap-2">✓ 24/7 dedicated support</li>
                  <li className="flex items-center gap-2">✓ SLA guarantee</li>
                  <li className="flex items-center gap-2">✓ On-premise option</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Loved by teams everywhere
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "This tool has completely transformed how our team works. We've cut our release cycle in half.",
                author: "Sarah Chen",
                role: "VP of Engineering, TechCorp",
                initials: "SC"
              },
              {
                quote: "The analytics features are incredible. We finally understand what our users really want.",
                author: "Marcus Johnson",
                role: "Product Manager, StartupXYZ",
                initials: "MJ"
              },
              {
                quote: "Best investment we've made this year. The ROI was visible within the first month.",
                author: "Emily Rodriguez",
                role: "CTO, ScaleUp Inc",
                initials: "ER"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-slate-50 border-0">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-violet-600 text-white">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.author}</div>
                      <div className="text-slate-500 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently asked questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the free trial work?</AccordionTrigger>
              <AccordionContent>
                You get full access to all Pro features for 14 days. No credit card required. At the end of the trial, you can choose a plan that fits your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I change plans later?</AccordionTrigger>
              <AccordionContent>
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards (Visa, MasterCard, American Express) as well as PayPal and wire transfers for annual plans.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is my data secure?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We're SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit using industry-standard encryption.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-violet-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl text-violet-100 mb-10">
            Join 10,000+ teams already using our platform to build better products.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-violet-700 hover:bg-violet-50 font-semibold px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">ProductFlow</h3>
              <p className="text-sm">Building the future of product development, one feature at a time.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
                <li><a href="#" className="hover:text-white">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-slate-800 my-8" />
          <div className="flex flex-wrap justify-between items-center gap-4 text-sm">
            <p>© 2025 ProductFlow. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
