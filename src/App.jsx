import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import Heading from './components/Heading';
import TabButton from './components/TabButton';

function App() {
const [selectedTopic, setSelectedTopic] = useState();

let tabContent = <p> Please select a topic</p>;

if(selectedTopic){
  tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic.toLowerCase()]?.title}</h3>
      <p>{EXAMPLES[selectedTopic.toLowerCase()]?.description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic.toLowerCase()]?.code}</code>
      </pre>
    </div>
  );
}

console.log('APP COMPONENT RENDERED');

  function handleSelect(selectedButton) {
    console.log(setSelectedTopic);
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts 
                key={conceptItem.title}
                {...conceptItem}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
