import Link from 'next/link'
import React from 'react'
import { Button } from './common/Button'

export function Article() {
  return (
    <div>
      <span className="text-gray text-lg">18/10/2022</span>
      <h3 className="text-2xl">Titra formidable</h3>
      <p className="text-gray text-lg my-5">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.{' '}
      </p>
      <div>
        <Link href="#">
          <a className="text-primary font-semibold text-lg">En savoir plus</a>
        </Link>
      </div>
    </div>
  )
}

const Blog = () => {
  return (
    <section className="px-12 py-20">
      <h2 className="text-4xl text-dark text-center font-semibold ">Nos actualités les plus récentes</h2>
      <div className="grid grid-cols-2 mt-28 mb-10 gap-28">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
      <div className="flex justify-center my-20">
        <Button>Voir plus d'actualités</Button>
      </div>
    </section>
  )
}

export default Blog
