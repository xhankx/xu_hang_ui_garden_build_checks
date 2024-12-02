import React from 'react';
import Button from './components/Button/Button'; 
import Label from './components/Label/Label';   
import Text from './components/Text/Text';     
import Card from './components/Card/Card';     
import Table from './components/Table/Table';  
import Dropdown from './components/Dropdown/Dropdown'; 
import RadioButton from './components/Radio_button/Radio_button'; 
import Img from './components/Img/Img';        
import HeroImage from './components/Hero_image/Hero_image'; 

import styled from 'styled-components';

// Container for overall layout
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

// Section styling for headers and components
const Section = styled.section`
  margin-bottom: 40px;
`;

// Styled header for each section
const SectionHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

// Subheader for individual component titles
const ComponentTitle = styled.h3`
  font-size: 1.5rem;
  color: #444;
  margin-top: 20px;
`;

const App: React.FC = () => {

  // Sample options for the Dropdown
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  // Fixed selected option for showcasing (default value)
  const selectedOption = 'option2'; 

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Component Library Showcase</h1>

      {/* Button Section */}
      <Section>
        <SectionHeader>Button Component</SectionHeader>
        <Button label="Click Me" size="medium" backgroundColor="#007bff" />
        <Button label="Disabled Button" size="medium" backgroundColor="#cccccc" disabled={true} />
      </Section>

      {/* Label Section */}
      <Section>
        <SectionHeader>Label Component</SectionHeader>
        <Label text="Default Label" />
        <Label text="Custom Styled Label" fontSize="1.5rem" color="#007bff" fontWeight="bold" margin="10px 0" />
        <Label text="Another Styled Label" fontSize="1rem" color="green" fontWeight="lighter" margin="5px 0" />
        <Label text="Name:" htmlFor="name" fontSize="1.2rem" color="purple" fontWeight="normal" />
        <input id="name" type="text" />
      </Section>

      {/* Text Section */}
      <Section>
        <SectionHeader>Text Component</SectionHeader>
        <Text fontSize="20px" color="blue" fontWeight="bold" lineHeight="1.8" margin="20px">
          This is a custom Text component!
        </Text>
        <Text fontSize="16px" color="red">
          This is a smaller red text.
        </Text>
        <Text>
          Default styled text with no custom properties.
        </Text>
      </Section>

      {/* Card Section */}
      <Section>
        <SectionHeader>Card Component</SectionHeader>
        <Card title="Default Card" content="This is a default card without any custom styling." imageUrl="https://via.placeholder.com/400x200" size="medium" />
        <Card title="Small Card" content="This is a smaller version of the card." imageUrl="https://via.placeholder.com/200x100" size="small" backgroundColor="#f9f9f9" />
        <Card title="Large Card (No Image)" content="This is a larger card without an image." size="large" backgroundColor="#e0f7fa" />
        <Card title="Custom Sized Card" content="This is a card with a custom size and background." size="medium" backgroundColor="#fff3e0" imageUrl="https://via.placeholder.com/400x200" />
        <Card title="Card Without Background" content="This card does not have a background color." size="medium" imageUrl="https://via.placeholder.com/400x200" />
      </Section>

      {/* Table Section */}
      <Section>
        <SectionHeader>Table Component</SectionHeader>
        <Table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1, Cell 1</td>
              <td>Row 1, Cell 2</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      {/* Dropdown Section */}
      <Section>
        <SectionHeader>Dropdown Component</SectionHeader>
        <ComponentTitle>Dropdown with default selected option</ComponentTitle>
        <Dropdown options={options} disabled={false} onChange={() => {}} backgroundColor="#e0f7fa" />
        <p>Selected Option: {selectedOption}</p>
      </Section>

      {/* RadioButton Section */}
      <Section>
        <SectionHeader>RadioButton Component</SectionHeader>
        <RadioButton label="Option 1" name="group1" value="1" checked={false} onChange={() => {}} />
        <RadioButton label="Option 2" name="group1" value="2" checked={false} onChange={() => {}} />
        <RadioButton label="Option 3" name="group1" value="3" checked={false} onChange={() => {}} />
      </Section>

      {/* Image Section */}
      <Section>
        <SectionHeader>Img Component</SectionHeader>
        <Img src="https://via.placeholder.com/800x400" alt="Default Image" />
        <Img src="https://via.placeholder.com/300x200" alt="Custom Sized Image" width="300px" height="200px" />
        <Img src="https://via.placeholder.com/400x400" alt="Rounded Image" width="300px" height="300px" borderRadius="15px" />
        <Img src="https://via.placeholder.com/600x400" alt="Image with Object Fit" width="300px" height="200px" objectFit="contain" />
        <Img src="https://via.placeholder.com/600x400" alt="Image with Cover Object Fit" width="300px" height="200px" objectFit="cover" />
      </Section>

      {/* HeroImage Section */}
      <Section>
        <SectionHeader>HeroImage Component</SectionHeader>
        <HeroImage title="Welcome to My Website" imageUrl="https://via.placeholder.com/1200x600" height="500px" />
      </Section>
    </Container>
  );
};

export default App;
