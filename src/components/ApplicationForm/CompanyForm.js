import React, { useState } from 'react'
import { Box, Field, GU, Header, DropDown, Main, TextInput } from '@aragon/ui'

// Company name
// Short description(50 words)
// Describe the product and what it does
// Email to contact
// Category --> Dropdown list
// Buttton to next forma

function CompanyForm() {
  const [selected, setSelected] = useState()
  return (
    <Main>
      <Header primary="Idea Application Form" />
      <Box
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
          height: ${100 * GU}px;
        `}
      >
        <Field label="Company name:">
          <input />
        </Field>
        <Field label="What your company does in 50 words:">
          <input />
        </Field>
        <Field label="Describe the product and what it does:">
          <TextInput multiline="true" />
        </Field>
        <Field label="Email to contact:">
          <TextInput />
        </Field>
        <Field label="Category">
          <DropDown
            items={['Arts', 'Design & Tech', 'Music', 'Food & Crafts']}
            selected={selected}
            onChange={setSelected}
          />
        </Field>
      </Box>
    </Main>
  )
}

export default CompanyForm
