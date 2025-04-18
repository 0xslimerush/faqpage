import FAQ from "./components/FAQ";
import {
  SAppWrapper,
  SAppContainer,
  SHeaderSubtitle,
  SHeaderTitle,
} from "./styles/styled";

function App() {
  return (
    <SAppWrapper>
      <SAppContainer>
        <SHeaderTitle>Frequently Asked Questions</SHeaderTitle>
        <SHeaderSubtitle>
          Everything you need to know about Fareplay's revolutionary ticketing
          platform
        </SHeaderSubtitle>
        <FAQ />
      </SAppContainer>
    </SAppWrapper>
  );
}

export default App;
