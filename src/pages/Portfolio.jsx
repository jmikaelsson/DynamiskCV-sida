
import React, { useState, useEffect } from 'react';
import githubBild from '../github-bilder.json';
import './portfolio.css';


const Portfolio = () => {
  const [repository, setRepository] = useState([])

  useEffect(() => {
    fetch("http://api.github.com/users/jmikaelsson/repos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRepository(data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);



  return (
    <div>
      <article className='body-container'>
        <div className='portfolio-header'>
          <h1>Mina GitHub Projekt</h1>
        </div>
        <section className="portfolio-container">
{repository.map((repo, index) => (
  <section className="portfolio-item" key={repo.id}>
          {/* {githubBild.repos.map((b) => ( */}
              <div className='item'>
                <div className='imgBox'>
                  {/* <p>{githubBild.repos[index].bild}</p> */}
                  <img src={githubBild.repos[index%7].bild} alt='Bild på kod' />
                </div>
                <h3>{repo.name}</h3>
              </div>
              {/* ))} */}
              <div className="contentBox">
                <div className="content">
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <div>
                    <a className="button" href={repo.html_url}>Github</a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </section>
      </article>
    </div>
  );
}

export default Portfolio;

