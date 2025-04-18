import FAQ from "./components/FAQ";
import { SAppWrapper, SHeader, SHeaderSubtitle, SHeaderTitle } from "./styles/styled";

function App() {
  return (
    <SAppWrapper>
      <SHeader>
        <SHeaderTitle>
          Frequently Asked Questions
        </SHeaderTitle>
        <SHeaderSubtitle>
          Everything you need to know about Fareplay's revolutionary ticketing
          platform
        </SHeaderSubtitle>
        <FAQ />
      </SHeader>
    </SAppWrapper>
  );
}

export default App;
