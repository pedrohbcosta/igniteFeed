import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/sidebar';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      
      <div className={ styles.wrapper }>
        <Sidebar />
        
        <main>
          <Post 
            author="João Ramires"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet officiis nihil at, cumque sunt ipsam iste dolorum perferendis corporis laboriosam vel ullam quis sed sapiente libero ex suscipit accusamus, ratione molestias. Officiis suscipit vero voluptates distinctio nobis reiciendis architecto, impedit ullam culpa dolore ratione maiores eius accusantium quos iusto laborum!"
          />
          <Post
            author="Pedro Batista" 
            content="Lorem ipsum dolor sit amet."
          />
        </main>
      </div>
      
    </div>
    )
}
