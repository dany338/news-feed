import React, { Component } from 'react'
import Card from '../components/Card'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale('es')

class Home extends Component {
  constructor() {
    super()
    this.state = {
      newsBackup: [],
      newsFilter: [],
      error: null,
      isLoading: false,
      currentDate: dayjs()
    }
  }

  async componentDidMount() {
    const { currentDate } = this.state
    const dateFormatted = currentDate.format('YYYY[-]MM[-]DD')
    try {

      this.setState({ isLoading: true })

      const response = await fetch(`https://api.canillitapp.com/latest/${dateFormatted}`)
      const data = await response.json()

      this.setState({ newsBackup: data, newsFilter: data })
    } catch (error) {
      console.log('TCL: Shop -> componentDidMount -> error', error)
      this.setState({ error: String(error) })
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { newsFilter, error, isLoading } = this.state

    return (
      <div>
        <h1 className="is-size-2">News</h1>

        {isLoading && <p>loading...</p>}
        {error && <p>Ups, hubo un error: {error}</p>}

        <section className="section" style={{ marginTop: '3em' }}>
          <div className="container">
            <div className="columns is-multiline">
              {newsFilter.slice(0, 25).map(newItem => (
                <div className="column is-one-third" key={newItem.news_id}>
                  <Card {...newItem} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Home
