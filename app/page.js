import HeroSection from '@/app/_containers/HeroSection'
import ProjectsSection from '@/app/_containers/ProjectsSection'
import SkillsSection from '@/app/_containers/SkillsSection'
import ContactSection from '@/app/_containers/ContactSection'
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'

export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen w-screen flex-col items-center px-2 s:px-4 md:px-6 isolate transition-all duration-200">
       <HeroSection/>
       <ProjectsSection/>
       <SkillsSection/>
       <ContactSection/>
    </main>
    <Footer/>
    </>
  )
}
