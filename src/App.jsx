import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Paragraph from "./components/Paragraph"



function App() {

  // adasdasd

  return (
    <>
      <Heading content="This is my first title" title="asdasd"></Heading>
      <Heading content="This is my second title"></Heading>
      <Heading content="This is my third title"></Heading>

      <Paragraph>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
       Perspiciatis quidem molestiae fugit repudiandae distinctio tempora, quae amet, 
       nobis sit porro numquam commodi quibusdam. Dolores, nulla tenetur! 
       Culpa explicabo perferendis corporis.
      </Paragraph>

      <Counter />
    </>
  )
}

export default App
