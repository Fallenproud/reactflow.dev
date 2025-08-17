import React from 'react';
import { newsData } from '../../data/newsData';

export function NewsSection() {
  return (
    <div className="relative box-border my-16 md:my-24">
      <ol className="box-border gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] list-none w-full border border-gray-100 p-8 rounded-3xl border-solid md:grid-cols-[repeat(2,minmax(0px,1fr))]">
        {newsData.map((article) => (
          <li key={article.id} role="article" className={article.className}>
            <div className="box-border">
              <header className="box-border">
                <p className="text-neutral-500 text-sm box-border leading-5">
                  <time className="box-border">{article.date}</time>
                </p>
                <h1 className="text-2xl font-semibold box-border leading-8 mt-2">
                  <a href={article.link} className="box-border">{article.title}</a>
                </h1>
                <div className="box-border flex flex-wrap mt-2">
                  {article.authors.map((author, index) => (
                    <div key={index} className="items-center box-border flex mr-4 mb-4">
                      <div className="text-sm items-end box-border gap-x-2 flex leading-5 gap-y-2">
                        <a href={author.link} className="box-border block">{author.name}</a>
                        <span className="text-neutral-500 box-border block"> – </span>
                        <div className="text-neutral-500 box-border">{author.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </header>
              <p className="box-border mt-4">{article.description}</p>
              {article.footer && (
                <footer className="box-border mt-4">
                  <p className="text-pink-600 text-sm items-center box-border inline-flex leading-5 mt-4">
                    <a href={article.link} className="box-border block">{article.footer.text}</a>
                    <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-33.svg" alt="Icon" className="box-border h-4 w-4 ml-1" />
                  </p>
                </footer>
              )}
            </div>
          </li>
        ))}
      </ol>
      <div className="absolute bg-[linear-gradient(rgba(0,0,0,0),rgba(255,255,255,0.7),rgb(255,255,255))] box-border block h-3/6 w-full bottom-0 md:hidden"></div>
    </div>
  );
}
