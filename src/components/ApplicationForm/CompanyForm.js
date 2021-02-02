import React from 'react'
import {
  Form,
  Select,
  TextArea,
  Button,
  Header,
  Container,
  Segment,
} from 'semantic-ui-react'

class CompanyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Porgi',
      desc: 'Re-imaging ICO Fundrising',
      product: 'Marketplace that lets users invest and govern startups',
      email: 'corgi@porgi.io',
      category: 1,
      season: 54,
      series: 3,
      seriesDuration: 18,
      rate: 1,
      fee: 30,
      preSaleDuration: 2,
    }
  }

  // TODO: onSubmit and what after onSubmit? 

  updateCompany = e => {
    this.setState({ name: e.target.value })
  }

  updateDesc = e => {
    this.setState({ desc: e.target.value })
  }

  updateProduct = e => {
    this.setState({ product: e.target.value })
  }

  updateEmail = e => {
    this.setState({ email: e.target.value })
  }

  updateCategory = e => {
    this.setState({ category: e.target.value })
  }

  updateSeason = e => {
    this.setState({ season: e.target.value })
  }

  updateSeries = e => {
    this.setState({ series: e.target.value })
  }

  // TODO: now the series duration are equaly divided
  updateSeriesDuration = e => {
    this.setState({ seriesDuration: e.target.value })
  }

  generateSeries() {
    let content = []
    for (let serie = 1; serie <= this.state.series; serie++) {
      content.push(
        <Form.Field>
          <label>{'Serie ' + serie + ' duration'}</label>
          <input
            placeholder="1"
            value={this.state.seriesDuration}
            onChange={this.updateSeriesDuration}
          />
        </Form.Field>
      )
    }
    return content
  }

  updateRate = e => {
    this.setState({ rate: e.target.value })
  }

  updateFee = e => {
    this.setState({ fee: e.target.value })
  }

  updatePreSaleDuration = e => {
    this.setState({ preSaleDuration: e.target.value })
  }

  render() {
    const options = [
      {
        key: 'Arts',
        text: 'Arts',
        value: 0,
      },
      {
        key: 'Design & Tech',
        text: 'Design & Tech',
        value: 1,
      },
      {
        key: 'Music',
        text: 'Music',
        value: 2,
      },
      {
        key: 'Food & Crafts',
        text: 'Food & Crafts',
        value: 3,
      },
    ]
    return (
      <Container>
        <Form>
          <Segment.Group>
            <Segment>
              <Header as="h3">Company Information</Header>

              <Form.Field>
                <label>Company name:</label>
                <input
                  placeholder="e.g. DropBox"
                  value={this.state.name}
                  onChange={this.updateCompany}
                />
              </Form.Field>
              <Form.Field>
                <label>What you company does in 50 words:</label>
                <input value={this.state.desc} onChange={this.updateDesc} />
              </Form.Field>
              <Form.Field
                control={TextArea}
                value={this.state.product}
                onChange={this.updateProduct}
                label="Describe your product and what is does:"
              />
              <Form.Field>
                <label>Email to contact:</label>
                <input
                  placeholder="john@doe.com"
                  value={this.state.email}
                  onChange={this.updateEmail}
                />
              </Form.Field>
              <Form.Field
                control={Select}
                label="Category"
                options={options}
                placeholder="Category"
                value={this.state.category}
                onChange={this.updateCategory}
              />
              {/* </Form> */}
            </Segment>
            <Segment>
              <Header as="h3">Season 1:</Header>
              {/* <Form> */}
              <Form.Field>
                <label>Season 1 duration:</label>
                <input
                  placeholder="1"
                  value={this.state.season}
                  onChange={this.updateSeason}
                />
              </Form.Field>
              <Form.Field>
                <label>Amount of Series</label>
                <input
                  placeholder="1"
                  value={this.state.series}
                  onChange={this.updateSeries}
                />
              </Form.Field>
              <Form.Group widths="equal">{this.generateSeries()}</Form.Group>
              {/* </Form> */}
            </Segment>
            <Segment>
              <Header as="h3">Pre-Sale for Season 1:</Header>
              {/* <Form> */}
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Exchange Rate of Tokens (Token for 1 ETH)</label>
                  <input
                    placeholder="1"
                    value={this.state.rate}
                    onChange={this.updateRate}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Developers' Fee %</label>
                  <input
                    placeholder="20%"
                    value={this.state.fee}
                    onChange={this.updateFee}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Pre-Sale Duration in weeks</label>
                  <input
                    placeholder="1"
                    value={this.state.preSaleDuration}
                    onChange={this.updatePreSaleDuration}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <Button fluid primary size="large">
                  Submit
                </Button>
              </Form.Field>
            </Segment>
          </Segment.Group>
        </Form>
      </Container>
    )
  }
}

export default CompanyForm
