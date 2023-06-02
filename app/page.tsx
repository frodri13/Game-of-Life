import Grid from '@/components/Grid'
import Rules from '@/components/Rules'

export default function Home() {
  return (
      <main>
        <div className='flex gap-2'>
          <Grid />
          <Rules />
        </div>
      </main>
  )
}
