import styles from './hero.module.css'
import { Button } from '@mui/joy'

const Hero = () => {
  return (
    <div className={`${styles.container} relative text-center p-10 md:p-20`}>
      {/* Overlay to improve text visibility */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25 z-0"></div>

      <div className="relative z-10 max-w-2xl mx-auto space-y-4">
        <h1 className="text-7xl font-extrabold text-white drop-shadow-2xl">My Beer Guy</h1>
        <h2 className="text-4xl text-white drop-shadow-xl">Defenders of the Draft</h2>
        <h4 className="text-xl text-white drop-shadow-lg">Ensuring every draft is flawless with expert line cleaning and maintenance.</h4>
      </div>
      <div className="mt-8 relative z-10">
        <Button className={`${styles.button} text-lg bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
          Start Now
        </Button>
      </div>
    </div>
  )
}

export default Hero;
