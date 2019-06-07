import React, { useState, useEffect } from 'react'
import Card from '../components/Card'

const categoriesId = {
  politica: 1,
  internacionales: 2,
  tecnologia: 3,
  espectaculos: 4,
  deportes: 5
}

const Category = ({ match }) => {
  const category = match.params.category
  // const categoryFilter = categoriesId.find(item => item.name === category)
  // const { id, name } = categoryFilter
  const id = categoriesId[category];
  const [err, setError] = useState(null);
  const [categoryId, setCategoryId] = useState(id);
  const [categoryName, setCategoryName] = useState(category);
  const [isLoading, setIsLoading] = useState(false);
  const [newsBackup, setNewsBackup] = useState([]);
  const [newsFilter, setNewsFilter] = useState([]);
  console.log('id', id, category)

  useEffect(() => {
    console.log('categoryId', categoryId)
    if(categoryId !== id) {
      console.log('diferente', categoryId, id)
      setCategoryId(id)
      setCategoryName(category)
      console.log('actualizado', categoryId)

    }
    const getNewsPerCategory = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`https://api.canillitapp.com/news/category/${categoryId}`)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        if (data.error) {
          throw new Error(data.error)
        }

        setNewsBackup(data)
        setNewsFilter(data)
      } catch (error) {
        console.log('TCL: Shop -> componentDidMount -> error', error)
        setError(String(error))
      } finally {
        setIsLoading(false)
      }
    }
    getNewsPerCategory()
  }, [categoryId, id, category]);

  return (
    <div>
      <h1 className="is-size-2">News By Category {categoryName}</h1>

      {isLoading && <p>loading...</p>}
      {err && <p>Ups, hubo un error: {err}</p>}

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

export default Category
