import { useState } from 'react'

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  const [count, setCount] = useState(0)

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/pedrohbcosta.png',
        author: 'Pedro Batista',
        role: 'CMO @yellowberrymkt'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa ð,'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð,'},
        { type: 'link', content: 'ð jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-12-29 12:50:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/jramiresbrito.png',
        author: 'JoÃ£o Ramires',
        role: 'CTO @yellowberrymkt'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa ð,'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð,'},
        { type: 'link', content: 'ð jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-12-30 14:50:00'),
    },
  ]

  return (
    <div>
      <Header />
      
      <div className={ styles.wrapper }>
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      
      </div>
      
    </div>
    )
}
