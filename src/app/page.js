import Hero from './components/hero/hero'
import Services from './components/services/services'
import Clients from './components/clients/clients'

export default async function Page() {
  return <div>
    <Hero />
    <Services />
    <Clients />
  </div>
}